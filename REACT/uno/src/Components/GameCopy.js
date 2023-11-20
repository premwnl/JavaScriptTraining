import React, { useEffect, useState } from "react";
import "../Styles/game.css";
import PlayerName from "./GameComponents/PlayerName";
import CardsSet from "./GameComponents/CardsSet";
import GameContent from "./GameComponents/GameContent";
import {
  cards,
  colors,
  wildCards,
  playerSet,
  cpuSet,
  copyDeck,
  openSet,
} from "../Constants/gameConstants";
/* {data.name || "PLAYER"}{data.time || 10} */
const GameCopy = ({ data }) => {
  const [deck, setDeck] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [cpuCards, setCpuCards] = useState([]);
  const [openCards, setOpenCards] = useState([]);
  const [color, setColor] = useState("white");
  const [turn, setTurn] = useState({ player: true, cpu: false });
  const [skip, setSkip] = useState(false);
  const [chooseColor, setChooseColor] = useState(false);
  const [saidUNO, setSaidUNO] = useState(false);
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
    let copy = [...deck];
    for (let index = 0; index < copy.length; index++) {
      copyDeck.push(copy[index]);
    }
    for (let index = 0; index < 14; index++) {
      index % 2 == 0
        ? playerSet.push(copyDeck.pop())
        : cpuSet.push(copyDeck.pop());
    }
    distributeCard(playerSet, "player");
    distributeCard(cpuSet, "cpu");
  };
  //distribute cards seperate with timeout
  const distributeCard = (array, player) => {
    for (let index = 0; index < array.length; index++) {
      player === "player"
        ? setPlayerCards([...array])
        : setCpuCards([...array]);
    }
    player === "player" && drawFirstCard();
  };
  //setting first open card
  const drawFirstCard = () => {
    let newCard = copyDeck.pop();
    if (
      newCard.color === "wild" ||
      newCard.value === "skip" ||
      newCard.value === "drawTwo" ||
      newCard.value === "reverse"
    ) {
      copyDeck.unshift(newCard);
      drawFirstCard();
    } else {
      dropOpenCard(newCard);
    }
  };
  //check whether he has card
  const checkmatch = (array) => {
    let item = openCards[0];
    if (deck.length)
      for (const index of array)
        if (
          color === index.color ||
          index.color === item?.color ||
          index.value === item?.value ||
          index.color === "wild"
        )
          return true;
    return false;
  };
  //draw card from deck
  const drawDeckCard = (array, player) => {
    if (cpuCards.length <= 0) {
      return;
    }
    if (copyDeck.length <= 0) {
      let copy = [];
      for (let index = 1; index < openSet.length; index++) {
        copy.push(openSet[index]);
      }
      for (let index = 0; index < copy.length; index++) {
        let loop = Math.floor(Math.random() * copy.length);
        if (loop) [copy[index], copy[loop]] = [copy[loop], copy[index]];
      }
      for (let index = 0; index < copy.length; index++) {
        copyDeck.unshift(copy[index]);
      }
    }

    let copy = copyDeck?.map((index) => index);
    let copySet = array?.map((index) => index);
    copy.length && copySet.push(copy.pop());
    copyDeck.length = 0;

    for (let index = 0; index < copy.length; index++)
      copyDeck.push(copy[index]);

    //poped card pushing in player cards set
    if (turn.player && player === "player") {
      playerSet.length = 0;
      for (let index = 0; index < copySet.length; index++)
        playerSet.push(copySet[index]);

      setPlayerCards([...playerSet]);
      checkmatch(playerSet)
        ? setSkip(true)
        : setTurn({ player: false, cpu: true });
      //poped card pushing in cpu cards set
    } else if (turn.cpu || player === "cpu") {
      cpuSet.length = 0;
      for (let index = 0; index < copySet.length; index++)
        cpuSet.push(copySet[index]);
      setCpuCards([...cpuSet]);
      //check possible drop card in pushed card
      if (checkmatch(array)) {
        let copyArray = [...array];
        let item = copyArray.pop();
        cpuSet.length = 0;
        for (let index = 0; index < copyArray.length; index++)
          cpuSet.push(copyArray[index]);
        setTimeout(() => {
          setCpuCards([...copyArray]);
          dropOpenCard(item);
          if (item?.value === "wild" || item?.value === "wildDrawFour") {
            setColor(colors[Math.floor(Math.random() * 4)]);
          }
          if (item?.value === "drawTwo" || item?.value === "wildDrawFour") {
            item?.value === "drawTwo" && addCardsOnSet(2, "cpu");
            item?.value === "wildDrawFour" && addCardsOnSet(4, "cpu");
          } else if (item.value === "skip" || item.value === "reverse") {
            setTurn({ player: false, cpu: true });
          } else setTurn({ player: true, cpu: false });
        }, 1000);
      } else setTurn({ player: true, cpu: false });
    }
  };
  // set open card in UI
  const dropOpenCard = (card) => {
    card.color !== "wild" && setColor(card.color);
    openSet.unshift(card);
    setOpenCards([...openSet.map((index) => index)]);
  };
  //drop card to deck
  const dropCard = (card) => {
    let item = openCards[0];
    if (cpuCards.length <= 0) {
      return;
    }
    if (turn.player) {
      if (
        color === card.color ||
        card.color === item.color ||
        card.value === item.value ||
        card.color === "wild"
      ) {
        let copyPlayerSet = playerSet.map((index) => index);
        let drop = copyPlayerSet.splice(copyPlayerSet.indexOf(card), 1);
        let item = drop[0];
        playerSet.length = 0;
        for (let index = 0; index < copyPlayerSet.length; index++)
          playerSet.push(copyPlayerSet[index]);
        setPlayerCards([...copyPlayerSet]);
        setSkip(false);
        dropOpenCard(item);
        if (item?.value === "wild" || item?.value === "wildDrawFour") {
          setTurn({ player: false, cpu: false });
          setChooseColor(true);
          item?.value === "wildDrawFour" && addCardsOnSet(4, "player");
        } else if (
          item?.value === "drawTwo" ||
          item?.value === "skip" ||
          item?.value === "reverse"
        ) {
          item?.value === "drawTwo" && addCardsOnSet(2, "player");
          setTurn({ player: true, cpu: false });
        } else setTurn({ player: false, cpu: true });
      }
    }
  };
  // computer play
  const computerPlay = () => {
    if (playerCards.length <= 0) {
      return;
    }
    let drop = false;
    let card = openSet[0];
    for (const index in cpuSet) {
      if (card.color === "wild") {
        if (color === cpuSet[index].color || cpuSet[index].color === "wild") {
          computerChoice(cpuSet[index]);
          drop = true;
          break;
        }
      } else {
        if (cpuSet[index].color === "wild") {
          computerChoice(cpuSet[index]);
          drop = true;
          break;
        } else if (
          cpuSet[index].color === card.color &&
          (cpuSet[index].value === "skip" ||
            cpuSet[index].value === "reverse" ||
            cpuSet[index].value === "drawTwo")
        ) {
          computerChoice(cpuSet[index]);
          drop = true;
          break;
        } else if (cpuSet[index].color === card.color) {
          computerChoice(cpuSet[index]);
          drop = true;
          break;
        } else if (cpuSet[index].value === card.value) {
          computerChoice(cpuSet[index]);
          drop = true;
          break;
        }
      }
      if (index == cpuSet.length - 1) {
        !drop && drawDeckCard(cpuSet, "cpu");
      }
      drop = false;
    }
  };
  //updating the computer array
  const computerChoice = (card) => {
    let drop = cpuSet.splice(cpuSet.indexOf(card), 1);
    setCpuCards([...cpuSet.map((index) => index)]);
    let item = drop[0];
    dropOpenCard(item);
    if (item?.value === "wild" || item?.value === "wildDrawFour") {
      setColor(colors[Math.floor(Math.random() * 4)]);
    }
    if (item?.value === "drawTwo" || item?.value === "wildDrawFour") {
      item?.value === "drawTwo" && addCardsOnSet(2, "cpu");
      item?.value === "wildDrawFour" && addCardsOnSet(4, "cpu");
    } else if (item.value === "skip" || item.value === "reverse") {
      setTurn({ player: false, cpu: true });
    } else setTurn({ player: true, cpu: false });
  };

  //add cards +2 +4 and penalty
  const addCardsOnSet = (repeat, player) => {
    //repeat indicates how many cards to be added
    let copy = copyDeck?.map((index) => index);
    for (let index = 0; index < repeat; index++) {
      if (player === "player") {
        cpuSet.push(copy.pop());
      } else if (player === "cpu") {
        playerSet.push(copy.pop());
      }
    }
    copyDeck.length = 0;
    for (let index = 0; index < copy.length; index++)
      copyDeck.push(copy[index]);

    if (player === "player") {
      setCpuCards([...cpuSet.map((index) => index)]);
    } else if (player === "cpu") {
      setPlayerCards([...playerSet.map((index) => index)]);
      setTurn({ player: false, cpu: true });
    }
  };
  useEffect(() => {
    !deck.length && startingGame();
    deck.length === 108 && distributeCards();
  }, [deck]);
  useEffect(() => {
    turn.cpu &&
      setTimeout(() => {
        computerPlay();
      }, 1000);
  }, [turn]);
  return (
    <>
      <div className="container height_vh">
        <div className="d_flex flex_col justifyContent_spaceBetween alignItems_center innerContainer padding_ten">
          <CardsSet cards={cpuCards} player={"cpu"} />
          <PlayerName name={"COMPUTER"} turn={turn.cpu} />
          <GameContent
            card={openCards}
            playerCards={playerCards}
            playerTurn={turn.player}
            playerSet={playerSet}
            cpuSet={cpuSet}
            copyDeck={copyDeck}
            openSet={openSet}
            color={color}
            skip={skip}
            chooseColor={chooseColor}
            checkmatch={checkmatch}
            drawDeckCard={drawDeckCard}
            setCpuCards={setCpuCards}
            setPlayerCards={setPlayerCards}
            setOpenCards={setOpenCards}
            setTurn={setTurn}
            setSkip={setSkip}
            setColor={setColor}
            setChooseColor={setChooseColor}
          />
          <PlayerName name={data.name || "PLAYER"} turn={turn.player} />
          <CardsSet cards={playerCards} player={"player"} dropCard={dropCard} />
        </div>
      </div>
    </>
  );
};

export default GameCopy;
