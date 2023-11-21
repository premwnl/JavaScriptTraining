import React from "react";
import UnoButton from "./UnoButton";
import DeckCards from "./DeckCards";
import Timer from "./Timer";
import ExitGame from "./ExitGame";
import ChooseColor from "./ChooseColor";
const GameContent = ({
  card,
  color,
  setTurn,
  checkmatch,
  playerCards,
  playerTurn,
  drawDeckCard,
  skip,
  setSkip,
  chooseColor,
  exitGame,
  decideColor,
}) => {
  const skipIcon = "fa-solid fa-ban";
  const reverseIcon = "fa-solid fa-rotate";
  const drawTwoIcon = "fa-solid fa-plus";
  const openCardSet = () => {
    return card[0]?.color === "wild" ? (
      <div className={card[0]?.value}></div>
    ) : card[0]?.value === "skip" ||
      card[0]?.value === "reverse" ||
      card[0]?.value === "drawTwo" ? (
      <div className="card" style={{ background: card[0]?.color }}>
        <i
          className={
            card[0]?.value === "skip"
              ? skipIcon
              : card[0]?.value === "reverse"
              ? reverseIcon
              : drawTwoIcon
          }
        >
          {card[0]?.value === "drawTwo" && "2"}
        </i>
        <i
          className={
            card[0]?.value === "skip"
              ? skipIcon
              : card[0]?.value === "reverse"
              ? reverseIcon
              : drawTwoIcon
          }
        >
          {card[0]?.value === "drawTwo" && "2"}
        </i>
        <i
          className={
            card[0]?.value === "skip"
              ? skipIcon
              : card[0]?.value === "reverse"
              ? reverseIcon
              : drawTwoIcon
          }
        >
          {card[0]?.value === "drawTwo" && "2"}
        </i>
      </div>
    ) : (
      <div className="card" style={{ background: card[0]?.color }}>
        <div>{card[0]?.value}</div>
        <div>{card[0]?.value}</div>
        <div>{card[0]?.value}</div>
      </div>
    );
  };
  return (
    <>
      <div
        className="width_full padding_ten d_flex justifyContent_center alignItems_center"
        style={{ height: "30%" }}
        id="allCards"
      >
        <ExitGame exitGame={exitGame} />
        <Timer />
        <div className="d_flex flex_col justifyContent_center alignItems_center">
          <UnoButton />
          <div id="color" style={{ background: color }} />
          {chooseColor && <ChooseColor decideColor={decideColor} />}
          <UnoButton />
        </div>
        <DeckCards />
        <div
          id="deck"
          className="card_deck decks"
          onClick={() =>
            playerTurn &&
            !checkmatch(playerCards) &&
            drawDeckCard(playerCards, "player")
          }
        ></div>
        <div style={{ marginLeft: 80, background: card[0]?.color }}>
          {card && openCardSet()}
        </div>
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
      </div>
    </>
  );
};

export default GameContent;
