import React from "react";

const Skip = ({ setTurn, setSkip, skip }) => {
  return (
    <div
      id="playButton"
      className="d_flex justifyContent_center alignItems_center"
      style={{ marginRight: 300, opacity: skip ? 100 : 0 }}
      onClick={() => setTurn({ player: false, cpu: true }, setSkip(false))}
    >
      <i
        style={{ color: "aqua", marginLeft: 20 }}
        className="fa-solid fa-play fa-4x"
      ></i>
      <h3 className="colorAqua">&nbsp;SKIP</h3>
    </div>
  );
};

export default Skip;
