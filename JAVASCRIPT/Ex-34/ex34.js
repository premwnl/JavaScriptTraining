/*            *
                                            Name of the challenge      : TIC TAC TOE                       *
                                            Challenge No               : 34                                                          *
                                            Developed for              : VHITECH Training Program         *
                                                Maintenance History                                                    *
                                            Developer                  : Premkumar T                                                      *
                                            Creation date              : 01/11/2023     Ticket No:               *
**/


//DOM declaration
const boxes = document.querySelectorAll('.box')
const container = document.getElementById('container')
const youScore = document.getElementById('youScore')
const cpuScore = document.getElementById('cpuScore')
//Constant declaration
const x = '<i class="fa-solid fa-xmark fa-9x"></i>'
const o = '<i class="fa-solid fa-o fa-7x"></i>'
let youTurn = true
let cpuTurn = false
let you_Score = 0
let cpu_Score = 0
let ticTacToe = [0, 0, 0, 0, 0, 0, 0, 0, 0]
//Main functions
boxes.forEach((box) => { box.addEventListener('click', () => { playerMove(box.id) }) })
const playerMove = (id) => {
    let index = id.split('_')[1]
    ticTacToe[index] = '1'
    document.getElementById(id).innerHTML = x;
    document.getElementById(id).style.pointerEvents = 'none'
    swapTurn()
}
const cpuMove = () => {
    if (ticTacToe.includes(0)) {
        let index = (ticTacToe.includes(0)) ? getRandomNumber() : null;
        if (index >= 0) {
            ticTacToe[index] = '2'
            document.getElementById(`box_${index}`).innerHTML = o;
            document.getElementById(`box_${index}`).style.pointerEvents = 'none'
            swapTurn()
        } else cpuMove()
    } else setTimeout(() => { reset() }, 1000)
}
const getRandomNumber = () => {
    let index = Math.floor(Math.random() * 9)
    if (ticTacToe[index]) getRandomNumber()
    else return index
}
const swapTurn = () => {
    if (noPossibleWin()) {
        youTurn = !youTurn;
        cpuTurn = !cpuTurn;
        cpuTurn ? (container.style.pointerEvents = 'none', setTimeout(() => cpuMove(), 500)) : container.style.pointerEvents = 'all';
    } else {
        container.style.pointerEvents = 'none'
    }
}
const noPossibleWin = () => {
    if ((ticTacToe[0] == ticTacToe[1] == ticTacToe[2]) && ticTacToe[0] != 0 && ticTacToe[1] != 0 && ticTacToe[2] != 0) {
        showWinner(ticTacToe[1])
        return false
    } else if ((ticTacToe[3] == ticTacToe[4] == ticTacToe[5]) && ticTacToe[3] != 0 && ticTacToe[4] != 0 && ticTacToe[5] != 0) {
        showWinner(ticTacToe[4])
        return false
    } else if ((ticTacToe[6] == ticTacToe[7] == ticTacToe[8]) && ticTacToe[6] != 0 && ticTacToe[7] != 0 && ticTacToe[8] != 0) {
        showWinner(ticTacToe[7])
        return false
    } else if ((ticTacToe[0] == ticTacToe[3] == ticTacToe[6]) && ticTacToe[0] != 0 && ticTacToe[3] != 0 && ticTacToe[6] != 0) {
        showWinner(ticTacToe[3])
        return false
    } else if ((ticTacToe[1] == ticTacToe[4] == ticTacToe[7]) && ticTacToe[1] != 0 && ticTacToe[4] != 0 && ticTacToe[7] != 0) {
        showWinner(ticTacToe[4])
        return false
    } else if ((ticTacToe[2] == ticTacToe[5] == ticTacToe[8]) && ticTacToe[2] != 0 && ticTacToe[5] != 0 && ticTacToe[8] != 0) {
        showWinner(ticTacToe[5])
        return false
    } else if ((ticTacToe[0] == ticTacToe[4] == ticTacToe[8]) && ticTacToe[0] != 0 && ticTacToe[4] != 0 && ticTacToe[8] != 0) {
        showWinner(ticTacToe[4])
        return false
    } else if ((ticTacToe[2] == ticTacToe[4] == ticTacToe[6]) && ticTacToe[2] != 0 && ticTacToe[4] != 0 && ticTacToe[6] != 0) {
        showWinner(ticTacToe[4])
        return false
    }
    return true
}
const showWinner = (val) => {
    val == '1' ? you_Score++ : val == '2' ? cpu_Score++ : null;
    val == '1' || val === '2' ? (container.style.pointerEvents = 'none', setTimeout(() => {
        youScore.textContent = you_Score;
        cpuScore.textContent = cpu_Score;
        reset()
    }, 1000)) : null
}
const reset = () => {
    boxes.forEach((box) => { box.innerHTML = ''; box.style.pointerEvents = 'all' })
    ticTacToe = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    youTurn = true;
    cpuTurn = false
}
