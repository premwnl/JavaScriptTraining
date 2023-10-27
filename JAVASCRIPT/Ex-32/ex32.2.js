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
let playerTurn = cpuTurn = clicked = saidUNO = false;
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
deckCards.addEventListener('click', () => playerTurn && !checkmatch(playerCards) ? drawDeckCard(playerCards, 1) : null)
const distributeCards = () => {//distribute cards
    for (let index = 0; index < 14; index++)
        index % 2 == 0 ? playerCards.push(deck.pop()) : cpuCards.push(deck.pop());//7 cards each
    distributeCard(playerCards, 1)
    distributeCard(cpuCards, 0)
}
const drawFirstCard = () => {//setting open card
    let card = deck.pop()
    openCardElement.style.opacity = '100';
    (card.color !== 'wild' && card.value !== 'skip' && card.value !== 'drawTwo' && card.value !== 'reverse') ? (openCards.unshift(card), openCardElement.style.backgroundColor = card.color, cardCreation(openCardElement, card), setColor(card)) : (deck.unshift(card), drawFirstCard());
}
const cardCreation = (element, card) => {//card creation
    if (card.color == 'wild') {
        (card.value == 'wild') ? element.classList.add('wild') : element.classList.add('wildDrawFour');
    } else if (card.value == 'skip' || card.value == 'reverse' || card.value == 'drawTwo') {
        element.innerHTML = card.value == 'skip' ? skipIcon : (card.value == 'reverse' ? reverseIcon : drawTwoIcon);
    } else {
        for (let index = 0; index < 3; index++) {
            const item = document.createElement('div')
            item.textContent = card.value
            index == 1 ? item.style.color = card.color : null;
            element.append(item)
        }
    }
    element.addEventListener('click', () => { dropCard(card); })

}
const updateCards = (array, player, play) => {//distribute cards seperate with timeout
    // let item = openCards[0];
    player ? playerCardElement.innerHTML = '' : cpuCardElement.innerHTML = '';
    console.log(...cpuCards, 'cpu');
    console.log(...playerCards, 'player');
    for (let index = 0; index < array.length; index++) { createAndUpdate(array[index], player); }
    nextPlayer(array, player, play);
}
const createAndUpdate = (card, player) => {//common function for handling cards
    if (player) {
        const container = document.createElement('div')
        container.classList.add('card')
        container.style.zIndex = playerCards.indexOf(card)
        if (card.color == 'wild') cardCreation(container, card)
        else {
            container.style.backgroundColor = card.color
            cardCreation(container, card)
        }
        playerCardElement.append(container)
    } else {
        const item = document.createElement('div')
        item.classList.add('card_bg')
        cpuCardElement.append(item)
    }
}
const nextPlayer = (array, player, play) => {//switching turns
    let item = openCards[0];
    if (saidUNO && playerCards.length <= 0) { playerTurn = false; cpuTurn = true; showResult('player'); }
    else if (cpuCards.length <= 0) { playerTurn = false; cpuTurn = true; showResult('cpu'); }

    ((!play.took == play.drop) || cpuTurn) && playerCards.length > 0 ? (playerTurn = !playerTurn, cpuTurn = !cpuTurn) : null;//swapping turn

    item.color == 'wild' ? getColor.style.opacity = 100 : getColor.style.opacity = 0;//show color while open card is wild

    play.drop && !player && item.color == 'wild' ? (getColor.style.background = `${colors[Math.floor(Math.random() * 4)]}`) : null;//setting random color on wils cards 
    play.drop && (item.value == 'reverse' || item.value == 'skip' || item.value == 'wildDrawFour' || item.value == 'drawTwo') ?
        ((player ? (cpuTurn = false, playerTurn = true) :
            (!player ? (cpuTurn = true, playerTurn = false, checkTurn()) : null))) : null;//waiting for power card turns

    play.took && player && !checkmatch(array) ? (playerTurn = false, cpuTurn = true) :
        (play.took && player && array == playerCards && checkmatch(array) ? (pause.style.opacity = 100,
            playerTurn = true, cpuTurn = false,
            pause.addEventListener('click', () => {//showing skip button on play chances
                playerTurn = false; cpuTurn = true;
                checkTurn(); computerPlay(); pause.style.opacity = 0;
            })) : null);
    const unoButton = () => {
        let item = openCards[0];
        playerCards.length > 0 ? (clicked = true, saidUNO = true) : (clicked = false, saidUNO = false);
        (item.value == 'reverse' || item.value == 'skip' || item.value == 'wildDrawFour' || item.value == 'drawTwo') ?
            (playerTurn = true, cpuTurn = false, checkTurn()) : (playerTurn = false, cpuTurn = true, computerPlay())
        unoIconPlayer.style.opacity = 0;
        if (play.drop && playerCards.length <= 1 && item.color == 'wild') {
            colorModal.classList.add('showColor');
            cpuTurn = false; playerTurn = false;
        }
        unoIconPlayer.removeEventListener('click', unoButton);
    }
    if (play.drop && array.length == 1) {//uno button
        if (player) {
            unoIconPlayer.style.opacity = 100;
            playerTurn = false;
            cpuTurn = false;
            setTimeout(() => {
                !clicked ? (saidUNO = false, addCardsOnSet(0, 2, 1), unoIconPlayer.style.opacity = 0) :
                    (checkTurn(), clicked = false);
            }, 4000);
            unoIconPlayer.addEventListener('click', unoButton);
        } else { unoIconCpu.style.opacity = 100; }
    } else { !player ? unoIconCpu.style.opacity = 0 : saidUNO = false; }

    if (play.drop && player && item.color == 'wild' && playerCards.length > 1) {// show choose color
        colorModal.classList.add('showColor');
        cpuTurn = false; playerTurn = false;
    }
    play.took || play.drop || playerTurn ? checkTurn() : null;//turn checking css
    (play.took || play.drop) && cpuTurn ? computerPlay() : null;//computer play if its turn testing


}
const setOpenCard = (item, player) => {//setting open card and possible draw card
    openCardElement.innerHTML = '';//emptying the open deck card and setting 
    openCardElement.classList.remove('wild', 'wildDrawFour')
    openCards.unshift(item);
    pause.style.opacity = 0;
    if (item.color == 'wild') cardCreation(openCardElement, item)
    else {
        openCardElement.style.backgroundColor = item.color
        cardCreation(openCardElement, item)
    }
    player ? chooseColors.forEach((val) => val.addEventListener('click', (e) => {
        getColor.style.background = (e.target.style.backgroundColor);
        colorModal.classList.remove('showColor');
        item.value == 'wild' ? (cpuTurn = true, playerTurn = false, checkTurn(), computerPlay()) :
            (item.value == 'wildDrawFour' ? (playerTurn = true, cpuTurn = false, checkTurn()) : null)
    })) : null;
    item.value == 'drawTwo' ? addCardsOnSet(player, 2) : (item.value == 'wildDrawFour' ? addCardsOnSet(player, 4) : null);
    setColor(item);
}
const checkmatch = (array) => {//check whether he has card
    let item = openCards[0]
    if (deck.length) for (const index of array) if (getColor.style.background == index.color || index.color == item?.color || index.value == item?.value || index.color == 'wild') return true;
    return false;
}
const dropCard = (card) => {//drop card to deck
    if (cpuCards.length <= 0) { return }
    let item = openCards[0];
    if (playerTurn) {
        if (getColor.style.background == card.color || card.color == item.color || card.value == item.value || card.color == 'wild') {
            let item = playerCards.splice(playerCards.indexOf(card), 1)
            pause.style.opacity = 0;
            setOpenCard(item[0], 1)
            updateCards(playerCards, 1, { took: false, drop: true })
        }
    }
}
const drawDeckCard = (array, player) => {//draw card from deck-----
    if (cpuCards.length <= 0) { return }
    if (deck.length <= 1) {
        for (let index = 1; index < openCards.length; index++) deck.push(openCards.pop())
    }
    pause.style.opacity = 0;
    if (playerTurn && player) {
        deck.length ? array.push(deck.pop()) : null;
        updateCards(array, 1, { took: true, drop: false })
    } else if (cpuTurn || !player) {
        array.push(deck.pop())
        updateCards(array, 0, { took: true, drop: false })
        if (checkmatch(array)) {
            let item = array.pop()
            cpuTurn = true
            playerTurn = false
            if (item.value == 'wildDrawFour' || item.value == 'wild' || item.value == 'reverse' || item.value == 'skip' || item.value == 'drawTwo') {
                setOpenCard(item, 0)
                updateCards(array, 0, { took: false, drop: true });
            }
            else {
                setOpenCard(item, 0)
                updateCards(array, 0, { took: false, drop: false });
            }
        }
    }

}
const computerPlay = () => {// computer play
    if (playerCards.length <= 0) { return }
    checkTurn();
    pause.style.opacity = 0;
    setTimeout(() => {
        let drop = false
        let card = openCards[0];
        for (const index in cpuCards) {
            if (card.color == 'wild') {
                if (getColor.style.background == cpuCards[index].color || cpuCards[index].color == 'wild') {
                    computerChoice(cpuCards[index])
                    drop = true
                    break
                }
            } else {
                if (cpuCards[index].color == card.color && (cpuCards[index].value == 'skip' || cpuCards[index].value == 'reverse' || cpuCards[index].value == 'drawTwo')) {
                    computerChoice(cpuCards[index])
                    drop = true
                    break
                } else if (cpuCards[index].color == card.color) {
                    computerChoice(cpuCards[index])
                    drop = true
                    break
                } else if (cpuCards[index].value == card.value) {
                    computerChoice(cpuCards[index])
                    drop = true
                    break
                } else if (cpuCards[index].color == 'wild') {
                    computerChoice(cpuCards[index])
                    drop = true
                    break
                }
            }
            if (index == cpuCards.length - 1) !drop ? drawDeckCard(cpuCards, 0) : null;
            drop = false
        }
    }, 2000)
}
const computerChoice = (card) => {//updating the computer array
    let item = cpuCards.splice(cpuCards.indexOf(card), 1)
    if (item[0].value == 'wildDrawFour' || item[0].value == 'reverse' || item[0].value == 'skip' || item[0].value == 'drawTwo' || item[0].value == 'wild') {
        setOpenCard(item[0], 0)
        updateCards(cpuCards, 0, { took: false, drop: true });
    }
    else {
        setOpenCard(item[0], 0)
        updateCards(cpuCards, 0, { took: false, drop: false });
    }
}
const addCardsOnSet = (player, repeat, penalty) => {
    for (let index = 0; index < repeat; index++) {
        player ? cpuCards.push(deck.pop()) : playerCards.push(deck.pop());
    }
    updateCards(player ? cpuCards : playerCards, player ? 0 : 1, { took: false, drop: false });
    penalty ? (cpuTurn = true, playerTurn = false, checkTurn(), computerPlay()) : null;
}




const distributeCard = (array, player) => {//distribute cards seperate with timeout
    for (let index = 0; index < array.length; index++)
        setTimeout(() => { createAndUpdate(array[index], player) }, `${index == 0 ? 0 + player : (index * 2) - player}00`);
}
const setColor = (item) => getColor.style.background = item.color ? item.color : 'white'//setting color for play
const checkTurn = () => {//changing turn indicator
    playerName.style.opacity = playerTurn ? '100% ' : '40%';
    playerName.style.textDecoration = playerTurn ? `underline` : 'none';
    cpuName.style.opacity = cpuTurn ? '100%' : '40%';
    cpuName.style.textDecoration = cpuTurn ? `underline` : 'none';
}
