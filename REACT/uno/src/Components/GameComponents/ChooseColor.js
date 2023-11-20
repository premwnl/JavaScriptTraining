import React from "react";

const ChooseColor = ({ setChooseColor, setColor, setTurn, openSet }) => {
  const decideColor = (color) => {
    setColor(color);
    setChooseColor(false);
    openSet[0].value === "wild"
      ? setTurn({ player: false, cpu: true })
      : setTurn({ player: true, cpu: false });
  };
  return (
    <>
      <div
        id="chooseColor"
        className="d_flex flex_col justifyContent_center alignItems_center padding_twenty"
      >
        <h1 className="colorWhite">Choose a Color</h1>
        <div className="d_flex">
          <div
            className="wildColors margin_ten"
            style={{ backgroundColor: "red" }}
            onClick={() => decideColor("red")}
          />
          <div
            className="wildColors margin_ten"
            style={{ backgroundColor: "green" }}
            onClick={() => decideColor("green")}
          />
          <div
            className="wildColors margin_ten"
            style={{ backgroundColor: "blue" }}
            onClick={() => decideColor("blue")}
          />
          <div
            className="wildColors margin_ten"
            style={{ backgroundColor: "yellow" }}
            onClick={() => decideColor("yellow")}
          />
        </div>
      </div>
    </>
  );
};

export default ChooseColor;
