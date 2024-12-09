import React, { useEffect, useState } from "react";
const INTERVAL = 100;

export default function QuestionTimer({ timeout, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("SETTING TIMEOUT");

    const timer = setTimeout(onTimeOut, timeout);
    
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeOut]);

  useEffect(() => {
    console.log("SETTING interval");

    const interval = setInterval(() => {
      setRemainingTime((prevRemTime) => prevRemTime - INTERVAL);
    }, INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
