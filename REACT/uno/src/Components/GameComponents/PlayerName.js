import React from "react";

const PlayerName = ({ name, turn }) => {
  return (
    <>
      <div className="width_full padding_ten names">
        <h2
          className="colorWhite "
          style={{
            textDecoration: turn && "underline",
            color: !turn && "grey",
          }}
        >
          {name.toUpperCase()}
        </h2>
      </div>
    </>
  );
};

export default PlayerName;
