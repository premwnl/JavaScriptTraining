import React from "react";

const CardsSet = ({ cards, player, dropCard }) => {
  const skip = "fa-solid fa-ban";
  const reverse = "fa-solid fa-rotate";
  const drawTwo = "fa-solid fa-plus";

  const playerCards = () => {
    return cards?.map((card, index) =>
      card.color === "wild" ? (
        <div
          className={card.value}
          key={index}
          style={{ zIndex: index }}
          onClick={() => dropCard(card)}
        ></div>
      ) : card.value === "skip" ||
        card.value === "reverse" ||
        card.value === "drawTwo" ? (
        <div
          className="card"
          style={{ background: card.color, zIndex: index }}
          key={index}
          onClick={() => dropCard(card)}
        >
          <i
            className={
              card.value === "skip"
                ? skip
                : card.value === "reverse"
                ? reverse
                : drawTwo
            }
          >
            {card.value === "drawTwo" && "2"}
          </i>
          <i
            className={
              card.value === "skip"
                ? skip
                : card.value === "reverse"
                ? reverse
                : drawTwo
            }
          >
            {card.value === "drawTwo" && "2"}
          </i>
          <i
            className={
              card.value === "skip"
                ? skip
                : card.value === "reverse"
                ? reverse
                : drawTwo
            }
          >
            {card.value === "drawTwo" && "2"}
          </i>
        </div>
      ) : (
        <div
          className="card"
          style={{ background: card.color, zIndex: index }}
          key={index}
          onClick={() => dropCard(card)}
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
