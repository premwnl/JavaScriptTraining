import React from "react";

const History = ({ store, setStore }) => {
  const createTable = () => {
    return store.map((item) => {
      return (
        <tr key={item.playerName}>
          <td>{item.playerName}</td>
          <td>{item.playerPoints}</td>
          <td>{item.cpuPoints}</td>
        </tr>
      );
    });
  };
  return (
    <>
      <table className="data colorWhite d_flex flex_col alignItems_center ">
        {store.length ? (
          <>
            <thead>
              <tr>
                <th> NAME</th>
                <th>PLAYER </th>
                <th>CPU </th>
              </tr>
            </thead>
            <tbody className="d_flex flex_col colorWhite databody">
              {createTable()}
              <button
                className="clearHistory colorWhite"
                onClick={() => {
                  localStorage.removeItem("points");
                  setStore([]);
                }}
              >
                CLEAR
              </button>
            </tbody>
          </>
        ) : (
          <h2 className="d_flex header justifyContent_center alignItems_center">
            NO HISTORY
          </h2>
        )}
      </table>
    </>
  );
};

export default History;
