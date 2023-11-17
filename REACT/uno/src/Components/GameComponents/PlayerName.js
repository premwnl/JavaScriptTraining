import React from "react";

const PlayerName = ({ name }) => {
  return (
    <>
      <div className="width_full padding_ten names">
        <h2 className="colorWhite ">{name.toUpperCase()}</h2>
      </div>
    </>
  );
};

export default PlayerName;
