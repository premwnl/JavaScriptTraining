import React, { useState, useEffect } from "react";

const Timer = ({ data, checkResult }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(data.time || 10);
  function start() {
    if (seconds <= 0) {
      setSeconds((prev) => prev + 59);
      setMinutes((prev) => prev - 1);
    } else setSeconds((prev) => prev - 1);
  }
  useEffect(() => {
    const time = setInterval(start, 10);
    if (minutes <= 0 && seconds <= 0) {
      checkResult();
      clearInterval(time);
    }
    return () => {
      clearInterval(time);
    };
  }, [seconds]);
  return (
    <div>
      <h1
        className="colorAqua"
        id="time"
        style={{ marginRight: 40, width: 280 }}
      >
        {minutes < 10 ? "0" + minutes : minutes} :
        {seconds < 10 ? "0" + seconds : seconds}
      </h1>
    </div>
  );
};

export default Timer;
