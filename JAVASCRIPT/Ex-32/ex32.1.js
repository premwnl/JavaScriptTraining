//DOM declaration
const openCardElement = document.getElementById('openCard');
const cpuCardElement = document.getElementById('cpuCards');
const playerCardElement = document.getElementById('playerCards');
const getColor = document.getElementById('color');
const deckCards = document.getElementById('deck');
const pause = document.getElementById('playButton');
//Constant declaration
const skipIcon = '<i class="fa-solid fa-ban"></i><i class="fa-solid fa-ban"></i><i class="fa-solid fa-ban"></i>'
const reverseIcon = '<i class="fa-solid fa-rotate"></i><i class="fa-solid fa-rotate"></i><i class="fa-solid fa-rotate"></i>'
const drawTwoIcon = '<i class="fa-solid fa-plus">2</i><i class="fa-solid fa-plus">2</i><i class="fa-solid fa-plus">2</i>';
const [cards, colors, wildCards] = [['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'drawTwo', 'skip', 'reverse'], ['red', 'green', 'blue', 'yellow'], ['wild', 'wildDrawFour']]
let [mainDeck, playerCards, cpuCards] = [[], [], []]
let playerTurn = false
let cpuTurn = false
for (const value of cards) {//creating number cards
    for (const color of colors) {
        mainDeck.push({ color, value })
        if (value != 0) mainDeck.push({ color, value })
    }
}
for (const wildCard of wildCards) {//creating wild cards
    for (let index = 0; index < 4; index++) mainDeck.push({ color: 'wild', value: wildCard })
}
for (let index = 0; index < mainDeck.length; index++) {//shuffling mainDeck
    let loop = Math.floor(Math.random() * mainDeck.length)
    if (loop) [mainDeck[index], mainDeck[loop]] = [mainDeck[loop], mainDeck[index]]
}
let deck = [...mainDeck]//copying main deck of cards
deckCards.addEventListener('click', () => !checkmatch(playerCards) ? drawDeckCard(playerCards, playerCardElement, 1) : null)
const distributeCards = () => {//distribute cards
    for (let index = 0; index < 14; index++)index % 2 == 0 ? playerCards.push(deck.pop()) : cpuCards.push(deck.pop());//7 cards each
    distributeCard(playerCards, playerCardElement, 1)
    distributeCard(cpuCards, cpuCardElement, 0)
}
const drawFirstCard = () => {//setting open card
    let card = deck.pop()
    openCardElement.style.opacity = '100'
    openCardElement.id = `${card.color}_${card.value}`;
    (card.color !== 'wild' && card.value !== 'skip' && card.value !== 'drawTwo' && card.value !== 'reverse') ? (openCardElement.style.backgroundColor = card.color, cardCreation(openCardElement, card), setColor(card)) : drawFirstCard();
}
const cardCreation = (element, card) => {//card creation
    for (let index = 0; index < 3; index++) {
        const item = document.createElement('div')
        item.textContent = card.value
        index == 1 ? item.style.color = card.color : null;
        element.append(item)
    }
}
const powerCardCreation = (element, card) => { element.innerHTML = card.value == 'skip' ? skipIcon : (card.value == 'reverse' ? reverseIcon : drawTwoIcon); }//card creation
const updateCards = (array, element, player, took) => {//distribute cards seperate with timeout
    element.innerHTML = ''
    for (let index = 0; index < array.length; index++) { createAndUpdate(array, element, index, player); }
    nextPlayer(array, player, took)
    console.log(...[...[...cpuCards]]);
}
const createAndUpdate = (array, element, index, player) => {//common function for handling cards
    let card = array[index]
    if (player) {
        const container = document.createElement('div')
        container.classList.add('card')
        container.style.zIndex = index
        container.id = `${card.color}_${card.value}`
        if (card.color == 'wild') {
            if (card.value == 'wild') container.classList.add('wild');
            else container.classList.add('wildDrawFour');
        } else if (card.value == 'skip' || card.value == 'reverse' || card.value == 'drawTwo') {
            container.style.backgroundColor = card.color
            powerCardCreation(container, card)
        } else {
            container.style.backgroundColor = card.color
            cardCreation(container, card)
        }
        container.addEventListener('click', () => {
            dropCard(array, index, element, player);
        })
        element.append(container)
    } else {
        const item = document.createElement('div')
        item.classList.add('card_bg')
        item.id = `${card.color}_${card.value}`
        element.append(item)
    }
}
const nextPlayer = (array, player, took) => {//switching turns
    !took ? (playerTurn = !playerTurn, cpuTurn = !cpuTurn) : null;
    took && player && !checkmatch(array) ? (playerTurn = false, cpuTurn = true) : (took && player && checkmatch(array) ? (pause.style.opacity = 100, pause.addEventListener('click', () => { playerTurn = false; cpuTurn = true; checkTurn(); computerPlay() })) : null);
    console.log(cpuTurn);
    checkTurn();
    cpuTurn ? computerPlay() : null;
}
const setOpenCard = (item, player) => {//setting open card and possible draw card
    let card = openCardElement.id.split('_');
    deck.unshift({ color: card[0], value: card[1] })//unsfilting the previous open card to deck itself
    openCardElement.innerHTML = '';//emptying the open deck card and setting 
    openCardElement.classList.remove('wild', 'wildDrawFour')
    openCardElement.id = `${item.color}_${item.value}`
    if (item.color == 'wild') (item.value == 'wild') ? openCardElement.classList.add('wild') : openCardElement.classList.add('wildDrawFour');
    else if (item.value == 'skip' || item.value == 'reverse' || item.value == 'drawTwo') {
        openCardElement.style.backgroundColor = item.color
        powerCardCreation(openCardElement, item)
    } else {
        openCardElement.style.backgroundColor = item.color
        cardCreation(openCardElement, item)
    }
    item.value == 'skip' || item.value == 'reverse' ? skipReverseF(player) : (item.value == 'drawTwo' ? addCardF(player) : (item.color == 'wild' ? wildCardF(player, item.value) : null))
    setColor(item)
}
const checkmatch = (array) => {//check whether he has card
    let item = openCardElement.id.split('_')
    for (const index of array) if (getColor.style.background == index.color || index.color == item[0] || index.value == item[1] || index.color == 'wild') return true;
    return false;
}
const dropCard = (array, index, element, player) => {//drop card to deck
    let item = openCardElement.id.split('_')
    if (getColor.style.background == array[index].color || array[index].color == item[0] || array[index].value == item[1] || array[index].color == 'wild') {
        let card = array.splice(index, 1)
        setOpenCard(card[0], player)
        updateCards(array, element, player)
    }
}
const drawDeckCard = (array, element, player) => {//draw card from deck-----
    if (playerTurn) {
        let card = deck.pop();
        array.push(card)
        updateCards(array, element, player, true)
    } else {
        let card = deck.pop();
        array.push(card)
        updateCards(array, element, player)
        if (checkmatch(array)) {
            setTimeout(() => {
                let item = array.pop()
                cpuTurn = true
                playerTurn = false
                updateCards(array, element, 0)
                setOpenCard(item, player)
            }, 1000);
        }
    }
}
const computerPlay = () => {// computer play
    pause.style.opacity = 0;
    setTimeout(() => {
        let drop = false
        let card = openCardElement.id.split('_');
        for (const index in cpuCards) {
            if (card[0] == 'wild') {
                if (getColor.style.background == cpuCards[index].color || cpuCards[index].color == 'wild') {
                    computerChoice(cpuCards, index)
                    drop = true
                    break
                }
            } else {
                if (cpuCards[index].color == card[0] && (cpuCards[index].value == 'skip' || cpuCards[index].value == 'reverse' || cpuCards[index].value == 'drawTwo')) {
                    computerChoice(cpuCards, index)
                    drop = true
                    break
                } else if (cpuCards[index].color == card[0]) {
                    computerChoice(cpuCards, index)
                    drop = true
                    break
                } else if (cpuCards[index].value == card[1]) {
                    computerChoice(cpuCards, index)
                    drop = true
                    break
                } else if (cpuCards[index].color == 'wild') {
                    computerChoice(cpuCards, index)
                    drop = true
                    break
                }
            }
            if (index == cpuCards.length - 1) !drop ? drawDeckCard(cpuCards, cpuCardElement, 0) : null;
            drop = false
        }
    }, 1000)
}
const computerChoice = (array, index) => {//updating the computer array
    let item = array.splice(index, 1)
    setOpenCard(item[0], 0)
    updateCards(array, cpuCardElement, 0)
}
// const skipReverseF = (turn) => turn ? (playerTurn = true, cpuTurn = false, updateCards(playerCards, playerCardElement, 1,)) : (playerTurn = false, cpuTurn = true, updateCards(cpuCards, cpuCardElement, 0))
// const addCardF = (turn) => turn ? (playerTurn = true, cpuTurn = false, addCardsOnSet(turn, 2)) : (playerTurn = false, cpuTurn = true, addCardsOnSet(turn, 2));
// const wildCardF = (turn, value) => {
//     turn ? (playerTurn = true, cpuTurn = false, updateCards(playerCards, playerCardElement, 1), value == 'wildDrawFour' ? addCardsOnSet(turn, 4) : null) : (playerTurn = false, cpuTurn = true, updateCards(cpuCards, cpuCardElement, 0), value == 'wildDrawFour' ? addCardsOnSet(turn, 4) : null);
// }
// const addCardsOnSet = (player, repeat) => {
//     for (let index = 0; index < repeat; index++) {
//         setTimeout(() => {
//             (player ? cpuCards : playerCards).push(deck.pop())
//             updateCards(player ? cpuCards : playerCards, player ? cpuCardElement : playerCardElement, player ? 0 : 1)
//         }, `${index == 0 ? 3 : (index * 4) - 1}00`)
//     }
// }



const skipReverseF = (turn) => { }
const addCardF = (turn) => { }
const wildCardF = (turn, value) => { }
const addCardsOnSet = (player, repeat) => { }







const distributeCard = (array, element, player) => {//distribute cards seperate with timeout
    for (let index = 0; index < array.length; index++)setTimeout(() => { createAndUpdate(array, element, index, player) }, `${index == 0 ? 0 + player : (index * 2) - player}00`);
}
const setColor = (item) => getColor.style.background = item.color ? item.color : 'white'//setting color for play
const checkTurn = () => {//changing turn indicator
    playerName.style.opacity = playerTurn ? '100% ' : '40%';
    playerName.style.textDecoration = playerTurn ? `underline` : 'none';
    cpuName.style.opacity = cpuTurn ? '100%' : '40%';
    cpuName.style.textDecoration = cpuTurn ? `underline` : 'none';
}
