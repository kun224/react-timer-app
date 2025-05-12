import React, { useState, useEffect } from "react";
import "./App.css";
import TimerDisplay from "./TimerDisplay";
import TimerButtons from "./TimerButtons";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // 타이머 실행 여부

  // 자동 증가 타이머
  useEffect(() => {
    let interval = null;

    if (isRunning && seconds < 20) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    } 

    if (seconds === 20 && isRunning) {
    setIsRunning(false);
    alert("20초가 지났습니다!");
    }

    // cleanup: 컴포넌트가 unmount되거나 다시 실행될 때 정리
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
    console.log("리셋되었습니다.")
  };

  return (
    <div className="container">
      <TimerDisplay seconds={seconds} />
      <TimerButtons onStart={handleStart} onStop={handleStop} onReset={handleReset} />
    </div>
  );
}

export default App;
