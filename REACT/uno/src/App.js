import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Game from "./Components/Game";
import Result from "./Components/Result";

function App() {
  const [name, setName] = useState("");

  const setUserName = (name) => {
    setName(name);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Home setUserName={setUserName} />} />
        <Route path="/game" element={<Game name={name} />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
