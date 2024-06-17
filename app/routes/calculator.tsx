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

  const expenseBefore = calculateExpenseBefore();
  const estimatedSavings = calculateSavings();

  const maxValue = Math.max(expenseBefore, estimatedSavings);
  const expenseHeight = (expenseBefore / maxValue) * 100;
  const savingsHeight = (estimatedSavings / maxValue) * 100;

  return (
    <div className="p-6 bg-white rounded-lg ">
      <div className="flex items-end justify-center h-64 space-x-8">
        <div className="flex flex-col items-center">
          <div
            className="w-16 bg-gray-200 rounded-md"
            style={{ height: `calc(${expenseHeight}% + 50px)`, minHeight: '50px' }}
          ></div>
          <span className="mt-2 text-gray-800">Cost with Agents</span>
          <span className="text-red-600 font-bold">${expenseBefore.toFixed(2)}</span>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="w-16 bg-blue-600 rounded-md"
            style={{ height: `calc(${savingsHeight}% + 50px)`, minHeight: '50px' }}
          ></div>
          <span className="mt-2 text-gray-800">Estimated Savings</span>
          <span className="text-green-600 font-bold">${estimatedSavings.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
