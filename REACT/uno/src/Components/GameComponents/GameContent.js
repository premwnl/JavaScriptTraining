import React from "react";
import UnoButton from "./UnoButton";
import DeckCards from "./DeckCards";
import Timer from "./Timer";
import ExitGame from "./ExitGame";
const GameContent = ({
  card,
  checkmatch,
  playerCards,
  playerTurn,
  drawDeckCard,
}) => {
  return (
    <>
      <div
        className="width_full padding_ten d_flex justifyContent_center alignItems_center"
        style={{ height: "30%" }}
        id="allCards"
      >
        <ExitGame />
        <Timer />
        <div className="d_flex flex_col justifyContent_center alignItems_center">
          <UnoButton />
          <div id="color" />
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
        <div
          id="openCard"
          className="card"
          style={{ marginLeft: 20, background: card[0]?.color }}
        >
          <div>{card[0]?.value}</div>
          <div>{card[0]?.value}</div>
          <div>{card[0]?.value}</div>
        </div>
        <div
          id="playButton"
          className="d_flex justifyContent_center alignItems_center"
          style={{ marginRight: 300 }}
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
