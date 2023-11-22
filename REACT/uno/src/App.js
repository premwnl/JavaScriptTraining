import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Game from "./Components/Game";
import Result from "./Components/Result";

function App() {
  const [data, setData] = useState({ name: "", time: "" });
  const setUserName = (name, time) => {
    setData({ name, time });
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Home setUserName={setUserName} />} />
        <Route path="/game" element={<Game data={data} />} />
        <Route path="/result" element={<Result user={data} />} />
      </Routes>
    </>
  );
}

export default App;
