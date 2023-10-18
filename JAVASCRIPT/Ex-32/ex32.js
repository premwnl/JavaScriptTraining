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
const innerContainer = document.getElementById('innerContainer');

//Constant declaration

//Error declaration

//Main functions
//popup
(function getInput() {
    setTimeout(() => { modal.classList.add('popUpModal') }, 500)
})()
//get user name and validations
function getUserName() {
    let userName = getUser.value;
    user = userName.replaceAll(' ', '')
    !user || !(user.length >= 3) || user.length >= 16 ? helper() : (playerName.textContent = userName.toUpperCase(), startgame());
}
//start game
function startgame() {
    modal.classList.remove('popUpModal');
    cpuName.textContent = 'COMPUTER';
    setTimeout(() => {
        innerContainer.classList.remove('opacity')
    }, 1000)
    setTimeout(() => {
        distributeCards()
    }, 2000)
    setTimeout(() => {
        drawFirstCard();
        playerTurn = !playerTurn
        checkTurn()
    }, 3600)
}

//set helper
function helper() {
    setHelper.style.opacity = 100;
    setTimeout(() => {
        setHelper.style.opacity = 0
    }, 3000)
}
//restrict numbers and symbols
function onlyAlphabets(e) {
    let char = e.charCode
    return ((char >= 33 && char <= 64) ||
        (char >= 91 && char <= 96) ||
        (char >= 123 && char <= 126)) ? false : true
}