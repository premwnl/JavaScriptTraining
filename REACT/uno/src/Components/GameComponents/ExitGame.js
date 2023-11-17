import React from "react";
import { useNavigate } from "react-router-dom";

const ExitGame = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2
        id="exit"
        style={{ transform: "translateX(-80px)translateY(-8px)" }}
        className="colorAqua"
        onClick={() => navigate("/")}
      >
        <i
          className="fa-solid fa-arrow-right-from-bracket fa-2x "
          style={{ transform: "rotate(180deg)translateY(-8px)" }}
        ></i>
        EXIT
      </h2>
    </>
  );
};

export default ExitGame;
