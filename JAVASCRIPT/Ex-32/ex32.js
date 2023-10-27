/*            *
                                            Name of the challenge      : UNO                        *
                                            Challenge No               : 32                                                          *
                                            Developed for              : VHITECH Training Program         *
                                                Maintenance History                                                    *
                                            Developer                  : Premkumar T                                                      *
                                            Creation date              : 14/10/2023     Ticket No:               *
**/
//DOM declaration
const getUser = document.getElementById('username');
const setHelper = document.getElementById('helper');
const modal = document.getElementById('modal');
const playerName = document.getElementById('playerName');
const cpuName = document.getElementById('cpuName');
const innerContainer = document.getElementById('innerContainer')
const setTime = document.getElementById('time');
const resultModal = document.getElementById('resultModal');
const winner = document.getElementById('winner');
const points = document.getElementById('points');
//Constant declaration
let [minute, second] = [9, 60];
//Main functions
(function getInput() { setTimeout(() => { modal.classList.add('popUpModal') }, 500) })()//getting user name
function getUserName() {//get user name and validations
    let userName = getUser.value;
    user = userName.replaceAll(' ', '')
    !user || !(user.length >= 3) || user.length >= 24 ? helper() : (playerName.textContent = userName.toUpperCase(), startgame());
}
function startgame() {//start game
    modal.classList.remove('popUpModal');
    cpuName.textContent = 'COMPUTER';
    setTimeout(() => { innerContainer.classList.remove('opacity') }, 1000)
    setTimeout(() => { distributeCards() }, 2000)
    setTimeout(() => {
        drawFirstCard();
        playerTurn = !playerTurn
        checkTurn()
        setInterval(start, 1000)
    }, 3600)
}
function helper() {//set helper
    setHelper.style.opacity = 100;
    setTimeout(() => { setHelper.style.opacity = 0 }, 3000)
}
function start() {
    second--
    if (minute == 0 && second == 0) (
        showResult('time')
    );
    (second <= 0) ? (second = 59, minute--) : null;
    setTime.textContent = `${minute < 10 ? '0' + minute : minute} : ${second < 10 ? '0' + second : second}`
}
function onlyAlphabets(e) {//restrict numbers and symbols
    let char = e.charCode
    return ((char >= 33 && char <= 64) || (char >= 91 && char <= 96) || (char >= 123 && char <= 126)) ? false : true
}
const showResult = (player) => {
    let userName = getUser.value;
    if (player == 'player') {
        winner.textContent = userName.toUpperCase()
        points.textContent = calculatePoints(cpuCards)
    } else if (player == 'cpu') {
        winner.textContent = 'COMPUTER'
        points.textContent = calculatePoints(playerCards)
    } else if (player == 'time') {
        winner.textContent = 'BOTH'
        points.textContent = 0
        resultModal.classList.add('showResult')
    }
}
const calculatePoints = (array) => {
    let sum = 0;
    for (const index of array) {
        index.color == 'wild' ? sum += 50 : (index.value == 'skip' || index.value == 'reverse' || index.value == 'drawTwo' ? sum += 20 : sum += parseInt(index.value))
    }
    // resultModal.classList.add('showResult')
    setTimeout(() => { resultModal.classList.add('showResult') }, 1000);
    return sum;
}