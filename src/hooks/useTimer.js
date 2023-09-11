import { useState, useEffect } from 'react';

function useTimer(initialTime = 60) {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  const restart = () => {
    setTime(initialTime);
    setIsRunning(false);
  };

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  return {
    time,
    start,
    stop,
    restart,
  };
}

export default useTimer;
