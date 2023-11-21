import React, { useEffect, useState } from "react";

const PlayerName = ({ name, turn }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("points") || "[]"));
  }, []);
  return (
    <>
      <div className="width_full padding_ten names d_flex justifyContent_center alignItems_center">
        <h2
          className="colorWhite "
          style={{
            textDecoration: turn && "underline",
            color: !turn && "grey",
            width: "14%",
          }}
        >
          {name.toUpperCase()}
        </h2>
        <h2 className="score">
          SCORE :
          <span>&nbsp;{name === "COMPUTER" ? data[1] || 0 : data[0] || 0}</span>
        </h2>
      </div>
    </>
  );
};

export default PlayerName;
