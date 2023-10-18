//DOM declaration
const openCardElement = document.getElementById('openCard');
const cpuCardElement = document.getElementById('cpuCards');
const playerCardElement = document.getElementById('playerCards');
const getColor = document.getElementById('color');
const deckCards = document.getElementById('deck');
const pause = document.getElementById('playButton');
//Constant declaration
const cards = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'drawTwo', 'skip', 'reverse']
const colorss = ['red', 'green', 'blue', 'yellow']
const wildCards = ['wild', 'wildDrawFour']
let mainDeck = []
let playerCards = []
let cpuCards = []
let playerTurn = false
let cpuTurn = false
for (const value of cards) {//creating number cards
    for (const color of colorss) {
        mainDeck.push({ color, value })
        if (value != 0) mainDeck.push({ color, value })
    }
}
for (const wildCard of wildCards) {//creating wild cards
    for (let index = 0; index < 4; index++) {
        mainDeck.push({ color: 'wild', value: wildCard })
    }
}
for (let index = 0; index < mainDeck.length; index++) {//shuffling mainDeck
    let loop = Math.floor(Math.random() * mainDeck.length)
    if (loop) [mainDeck[index], mainDeck[loop]] = [mainDeck[loop], mainDeck[index]]
}
let deck = [...mainDeck]//copying main deck of cards
deckCards.addEventListener('click', () => { drawDeckCard(playerCards, playerCardElement, 1) })
const distributeCards = () => {//distribute cards
    for (let index = 0; index < 14; index++) {//7 cards each
        index % 2 == 0 ? playerCards.push(deck.pop()) : cpuCards.push(deck.pop())
    }
    distributeCard(playerCards, playerCardElement, 1)
    distributeCard(cpuCards, cpuCardElement, 0)
}
const drawFirstCard = () => {//setting open card
    let card = deck.pop()
    openCardElement.style.display = 'block'
    openCardElement.id = `${card.color}_${card.value}`
    if (card.color !== 'wild' && card.value !== 'skip' && card.value !== 'drawTwo' && card.value !== 'reverse') {
        openCardElement.style.backgroundColor = card.color
        cardCreation(openCardElement, card)
        setColor(card)
    } else { drawFirstCard() }
}
const cardCreation = (element, card) => {//card creation
    for (let index = 0; index < 3; index++) {
        const item = document.createElement('div')
        item.textContent = card.value
        index == 1 ? item.style.color = card.color : null;
        element.append(item)
    }
}
const powerCardCreation = (element, card) => {//card creation
    for (let index = 0; index < 3; index++) {
        const item = document.createElement('i')
        item.classList.add('fa-solid')
        item.classList.add(card.value == 'skip' ? 'fa-ban' : (card.value == 'reverse' ? 'fa-rotate' : 'fa-plus'))
        card.value == 'drawTwo' ? item.textContent = '2' : null;
        index == 1 ? item.style.color = card.color : null;
        element.append(item)
    }
}
const distributeCard = (array, element, player) => {//distribute cards seperate with timeout
    for (let index = 0; index < array.length; index++) {
        setTimeout(() => { createAndUpdate(array, element, index, player) }, `${index == 0 ? 0 + player : (index * 2) - player}00`)
    }
}
const updateCards = (array, element, player, turns) => {//distribute cards seperate with timeout
    element.innerHTML = ''
    for (let index = 0; index < array.length; index++) {
        createAndUpdate(array, element, index, player)
    }
    if (player == 0) {
        playerTurn = !playerTurn;
        cpuTurn = !cpuTurn
        console.log('cp');
    } else {
        console.log('pl');
        !turns ? playerTurn = !playerTurn : null;
        !turns ? cpuTurn = !cpuTurn : null;
    }
    checkTurn()
    console.log(...cpuCards);
    console.log('-----');
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
const setOpenCard = (item) => {//setting open card
    let card = openCardElement.id.split('_');
    deck.unshift({ color: card[0], value: card[1] })//unsfilting the previous open card to deck itself
    openCardElement.innerHTML = '';//emptying the open deck card and setting 
    openCardElement.classList.remove('wild', 'wildDrawFour')
    openCardElement.id = `${item.color}_${item.value}`
    if (item.color == 'wild') {
        if (item.value == 'wild') openCardElement.classList.add('wild');
        else openCardElement.classList.add('wildDrawFour');
    } else if (item.value == 'skip' || item.value == 'reverse' || item.value == 'drawTwo') {
        openCardElement.style.backgroundColor = item.color
        powerCardCreation(openCardElement, item)
    }
    else {
        openCardElement.style.backgroundColor = item.color
        cardCreation(openCardElement, item)
    }
    setColor(item)
}
const dropCard = (array, index, element, player) => {//drop card to deck
    if (playerTurn || player == 0) {
        if (array[index].color == 'wild') {
            let card = array.splice(index, 1)
            setOpenCard(...card)
            updateCards(array, element, player)
        } else {
            if (checkmatch(array, index, openCardElement)) {
                let card = array.splice(index, 1)
                setOpenCard(...card)
                updateCards(array, element, player)
            }
        }
    }
}
const checkmatch = (array, position, element) => {//check whether he has card
    let item = element.id.split('_')
    for (const index in array) {
        if (item[0] == 'wild') {
            if (getColor.style.background == array[index].color) { if (index == position) { return true } }
        }
        else if ((array[index].color == item[0] && array[index].color == openCardElement.style.backgroundColor) || array[index].value == item[1]) { if (index == position) { return true } }
    }
    return false
}
const drawDeckCard = (array, element, player) => {//draw card from deck-----
    if (playerTurn || (player == 0 && cpuTurn)) {
        let card = deck.length ? deck.pop() : null
        array.push(card)
        let possibleDraw = checkPossibleDraw(card)
        updateCards(array, element, player, possibleDraw)
        setTimeout(() => {
            if (possibleDraw && !player) {
                playerTurn = !playerTurn;
                cpuTurn = !cpuTurn;
                let item = array.pop()
                setOpenCard(item)
                updateCards(array, element, 0)
            }
        }, 1000);
        (possibleDraw && player) ? (pause.style.opacity = 100, pause.addEventListener('click', () => {
            cpuTurn = true;
            playerTurn = false;
            checkTurn()
        })) : null;
    }
}
const checkPossibleDraw = (lastCard) => {//check whether he has possible draws
    let item = openCardElement.id.split('_')
    if (lastCard.color == 'wild' || (item[0] == 'wild' && getColor.style.background == lastCard.color) || lastCard.color == item[0] || lastCard.value == item[1]) return true;
    return false
}
const setColor = (item) => {//setting color for play
    getColor.style.background = item.color ? item.color : 'white'
}
const checkTurn = () => {//changing turn indicator
    playerName.style.opacity = playerTurn ? '100% ' : '40%';
    playerName.style.textDecoration = playerTurn ? `underline` : 'none';
    cpuName.style.opacity = cpuTurn ? '100%' : '40%';
    cpuName.style.textDecoration = cpuTurn ? `underline` : 'none';
    cpuTurn ? computerPlay() : null;
}
const computerPlay = () => {// computer play
    pause.style.opacity = 0
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
    setOpenCard(...item)
    updateCards(array, cpuCardElement, 0)
}

