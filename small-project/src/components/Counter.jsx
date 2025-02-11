import React, { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => { 
    if (count < 10) {
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
      <button className='btn btn-primary' onClick={increment} disabled={count >= 10}>Increment</button>
      <button className='btn btn-primary' onClick={decrement} disabled={count <= 0}>Decrement</button>
    </div>
  );
}