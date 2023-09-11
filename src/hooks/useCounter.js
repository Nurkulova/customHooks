import { useState } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const [incrementLevel, setIncrementLevel] = useState(1);
  const [decrementLevel, setDecrementLevel] = useState(1);

  const increment = () => {
    setCount(count + incrementLevel);
  };

  const decrement = () => {
    setCount(count - decrementLevel);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return {
    count,
    incrementLevel,
    setIncrementLevel,
    decrementLevel,
    setDecrementLevel,
    increment,
    decrement,
    reset,
  };
}

export default useCounter;
