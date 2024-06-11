// routes/calculator.tsx

import { useState } from 'react';

export default function Calculator() {
  const [agents, setAgents] = useState<number>(1);
  const [hours, setHours] = useState<number>(160);
  const [costPerHour, setCostPerHour] = useState<number>(15);
  const [tickets, setTickets] = useState<number>(1000);
  const [resolutionTime, setResolutionTime] = useState<number>(10);
  const [autoResolved, setAutoResolved] = useState<number>(50);
  
  const calculateSavings = (): number => {
    const monthlyAgentCost = agents * hours * costPerHour;
    const ticketsResolvedByAI = tickets * (autoResolved / 100);
    const timeSaved = ticketsResolvedByAI * (resolutionTime / 60);
    const costSaved = timeSaved * costPerHour;
    return costSaved;
  };

  return (
    <div>
      <div>
        <label>
          How many agents do you have? 
          <input 
            type="number" 
            value={agents} 
            onChange={(e) => setAgents(Number(e.target.value))} 
          />
        </label>
      </div>
      <div>
        <label>
          How many hours do they work per month?
          <input 
            type="number" 
            value={hours} 
            onChange={(e) => setHours(Number(e.target.value))} 
          />
        </label>
      </div>
      <div>
        <label>
          What is the cost per hour per agent?
          <input 
            type="number" 
            value={costPerHour} 
            onChange={(e) => setCostPerHour(Number(e.target.value))} 
          />
        </label>
      </div>
      <div>
        <label>
          How many tickets do you get each month?
          <input 
            type="number" 
            value={tickets} 
            onChange={(e) => setTickets(Number(e.target.value))} 
          />
        </label>
      </div>
      <div>
        <label>
          Time it takes to resolve each ticket (in mins)
          <input 
            type="number" 
            value={resolutionTime} 
            onChange={(e) => setResolutionTime(Number(e.target.value))} 
          />
        </label>
      </div>
      <div>
        <label>
          % of tickets automatically resolved by AI
          <input 
            type="number" 
            value={autoResolved} 
            onChange={(e) => setAutoResolved(Number(e.target.value))} 
          />
        </label>
      </div>
      <h2>Estimated Savings: ${calculateSavings().toFixed(2)}</h2>
    </div>
  );
}
