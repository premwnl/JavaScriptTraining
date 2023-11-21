import React from "react";
import DeckCards from "./DeckCards";
import Timer from "./Timer";
import ExitGame from "./ExitGame";
import ChooseColor from "./ChooseColor";
import lastCard from "../../Images/lastCard.png";

const GameContent = ({
  card,
  color,
  data,
  setTurn,
  checkmatch,
  playerCards,
  cpuCards,
  playerTurn,
  drawDeckCard,
  skip,
  setSkip,
  chooseColor,
  exitGame,
  decideColor,
  checkResult,
  saidUNO,
  setSaidUNO,
}) => {
  const skipIcon = "fa-solid fa-ban";
  const reverseIcon = "fa-solid fa-rotate";
  const drawTwoIcon = "fa-solid fa-plus";
  const openCardSet = () => {
    if (card[0]?.color === "wild") {
      return <div className={card[0]?.value}></div>;
    } else if (
      card[0]?.value === "skip" ||
      card[0]?.value === "reverse" ||
      card[0]?.value === "drawTwo"
    ) {
      return (
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
      );
    } else {
      return (
        <div className="card" style={{ background: card[0]?.color }}>
          <div>{card[0]?.value}</div>
          <div>{card[0]?.value}</div>
          <div>{card[0]?.value}</div>
        </div>
      );
    }
  };
  return (
    <>
      <div
        className="width_full padding_ten d_flex justifyContent_center alignItems_center"
        style={{ height: "30%" }}
        id="allCards"
      >
        <ExitGame exitGame={exitGame} />
        <Timer data={data} checkResult={checkResult} />
        <div className="d_flex flex_col justifyContent_center alignItems_center">
          <div>
            <img
              src={lastCard}
              alt="last-card"
              id="unoPlayer"
              style={{ opacity: cpuCards.length === 1 ? 100 : 0 }}
            />
          </div>
          <div id="color" style={{ background: color }} />
          {chooseColor && <ChooseColor decideColor={decideColor} />}
          <div>
            <img
              src={lastCard}
              alt="last-card"
              id="unoPlayer"
              style={{ opacity: saidUNO ? 100 : 0 }}
              onClick={() => setSaidUNO(false)}
            />
          </div>
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
