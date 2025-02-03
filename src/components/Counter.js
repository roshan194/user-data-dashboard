// src/components/Counter.js
import React from "react";
import "./Counter.css"; // Add a CSS file for styling

const Counter = ({ count, setCount }) => {
  return (
    <div className="counter-container">
      <p className="counter-value">Count: {count}</p>
      <div className="counter-buttons">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;