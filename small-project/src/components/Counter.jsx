import React, { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => { 
    if (count < 9) {
    setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Current Count: {count}</p>
      <button onClick={increment} disabled={count >= 9}>Increment</button>
      <button onClick={decrement} disabled={count <= 0}>Decrement</button>
    </div>
  );
}