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

  const calculateExpenseBefore = (): { cost: number, overtimeHours: number, overtimeCost: number } => {
    const totalTimeBefore = tickets * (resolutionTime / 60);
    const availableHours = agents * hours;
    let overtimeHours = 0;
    let overtimeCost = 0;

    if (totalTimeBefore > availableHours) {
      overtimeHours = totalTimeBefore - availableHours;
      overtimeCost = overtimeHours * costPerHour;
      return { cost: (availableHours * costPerHour) + overtimeCost, overtimeHours, overtimeCost };
    }
    return { cost: totalTimeBefore * costPerHour, overtimeHours, overtimeCost };
  };

  const calculateExpenseAfterAI = (): { cost: number, overtimeHours: number, overtimeCost: number } => {
    const ticketsResolvedByHumanWithAI = tickets * (1 - autoResolved / 100);
    const totalTimeAfterAI = ticketsResolvedByHumanWithAI * (resolutionTime / 60);
    const availableHours = agents * hours;
    let overtimeHours = 0;
    let overtimeCost = 0;

    if (totalTimeAfterAI > availableHours) {
      overtimeHours = totalTimeAfterAI - availableHours;
      overtimeCost = overtimeHours * costPerHour;
      return { cost: (availableHours * costPerHour) + overtimeCost, overtimeHours, overtimeCost };
    }
    return { cost: totalTimeAfterAI * costPerHour, overtimeHours, overtimeCost };
  };

  const expenseBeforeData = calculateExpenseBefore();
  const expenseAfterData = calculateExpenseAfterAI();
  const expenseBefore = expenseBeforeData.cost;
  const expenseAfterAI = expenseAfterData.cost;
  const savingsDifference = expenseBefore - expenseAfterAI;

  const maxH = 300000;
  const maxValue = Math.max(expenseBefore, expenseAfterAI, maxH);

  const expenseHeight = (expenseBefore / maxValue) * 400;
  const savingsHeight = (expenseAfterAI / maxValue) * 400;
  const refrenceHeight = (maxH / maxValue) * 400;

  return (
    <div className="pt-10 bg-white rounded-lg flex flex-col items-center justify-center space-y-6">
      <div className="flex flex-row items-end justify-center space-x-2 ">
        <div className="flex flex-col items-center">
          <div
            className="w-1 bg-white mb-30"
            style={{ height: `${refrenceHeight}px` }}>
          </div>
          <div className="text-center mt-2">
            <span className="text-white font-bold block">
              /
            </span>
            
            <p className="text-white font-semibold">
              /
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div
            className="w-16 bg-gray-200 rounded-md "
            style={{ height: `${expenseHeight}px` }}
          ></div>
          <div className="text-center mt-2">
            <span className="text-red-600 font-bold block">
              ${expenseBefore.toFixed(2)}<span className='text-gray-400'>/month</span>
            </span>
            {/* {expenseBeforeData.overtimeCost > 0 && (
              <span className="text-sm text-red-600 block">
                (Includes ${expenseBeforeData.overtimeCost.toFixed(2)} overtime)
              </span>
            )} */}
            <p className="text-blue-600 font-semibold">
              <span className='text-gray-400'>without</span> siteGPT
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="w-16 bg-blue-600 rounded-md"
            style={{ height: `${savingsHeight}px` }}
          ></div>
          <div className="text-center mt-2">
            <span className="text-green-600 font-bold block">
              ${expenseAfterAI.toFixed(2)}<span className='text-gray-400'>/month</span>
            </span>
            {/* {expenseAfterData.overtimeCost > 0 && (
              <span className="text-sm text-red-600 block">
                (Includes ${expenseAfterData.overtimeCost.toFixed(2)} overtime)
              </span>
            )} */}
            <p className="text-blue-600 font-semibold">
              <span className='text-gray-400'>with</span> siteGPT
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        {savingsDifference >= 0 ? (
          <p className="text-xl font-semibold">
            You will be saving a whopping{' '}
            <span className="text-green-600">${savingsDifference.toFixed(2)}</span>
          </p>
        ) : (
          <p className="text-xl font-semibold">
            Your agents are not doing enough work, costing you{' '}
            <span className="text-red-600">${Math.abs(savingsDifference).toFixed(2)}</span>.
          </p>
        )}
      </div>
    </div>
  );
};

export default Calculator;
