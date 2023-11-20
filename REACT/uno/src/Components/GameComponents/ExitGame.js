import React from "react";
import { useNavigate } from "react-router-dom";

const ExitGame = ({
  setCpuCards,
  setPlayerCards,
  setOpenCards,
  playerSet,
  cpuSet,
  copyDeck,
  openSet,
}) => {
  const navigate = useNavigate();
  const exitGame = () => {
    setCpuCards([]);
    setOpenCards([]);
    setPlayerCards([]);
    playerSet.length = 0;
    cpuSet.length = 0;
    copyDeck.length = 0;
    openSet.length = 0;
    navigate("/");
  };
  return (
    <>
      <h2
        id="exit"
        style={{ transform: "translateX(-80px)translateY(-8px)" }}
        className="colorAqua"
        onClick={() => exitGame()}
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
