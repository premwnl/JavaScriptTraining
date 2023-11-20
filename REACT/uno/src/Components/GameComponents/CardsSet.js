import React from "react";

const CardsSet = ({ cards, player }) => {
  const playerCards = () => {
    return cards?.map((card, index) =>
      card.color == "wild" ? (
        <div className={card.value} key={index} style={{ zIndex: index }}></div>
      ) : card.value == "skip" ? (
        <div
          className="card"
          style={{ background: card.color, zIndex: index }}
          key={index}
        >
          <i className="fa-solid fa-ban"></i>
          <i className="fa-solid fa-ban"></i>
          <i className="fa-solid fa-ban"></i>
        </div>
      ) : card.value == "reverse" ? (
        <div
          className="card"
          style={{ background: card.color, zIndex: index }}
          key={index}
        >
          <i className="fa-solid fa-rotate"></i>
          <i className="fa-solid fa-rotate"></i>
          <i className="fa-solid fa-rotate"></i>
        </div>
      ) : card.value == "drawTwo" ? (
        <div
          className="card"
          style={{ background: card.color, zIndex: index }}
          key={index}
        >
          <i className="fa-solid fa-plus">2</i>
          <i className="fa-solid fa-plus">2</i>
          <i className="fa-solid fa-plus">2</i>
        </div>
      ) : (
        <div
          className="card"
          style={{ background: card.color, zIndex: index }}
          key={index}
        >
          <div>{card.value}</div>
          <div>{card.value}</div>
          <div>{card.value}</div>
        </div>
      )
    );
  };
  const cpuCards = () => {
    return cards?.map((card, index) => (
      <div
        className="card_bg"
        key={index}
        style={{ pointerEvents: "none", zIndex: index }}
      ></div>
    ));
  };
  return (
    <>
      <div
        className="width_full padding_ten d_flex justifyContent_center alignItems_center overflow colorWhite"
        style={{ height: "30%" }}
        id="playerCards"
      >
        {player === "player" ? playerCards() : cpuCards()}
      </div>
    </>
  );
};

export default CardsSet;
