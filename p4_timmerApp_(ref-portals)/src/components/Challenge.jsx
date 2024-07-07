import { useState, useRef } from "react";
import Result from "./Result.jsx";

export default function Challenge({ title, timer }) {
  const countDown = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(timer * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < timer * 1000;

  if(timeRemaining <= 0){
    clearInterval(countDown.current);
    setTimeRemaining(timer * 1000);
    dialog.current.open();
  }
  
  function handleStart() {
    countDown.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining -10);
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(countDown.current);
  }

  return (
    <>
    <Result ref={dialog} result='lost' timer={timer} />
    <section className="challenge"> 
      <h2>{title}</h2>      
      <p className="challenge-timer">
        {timer} second{timer > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerIsActive ? handleStop : handleStart}>
          {timerIsActive ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerIsActive ? "active" : undefined}>
        {timerIsActive ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
    </>
  );
}
