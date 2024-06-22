import React from 'react';

type CalculatorProps = {
  agents: number;
  hours: number;
  costPerHour: number;
  tickets: number;
  autoResolved: number;
  resolutionTime: number;
};

const Calculator: React.FC<CalculatorProps> = ({
  agents,
  hours,
  costPerHour,
  tickets,
  autoResolved,
  resolutionTime,
}) => {

  const calculateSavings = (): number => {
    const ticketsResolvedByAI = tickets * (autoResolved / 100);
    const timeSaved = ticketsResolvedByAI * (resolutionTime / 60);
    const newCost = agents * hours * costPerHour -  timeSaved * costPerHour;
    return newCost;
  };

  const calculateExpenseBefore = (): number => {
    return agents * hours * costPerHour;
  };

  const expenseBefore = calculateExpenseBefore();
  const expenseAfter = calculateSavings();
  const savingsDifference =  expenseBefore - expenseAfter ;

  const maxValue = Math.max(expenseBefore, expenseAfter);
  const expenseHeight = (expenseBefore / maxValue) * 200;
  const savingsHeight = (expenseAfter / maxValue) * 200;

  return (
    <div className="p-20 bg-white rounded-lg flex flex-col items-center justify-center space-y-6">
      <div className="flex flex-row items-end justify-center space-x-8">
        <div className="flex flex-col items-center">
          <div
            className="w-16 bg-gray-200 rounded-md"
            style={{ height: `${expenseHeight}px` }}
          ></div>
          <div className="text-center mt-2">
            <span className="text-red-600 font-bold block">${expenseBefore.toFixed(2)}<span className='text-gray-400'>/month</span></span>
            <p className="text-blue-600 font-semibold"><span className='text-gray-400'>without</span> siteGPT</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="w-16 bg-blue-600 rounded-md"
            style={{ height: `${savingsHeight}px` }}
          ></div>
          <div className="text-center mt-2">
            <span className="text-green-600 font-bold block">${expenseAfter.toFixed(2)}<span className='text-gray-400'>/month</span></span>
            <p className="text-blue-600 font-semibold"><span className='text-gray-400'>with</span> siteGPT</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-6 ">
        {savingsDifference >= 0 ? (
          <p className="text-xl font-semibold py-10 ">
            You will be saving {' '}
            <span className="text-green-600">${savingsDifference.toFixed(2)}</span> per month!
          </p>
        ) : (
          <p className="text-xl font-semibold py-10">
            Your agents are not doing enough work!
            {/* , costing you{' '} */}
            {/* <span className="text-red-600">${Math.abs(savingsDifference).toFixed(2)}</span>. */}
          </p>
        )}
      </div>
    </div>
    
  );
};

export default Calculator;
