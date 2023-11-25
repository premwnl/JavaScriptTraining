import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Pages/Home";
import { DashBoard } from "./Components/Pages/DashBoard";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
