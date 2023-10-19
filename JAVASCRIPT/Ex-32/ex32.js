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
//Constant declaration
let [minute, second] = [10, 0];
//Main functions
(function getInput() { setTimeout(() => { modal.classList.add('popUpModal') }, 500) })()//popup
function getUserName() {//get user name and validations
    let userName = getUser.value;
    user = userName.replaceAll(' ', '')
    !user || !(user.length >= 3) || user.length >= 16 ? helper() : (playerName.textContent = userName.toUpperCase(), startgame());
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
    (second <= 0) ? (second = 59, minute--) : null;
    setTime.textContent = `${minute < 10 ? '0' + minute : minute} : ${second < 10 ? '0' + second : second}`
}
//restrict numbers and symbols
function onlyAlphabets(e) {
    let char = e.charCode
    return ((char >= 33 && char <= 64) ||
        (char >= 91 && char <= 96) ||
        (char >= 123 && char <= 126)) ? false : true
}