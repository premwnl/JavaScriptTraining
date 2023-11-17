import React, { useEffect, useState } from "react";
import "../Styles/game.css";
import PlayerName from "./GameComponents/PlayerName";
import CardsSet from "./GameComponents/CardsSet";
import GameContent from "./GameComponents/GameContent";
import { cards, colors, wildCards } from "../Constants/gameConstants";
/* {data.name || "PLAYER"}{data.time || 10} */
const Game = ({ data }) => {
  let copyDeck = [];
  let playerSet = [];
  let cpuSet = [];
  let openSet = [];
  const [playerCards, setPlayerCards] = useState([]);
  const [cpuCards, setCpuCards] = useState([]);
  const [deck, setDeck] = useState([]);
  const [openCards, setOpenCards] = useState([]);
  const [color, setColor] = useState("white");
  const [playerTurn, setPlayerTurn] = useState(true);
  const [cpuTurn, setCpuTurn] = useState(false);
  const [saidUno, setSaidUno] = useState(false);
  const [clicked, setClicked] = useState(false);

  //create and shuffle 108 cards
  const startingGame = () => {
    const allCards = [];
    //creating number cards
    for (const value of cards) {
      for (const color of colors) {
        allCards.push({ color, value });
        if (value != 0) allCards.push({ color, value });
      }
    }
    //creating wild cards
    for (const wildCard of wildCards) {
      for (let index = 0; index < 4; index++)
        allCards.push({ color: "wild", value: wildCard });
    }
    //shuffling mainDeck
    for (let index = 0; index < allCards.length; index++) {
      let loop = Math.floor(Math.random() * allCards.length);
      if (loop)
        [allCards[index], allCards[loop]] = [allCards[loop], allCards[index]];
    }
    setDeck([...allCards]);
  };
  //distribute cards
  const distributeCards = () => {
    copyDeck = [...deck];
    for (let index = 0; index < 14; index++)
      index % 2 == 0
        ? playerSet.push(copyDeck.pop())
        : cpuSet.push(copyDeck.pop()); //7 cards each
    distributeCard(playerSet, 1);
    distributeCard(cpuSet, 0);
  };
  //distribute cards seperate with timeout
  const distributeCard = (array, player) => {
    for (let index = 0; index < array.length; index++) {
      player ? setPlayerCards([...array]) : setCpuCards([...array]);
    }
    player && drawFirstCard();
  };
  //setting first open card
  const drawFirstCard = () => {
    let newCard = copyDeck.pop();
    if (
      newCard.color == "wild" ||
      newCard.value == "skip" ||
      newCard.value == "drawTwo" ||
      newCard.value == "reverse"
    ) {
      copyDeck.unshift(newCard);
      drawFirstCard();
    } else {
      openSet.unshift(newCard);
      setOpenCards(openSet); // setColor(card)
    }
  };

  //check whether he has card
  const checkmatch = (array) => {
    let item = openCards[0];
    console.log(array, playerTurn);
    // if (deck.length)
    //   for (const index of array)
    //     if (
    //       // getColor.style.background == index.color ||
    //       index.color == item?.color ||
    //       index.value == item?.value ||
    //       index.color == "wild"
    //     )
    //       return true;
    // return false;
  };
  //draw card from deck-----
  const drawDeckCard = (array, player) => {
    if (cpuCards.length <= 0) {
      return;
    }
    if (deck.length <= 1) {
      let deckCards = [...openCards];
      let turnDeck = [];
      for (let index = 1; index < deckCards.length; index++) {
        turnDeck.push(deckCards.pop());
      }
      setDeck([...turnDeck]);
    }
    // if (playerTurn && player) {
    //   deck.length ? array.push(deck.pop()) : null;
    //   updateCards(array, 1, { took: true, drop: false });
    // } else if (cpuTurn || !player) {
    //   array.push(deck.pop());
    //   updateCards(array, 0, { took: true, drop: false });
    //   if (checkmatch(array)) {
    //     let item = array.pop();
    //     cpuTurn = true;
    //     playerTurn = false;
    //     setOpenCard(item, 0, { took: false, drop: true });
    //     updateCards(cpuCards, 0, { took: false, drop: true });
    //   }
    // }
  };
  useEffect(() => {
    !deck.length && startingGame();
    deck.length && distributeCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deck]);

  return (
    <>
      <div className="container height_vh">
        <div className="d_flex flex_col justifyContent_spaceBetween alignItems_center innerContainer padding_ten">
          <CardsSet cards={playerCards} player={0} />
          <PlayerName name={"COMPUTER"} />
          <GameContent
            card={openCards}
            checkmatch={checkmatch}
            playerset={playerSet}
            playerTurn={playerTurn}
            drawDeckCard={drawDeckCard}
          />
          <PlayerName name={data.name || "PLAYER"} />
          <CardsSet cards={cpuCards} player={1} />
        </div>
      </div>
    </>
  );
};

export default Game;
