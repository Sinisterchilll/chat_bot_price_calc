// app/routes/index.tsx

import { Link } from '@remix-run/react';
import Calculator from './calculator';

export default function Index() {
  return (
    <div>
      <h1>Welcome to the Chatbot Savings Calculator</h1>
      <Calculator/>
    </div>
  );
}
