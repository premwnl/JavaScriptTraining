import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/result.css";
const Result = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("points") || "[]"));
  }, []);

  return (
    <>
      <div
        id="resultModal"
        className="d_flex flex_col justifyContent_center colorWhite alignItems_center padding_twenty "
        style={{ fontSize: "5rem" }}
      >
        <h1>R E S U L T</h1>
        <h3>
          CPU POINTS : <span id="points">{data[1] || 0}</span>
        </h3>
        <h3>
          PLAYER POINTS : <span id="points">{data[0] || 0}</span>
        </h3>
        <div className="buttons">
          <button
            className="colorAqua playAgain modalInput"
            onClick={() => navigate("/game")}
          >
            P L A Y A G A I N
          </button>
          <button
            className="colorAqua playAgain modalInput"
            onClick={() => {
              navigate("/");
              localStorage.removeItem("points");
            }}
          >
            E X I T
          </button>
        </div>
      </div>
    </>
  );
};
export default Result;
