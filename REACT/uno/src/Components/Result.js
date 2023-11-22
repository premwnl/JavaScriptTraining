import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/result.css";
const Result = ({ user }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [points, setPoints] = useState([0, 0]);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("points") || "[]"));
  }, []);
  useEffect(() => {
    if (data.length) {
      let value = data.find((item) => item.playerName == user.name);
      value && setPoints([value?.playerPoints, value?.cpuPoints]);
    }
  }, [data]);
  return (
    <>
      <div
        id="resultModal"
        className="d_flex flex_col justifyContent_center colorWhite alignItems_center padding_twenty "
        style={{ fontSize: "5rem" }}
      >
        <h1>R E S U L T</h1>
        <h3>
          CPU POINTS : <span id="points">{points[1]}</span>
        </h3>
        <h3>
          {user.name || "PLAYER"} POINTS : <span id="points">{points[0]}</span>
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
