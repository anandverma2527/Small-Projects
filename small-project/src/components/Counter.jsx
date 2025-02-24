import React, { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  // Increment function
  const increment = () => {
    setCount((prevCount) => (prevCount < 10 ? prevCount + 1 : prevCount));
  };

  // Decrement function
  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
  };

  return (
    <div className="container my-5">
      <div className="card shadow-sm rounded p-4" style={{ maxWidth: '400px', margin: '0 auto' }}>
        <h1 className="text-center mb-4">Counter</h1>
        <p className="text-center fs-4 mb-4">Current Count: <strong>{count}</strong></p>
        <div className="d-flex justify-content-between">
          <button 
            className="btn btn-success w-48" 
            onClick={increment} 
            disabled={count >= 10}
            style={{ fontSize: '1.2rem' }}>
            Increment
          </button>
          <button 
            className="btn btn-danger w-48" 
            onClick={decrement} 
            disabled={count <= 0}
            style={{ fontSize: '1.2rem' }}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
