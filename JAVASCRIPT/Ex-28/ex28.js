/*            *
                                            Name of the challenge      : Async and Await                      *
                                            Challenge No               : 28                                                          *
                                            Developed for              : VHITECH Training Program         *
                                                Maintenance History                                                    *
                                            Developer                  : Premkumar T                                                      *
                                            Creation date              : 11/10/2023     Ticket No:               *
**/



//Screen Declaration
setInterval(() => {
    document.getElementById('currentDate').innerText = new Date().toLocaleDateString()
    document.getElementById('currentTime').innerText = new Date().toLocaleTimeString('en-in')
}, 1000)

//DOM declaration
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissor = document.getElementById('scissor')
const setYourScore = document.getElementById('myScore')
const setCpuScore = document.getElementById('cpuScore')
const setMoves = document.getElementById('moves')
const user = document.getElementById('user')
const cpu = document.getElementById('cpu')
const icons = document.getElementById('allIcons')
const setResult = document.getElementById('result')
let setYourModal = document.getElementById('modalYour')
let setCpuModal = document.getElementById('modalCpu')
let setModalResult = document.getElementById('modalResult')


//Constant declaration
const gameArray = ['rock', 'paper', 'scissor']
//Error declaration

//Main functions
rock.addEventListener('click', () => {
    checkWinner('rock')
})
paper.addEventListener('click', () => {
    checkWinner('paper')
})
scissor.addEventListener('click', () => {
    checkWinner('scissor')
})
let moves = 10
let yourScore = 0
let cpuScore = 0

function checkWinner(choice) {
    const userChoice = choice
    const cpuChoice = gameArray[Math.floor(Math.random() * 3)]

    icons.style.visibility = 'hidden'
    setResult.style.visibility = 'visible';
    setTimeout(() => {
        icons.style.visibility = 'visible';
        setResult.style.visibility = 'hidden'
        removeClass()
    }, 1000);

    //addding icons in output
    if (userChoice == 'rock') {
        user.classList.add('fa-hand-back-fist')
    } else if (userChoice == 'paper') {
        user.classList.add('fa-hand')
    } else {
        user.classList.add('fa-hand-scissors')
    }
    if (cpuChoice == 'rock') {
        cpu.classList.add('fa-hand-back-fist')
    } else if (cpuChoice == 'paper') {
        cpu.classList.add('fa-hand')
    } else {
        cpu.classList.add('fa-hand-scissors')
    }

    //checking winner
    if (userChoice == 'rock') {
        if (cpuChoice == 'paper') {
            setResult.textContent = `🙁 You Lose 🙁`
            cpuScore++
        } else if (cpuChoice == 'scissor') {
            setResult.textContent = `🥳 You Win 🥳`
            yourScore++
        } else {
            setResult.textContent = `🤯 Its a Tie 🤯`
            yourScore++
            cpuScore++
        }
    } else if (userChoice == 'paper') {
        if (cpuChoice == 'paper') {
            setResult.textContent = `🤯 Its a Tie 🤯`
            yourScore++
            cpuScore++
        } else if (cpuChoice == 'scissor') {
            setResult.textContent = `🙁 You Lose 🙁`
            cpuScore++
        } else {
            setResult.textContent = `🥳 You Win 🥳`;
            yourScore++
        }
    } else {
        if (cpuChoice == 'paper') {
            setResult.textContent = `🥳 You Win 🥳`
            yourScore++
        } else if (cpuChoice == 'scissor') {
            setResult.textContent = `🤯 Its a Tie 🤯`
            yourScore++
            cpuScore++
        } else {
            setResult.textContent = `🙁 You Lose 🙁`
            cpuScore++
        }
    }
    moves--
    setMoves.textContent = moves
    setYourScore.textContent = yourScore
    setCpuScore.textContent = cpuScore

    if (moves <= 0) {//checking moves available or not
        setTimeout(() => {
            openModal(yourScore, cpuScore)

        }, 1000)
    }
}
//open modal
function openModal(user, cpu) {
    setYourModal.textContent = user
    setCpuModal.textContent = cpu
    setModalResult.textContent = user > cpu ? `🥳 YOU WIN 🥳` : user < cpu ? `🙁 YOU LOSE 🙁` : `🤯 ITS A TIE 🤯`
    modal.classList.add('popUpModal')
}
//close modal
const closeModal = () => {
    modal.classList.remove('popUpModal')
    moves = 10
    yourScore = 0
    cpuScore = 0
    setMoves.textContent = moves
    setYourScore.textContent = yourScore
    setCpuScore.textContent = cpuScore
}
//remove classes
function removeClass() {
    user.classList.remove('fa-hand-back-fist')
    user.classList.remove('fa-hand')
    user.classList.remove('fa-hand-scissors')
    cpu.classList.remove('fa-hand-back-fist')
    cpu.classList.remove('fa-hand')
    cpu.classList.remove('fa-hand-scissors')
}
