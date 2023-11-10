import React, { useState } from "react";
import Counter from "./Counter/Counter";
import Display from "./Counter/Display";

const App = () => {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <>
      <Counter increment={increment} decrement={decrement} reset={reset} />
      <Display count={count} />
    </>
  );
};

export default App;
