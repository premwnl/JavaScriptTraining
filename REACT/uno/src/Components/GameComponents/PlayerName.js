import React, { useEffect, useState } from "react";

const PlayerName = ({ name, turn }) => {
  return (
    <>
      <div className="width_full padding_ten names d_flex justifyContent_center alignItems_center">
        <h2
          className="colorWhite "
          style={{
            textDecoration: turn && "underline",
            color: !turn && "grey",
            width: "34%",
          }}
        >
          {name}
        </h2>
      </div>
    </>
  );
};

export default PlayerName;
