import React from "react";

const Counter = (props) => {
  return (
    <>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
      <button onClick={props.reset}>0</button>
    </>
  );
};

export default Counter;
