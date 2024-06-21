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
    const monthlyAgentCost = agents * hours * costPerHour;
    const ticketsResolvedByAI = tickets * (autoResolved / 100);
    const timeSaved = ticketsResolvedByAI * (resolutionTime / 60);
    const costSaved = timeSaved * costPerHour;
    return costSaved;
  };

  const calculateExpenseBefore = (): number => {
    return agents * hours * costPerHour;
  };

  // const calculateSavings = (): number => {
  //   const monthlyAgentCost = agents * hours * costPerHour;
  //   const ticketsResolvedByhuman = tickets * (1 - autoResolved / 100);
  //   const timetaken = ticketsResolvedByhuman * (resolutionTime / 60);
  //   const costhumanwithai = (timetaken * costPerHour) / agents;
  //   return costhumanwithai;
  // };

  // const calculateExpenseBefore = (): number => {
  //   const totaltime = tickets * (resolutionTime/60) ;
  //   const costhuman = (totaltime * costPerHour) / agents ; 
  //   return costhuman
  // };

  const expenseBefore = calculateExpenseBefore();
  const estimatedSavings = calculateSavings();

  const maxValue = Math.max(expenseBefore, estimatedSavings);
  const expenseHeight = (expenseBefore / maxValue) * 200;
  const savingsHeight = (estimatedSavings / maxValue) * 200;

  return (
    <div className="p-10 bg-white rounded-lg flex flex-col justify-center ">
      <div className="flex items-end justify-center h-164 space-x-8 pt-20">
        <div className="flex flex-col items-center">
          <div
            className="w-16 bg-gray-200 rounded-md"
            style={{ height: `calc(${expenseHeight}px + 10px)` }}
          ></div>
          {/* <span className="mt-2 text-gray-800">Cost with Agents</span> */}
          <span className="text-red-600 font-bold mt-2">${expenseBefore.toFixed(2)}<span className='text-gray-400'>/month</span><p className='text-blue-600 mx-2 font-semibold'><span className='text-gray-400'>without</span> siteGPT</p></span>
        </div>
        <span className='font-bold mb-20'>or</span>
        <div className="flex flex-col items-center">
          <div
            className="w-16 bg-blue-600 rounded-md"
            style={{ height: `calc(${savingsHeight}px + 10px)` }}
          ></div>
          {/* <span className="mt-2 text-gray-800">Estimated Savings</span> */}
          <span className="text-green-600 font-bold mt-2">${estimatedSavings.toFixed(2)}<span className='text-gray-400'>/month</span><p className='text-blue-600 mx-6 font-semibold'><span className='text-gray-400'>with</span> siteGPT</p></span>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
