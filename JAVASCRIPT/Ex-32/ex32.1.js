//DOM declaration
const openCardElement = document.getElementById('openCard');
const cpuCardElement = document.getElementById('cpuCards');
const playerCardElement = document.getElementById('playerCards');
const getColor = document.getElementById('color');
const deckCards = document.getElementById('deck');
const pause = document.getElementById('playButton');
const unoIconCpu = document.getElementById('unoCpu');
const unoIconPlayer = document.getElementById('unoPlayer');
const chooseColors = document.querySelectorAll('.wildColors');
const colorModal = document.getElementById('chooseColor');
//Constant declaration
const skipIcon = '<i class="fa-solid fa-ban"></i><i class="fa-solid fa-ban"></i><i class="fa-solid fa-ban"></i>'
const reverseIcon = '<i class="fa-solid fa-rotate"></i><i class="fa-solid fa-rotate"></i><i class="fa-solid fa-rotate"></i>'
const drawTwoIcon = '<i class="fa-solid fa-plus">2</i><i class="fa-solid fa-plus">2</i><i class="fa-solid fa-plus">2</i>';
const [cards, colors, wildCards] = [['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'drawTwo', 'skip', 'reverse'], ['red', 'green', 'blue', 'yellow'], ['wild', 'wildDrawFour']]
let [mainDeck, playerCards, cpuCards, openCards] = [[], [], [], []]
let playerTurn = cpuTurn = false;
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
deckCards.addEventListener('click', () => playerTurn && !checkmatch(playerCards) ? drawDeckCard(playerCards, playerCardElement, 1) : null)
const distributeCards = () => {//distribute cards
    for (let index = 0; index < 14; index++)index % 2 == 0 ? playerCards.push(deck.pop()) : cpuCards.push(deck.pop());//7 cards each
    distributeCard(playerCards, playerCardElement, 1)
    distributeCard(cpuCards, cpuCardElement, 0)
}
const drawFirstCard = () => {//setting open card
    let card = deck.pop()
    openCardElement.style.opacity = '100'
    openCards.unshift(card);
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
const updateCards = (array, element, player, took, drop) => {//distribute cards seperate with timeout
    let item = openCards[0];
    element.innerHTML = ''
    for (let index = 0; index < array.length; index++) { createAndUpdate(array, element, index, player); }
    let clicked = false;
    if (array.length == 1) {
        if (player) {
            unoIconPlayer.style.opacity = 100;
            setTimeout(() => { !clicked ? (addCardsOnSet(0, 2), !(item.value == 'reverse' || item.value == 'skip' || item.value == 'wildDrawFour' || item.value == 'drawTwo') ? (cpuTurn = true, playerTurn = false, checkTurn(), computerPlay()) : null, unoIconPlayer.style.opacity = 0) : null }, 5000);
            unoIconPlayer.addEventListener('click', () => {
                clicked = true
                unoIconPlayer.style.opacity = 0;
                nextPlayer(array, player, took, drop)
            })
        } else {
            unoIconCpu.style.opacity = 100;
            nextPlayer(array, player, took, drop);
        }
    } else {
        nextPlayer(array, player, took, drop);
        !player ? unoIconCpu.style.opacity = 0 : null;
    }
}
const createAndUpdate = (array, element, index, player) => {//common function for handling cards
    let card = array[index]
    if (player) {
        const container = document.createElement('div')
        container.classList.add('card')
        container.style.zIndex = index
        if (card.color == 'wild') (card.value == 'wild') ? container.classList.add('wild') : container.classList.add('wildDrawFour');
        else if (card.value == 'skip' || card.value == 'reverse' || card.value == 'drawTwo') {
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
const nextPlayer = (array, player, took, drop) => {//switching turns
    let item = openCards[0];
    !took ? (playerTurn = !playerTurn, cpuTurn = !cpuTurn) : null;//swapping turn

    drop && !player && item.color == 'wild' ? (getColor.style.background = `${colors[Math.floor(Math.random() * 4)]}`) : null;//setting random color on wils cards 
    drop && item.color == 'wild' ? getColor.style.opacity = 100 : getColor.style.opacity = 0;//show color while open card is wild
    drop && (item.value == 'reverse' || item.value == 'skip' || item.value == 'wildDrawFour' || item.value == 'drawTwo') ?
        ((player ? (cpuTurn = false, playerTurn = true) :
            (!player ? (cpuTurn = true, playerTurn = false, (!took && !drop) && cpuTurn ? (checkTurn() /*computerPlay()*/) : null) : null))) : null;//waiting for power card turns

    took && player && !checkmatch(array) ? (playerTurn = false, cpuTurn = true) :
        (took && player && array == playerCards && checkmatch(array) ? (pause.style.opacity = 100,
            playerTurn = true, cpuTurn = false,
            pause.addEventListener('click', () => {//showing skip button on play chances
                playerTurn = false; cpuTurn = true;
                checkTurn(); computerPlay(), pause.style.opacity = 0
            })) : null);

    if (drop && player && item.color == 'wild') {// show choose color
        colorModal.classList.add('showColor');
        cpuTurn = false; playerTurn = false;
    }
    took || drop || playerTurn ? checkTurn() : null;//turn checking css
    (took || drop) && cpuTurn ? computerPlay() : null;//computer play if its turn
}
const setOpenCard = (item, player, drop) => {//setting open card and possible draw card
    openCardElement.innerHTML = '';//emptying the open deck card and setting 
    openCardElement.classList.remove('wild', 'wildDrawFour')
    openCards.unshift(item);
    pause.style.opacity = 0;
    if (item.color == 'wild') (item.value == 'wild') ? openCardElement.classList.add('wild') : openCardElement.classList.add('wildDrawFour');
    else if (item.value == 'skip' || item.value == 'reverse' || item.value == 'drawTwo') {
        openCardElement.style.backgroundColor = item.color
        powerCardCreation(openCardElement, item)
    } else {
        openCardElement.style.backgroundColor = item.color
        cardCreation(openCardElement, item)
    }
    player ? chooseColors.forEach((val) => val.addEventListener('click', (e) => {
        getColor.style.background = (e.target.style.backgroundColor);
        colorModal.classList.remove('showColor');
        item.value == 'wild' ? (cpuTurn = true, playerTurn = false, checkTurn(), computerPlay()) :
            (item.value == 'wildDrawFour' ? (playerTurn = true, cpuTurn = false, checkTurn()) : null)
    })) : null;
    drop && (item.value == 'drawTwo' ? addCardsOnSet(player, 2) : (item.value == 'wildDrawFour' ? addCardsOnSet(player, 4) : null));
    setColor(item);
}
const checkmatch = (array) => {//check whether he has card
    let item = openCards[0]
    if (deck.length) for (const index of array) if (getColor.style.background == index.color || index.color == item?.color || index.value == item?.value || index.color == 'wild') return true;
    return false;
}
const dropCard = (array, index, element, player) => {//drop card to deck
    let item = openCards[0];
    pause.style.opacity = 0;
    if (getColor.style.background == array[index].color || array[index].color == item.color || array[index].value == item.value || array[index].color == 'wild') {
        let card = array.splice(index, 1)
        setOpenCard(card[0], player, true)
        updateCards(array, element, 1, false, true)
    }
}
const drawDeckCard = (array, element, player) => {//draw card from deck-----
    pause.style.opacity = 0;
    if (playerTurn) {
        deck.length ? array.push(deck.pop()) : null;
        updateCards(array, element, 1, true)
    } else if (cpuTurn) {
        array.push(deck.pop())
        updateCards(array, element, 0)
        if (checkmatch(array)) {
            let item = array.pop()
            cpuTurn = true
            playerTurn = false
            if (item.value == 'wildDrawFour' || item.value == 'reverse' || item.value == 'skip' || item.value == 'drawTwo') {
                setOpenCard(item, player, true)
                updateCards(array, element, 0, false, true);
            }
            else {
                setOpenCard(item, player)
                updateCards(array, element, 0);
            }
        }
    }
    if (deck.length == 0) { for (let index = 0; index < openCards.length; index++) index !== 0 ? deck.push(openCards.pop()) : null }
}
const computerPlay = () => {// computer play
    if (playerCards.length <= 0) { return }
    pause.style.opacity = 0;
    setTimeout(() => {
        let drop = false
        let card = openCards[0];
        for (const index in cpuCards) {
            if (card.color == 'wild') {
                if (getColor.style.background == cpuCards[index].color || cpuCards[index].color == 'wild') {
                    computerChoice(cpuCards, index)
                    drop = true
                    break
                }
            } else {
                if (cpuCards[index].color == card.color && (cpuCards[index].value == 'skip' || cpuCards[index].value == 'reverse' || cpuCards[index].value == 'drawTwo')) {
                    computerChoice(cpuCards, index)
                    drop = true
                    break
                } else if (cpuCards[index].color == card.color) {
                    computerChoice(cpuCards, index)
                    drop = true
                    break
                } else if (cpuCards[index].value == card.value) {
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
    if (item[0].value == 'wildDrawFour' || item[0].value == 'reverse' || item[0].value == 'skip' || item[0].value == 'drawTwo' || item[0].value == 'wild') {
        setOpenCard(item[0], 0, true)
        updateCards(array, cpuCardElement, 0, false, true);
    }
    else {
        updateCards(array, cpuCardElement, 0);
        setOpenCard(item[0], 0)
    }
}
const addCardsOnSet = (player, repeat) => {
    for (let index = 0; index < repeat; index++) {
        player ? cpuCards.push(deck.pop()) : playerCards.push(deck.pop());
    }
    updateCards(player ? cpuCards : playerCards, player ? cpuCardElement : playerCardElement, player ? 0 : 1);
}





// const colorChange = () => {
//     let color = getColor.style.backgroundColor;
//     let newColor = colors[Math.floor(Math.random() * colors.length)];
//     if (color == newColor) { colorChange() }
//     else {
//         console.log(newColor);
//         return newColor
//     }
// }
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
