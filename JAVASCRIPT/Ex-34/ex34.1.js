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
const result = document.getElementById('result')
//Constant declaration
const x = '<i class="fa-solid fa-xmark fa-9x"></i>'
const o = '<i class="fa-solid fa-o fa-7x"></i>'
let youTurn = true
let cpuTurn = false
let game = [0, 0, 0, 0, 0, 0, 0, 0, 0]
//Main functions
boxes.forEach((box) => { box.addEventListener('click', () => { playerMove(box.id) }) })
const playerMove = (id) => {
    let index = id.split('_')[1]
    game[index] = '1'
    document.getElementById(id).innerHTML = x;
    document.getElementById(id).style.pointerEvents = 'none'
    swapTurn()
}
const cpuMove = () => {
    if (game.includes(0)) {
        let index = getRandomNumber();
        if (index >= 0) {
            game[index] = '2'
            document.getElementById(`box_${index}`).innerHTML = o;
            document.getElementById(`box_${index}`).style.pointerEvents = 'none'
            swapTurn()
        } else cpuMove()
    } else {
        result.textContent = 'GAME DRAW'
        setTimeout(() => { reset() }, 1000)
    }
}
const getRandomNumber = () => {
    let index = Math.floor(Math.random() * 9)
    if (game[index]) getRandomNumber()
    else return index
}
const swapTurn = () => {
    if (isNOWinner()) {
        youTurn = !youTurn;
        cpuTurn = !cpuTurn;
        cpuTurn ? (container.style.pointerEvents = 'none', setTimeout(() => cpuMove(), 500)) : container.style.pointerEvents = 'all';
    } else {
        container.style.pointerEvents = 'none';
        result.textContent = youTurn ? 'YOU WIN' : 'CPU WIN'
        reset();
    }
}
const isNOWinner = () => {
    if ((game[0] == 2 && game[1] == 2 && game[2] == 2) || (game[0] == 1 && game[1] == 1 && game[2] == 1)) { return false }
    if ((game[3] == 2 && game[4] == 2 && game[5] == 2) || (game[3] == 1 && game[4] == 1 && game[5] == 1)) { return false }
    if ((game[6] == 2 && game[7] == 2 && game[8] == 2) || (game[6] == 1 && game[7] == 1 && game[8] == 1)) { return false }
    if ((game[0] == 2 && game[3] == 2 && game[6] == 2) || (game[0] == 1 && game[3] == 1 && game[6] == 1)) { return false }
    if ((game[1] == 2 && game[4] == 2 && game[7] == 2) || (game[1] == 1 && game[4] == 1 && game[7] == 1)) { return false }
    if ((game[2] == 2 && game[5] == 2 && game[8] == 2) || (game[2] == 1 && game[5] == 1 && game[8] == 1)) { return false }
    if ((game[0] == 2 && game[4] == 2 && game[8] == 2) || (game[0] == 1 && game[4] == 1 && game[8] == 1)) { return false }
    if ((game[2] == 2 && game[4] == 2 && game[6] == 2) || (game[2] == 1 && game[4] == 1 && game[6] == 1)) { return false }
    return true
}
const reset = () => { setTimeout(() => { window.location.reload() }, 1000) }