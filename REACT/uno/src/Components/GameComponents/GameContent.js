import React from "react";
import UnoButton from "./UnoButton";
import DeckCards from "./DeckCards";
import Timer from "./Timer";
import ExitGame from "./ExitGame";
import Skip from "./Skip";
import ChooseColor from "./ChooseColor";
const GameContent = ({
  card,
  color,
  setTurn,
  checkmatch,
  playerCards,
  playerTurn,
  drawDeckCard,
  setCpuCards,
  setPlayerCards,
  setOpenCards,
  playerSet,
  cpuSet,
  copyDeck,
  openSet,
  skip,
  setSkip,
  chooseColor,
  setChooseColor,
  setColor,
}) => {
  const openCardSet = () => {
    return card[0]?.color === "wild" ? (
      <div className={card[0]?.value}></div>
    ) : card[0]?.value === "skip" ? (
      <div className="card" style={{ background: card[0]?.color }}>
        <i className="fa-solid fa-ban"></i>
        <i className="fa-solid fa-ban"></i>
        <i className="fa-solid fa-ban"></i>
      </div>
    ) : card[0]?.value === "reverse" ? (
      <div className="card" style={{ background: card[0]?.color }}>
        <i className="fa-solid fa-rotate"></i>
        <i className="fa-solid fa-rotate"></i>
        <i className="fa-solid fa-rotate"></i>
      </div>
    ) : card[0]?.value === "drawTwo" ? (
      <div className="card" style={{ background: card[0]?.color }}>
        <i className="fa-solid fa-plus">2</i>
        <i className="fa-solid fa-plus">2</i>
        <i className="fa-solid fa-plus">2</i>
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
        <ExitGame
          setCpuCards={setCpuCards}
          setPlayerCards={setPlayerCards}
          setOpenCards={setOpenCards}
          playerSet={playerSet}
          cpuSet={cpuSet}
          copyDeck={copyDeck}
          openSet={openSet}
        />
        <Timer />
        <div className="d_flex flex_col justifyContent_center alignItems_center">
          <UnoButton />
          <div id="color" style={{ background: color }} />
          {chooseColor && (
            <ChooseColor
              setChooseColor={setChooseColor}
              setColor={setColor}
              setTurn={setTurn}
              openSet={openSet}
            />
          )}
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
        <Skip setSkip={setSkip} setTurn={setTurn} skip={skip} />
      </div>
    </>
  );
};

export default GameContent;
