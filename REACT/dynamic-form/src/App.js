import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Pages/Home";
import { DashBoard } from "./Components/Pages/DashBoard";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [folderName, setFolderName] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setFolderName={setFolderName} />} />
          <Route
            path="/dashboard"
            element={<DashBoard folderName={folderName} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
