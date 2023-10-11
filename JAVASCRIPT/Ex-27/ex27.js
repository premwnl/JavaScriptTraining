/*            *
                                            Name of the challenge      : Stone Paper Scissor                     *
                                            Challenge No               : 27                                                          *
                                            Developed for              : VHITECH Training Program         *
                                                Maintenance History                                                    *
                                            Developer                  : Premkumar T                                                      *
                                            Creation date              : 10/10/2023     Ticket No:               *
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
const allOptions = document.querySelectorAll('.icon')
const setResult = document.getElementById('result')
let setYourModal = document.getElementById('modalYour')
let setCpuModal = document.getElementById('modalCpu')
let setModalResult = document.getElementById('modalResult')


//Constant declaration
const gameArray = ['rock', 'paper', 'scissor']
//Error declaration

//Main functions
allOptions.forEach((value) => {
    value.addEventListener('click', () => {
        checkWinner(value.id)
    })
})
let moves = 10
let yourScore = 0
let cpuScore = 0

function checkWinner(choice) {
    const userChoice = choice
    const cpuChoice = gameArray[Math.floor(Math.random() * 3)]
    setResult.textContent = ''
    setResult.style.opacity = 100;
    setTimeout(() => {
        setResult.style.opacity = 0
        removeClass()
    }, 3000);

    //addding icons in output
    if (userChoice == 'rock') {
        user.classList.add('fa-hand-back-fist')
        setTimeout(() => {
            user.classList.add('moveRight')
        }, 1000)
    } else if (userChoice == 'paper') {
        user.classList.add('fa-hand')
        setTimeout(() => {
            user.classList.add('moveRight')
        }, 1000)
    } else {
        user.classList.add('fa-hand-scissors')
        setTimeout(() => {
            user.classList.add('moveRight')
        }, 1000)
    }
    if (cpuChoice == 'rock') {
        cpu.classList.add('fa-hand-back-fist')
        setTimeout(() => {
            cpu.classList.add('moveLeft')
        }, 1000)
    } else if (cpuChoice == 'paper') {
        cpu.classList.add('fa-hand')
        setTimeout(() => {
            cpu.classList.add('moveLeft')
        }, 1000)
    } else {
        cpu.classList.add('fa-hand-scissors')
        setTimeout(() => {
            cpu.classList.add('moveLeft')
        }, 1000)
    }

    //checking winner
    if (userChoice == 'rock') {
        if (cpuChoice == 'paper') {
            setTimeout(() => {
                cpu.classList.add('colorGreen')
                user.classList.add('colorRed')
                setResult.textContent = `🙁 You Lose 🙁`
                user.classList.add('drop')
            }, 1200)
            cpuScore++
        } else if (cpuChoice == 'scissor') {
            setTimeout(() => {
                user.classList.add('colorGreen')
                cpu.classList.add('colorRed')
                setResult.textContent = `🥳 You Win 🥳`
                cpu.classList.add('drop')
            }, 1200)
            yourScore++
        } else {
            setTimeout(() => {
                cpu.classList.add('colorOrange')
                user.classList.add('colorOrange')
                setResult.textContent = `🤯 Its a Tie 🤯`
            }, 1200)
        }
    } else if (userChoice == 'paper') {
        if (cpuChoice == 'paper') {
            setTimeout(() => {
                cpu.classList.add('colorOrange')
                user.classList.add('colorOrange')
                setResult.textContent = `🤯 Its a Tie 🤯`
            }, 1200)
        } else if (cpuChoice == 'scissor') {
            setTimeout(() => {
                cpu.classList.add('colorGreen')
                user.classList.add('colorRed')
                setResult.textContent = `🙁 You Lose 🙁`
                user.classList.add('drop')
            }, 1200)
            cpuScore++
        } else {
            setTimeout(() => {
                setResult.textContent = `🥳 You Win 🥳`;
                user.classList.add('colorGreen')
                cpu.classList.add('colorRed')
                cpu.classList.add('drop')
            }, 1200)
            yourScore++
        }
    } else {
        if (cpuChoice == 'paper') {
            setTimeout(() => {
                setResult.textContent = `🥳 You Win 🥳`
                user.classList.add('colorGreen')
                cpu.classList.add('colorRed')
                cpu.classList.add('drop')
            }, 1200)
            yourScore++
        } else if (cpuChoice == 'scissor') {
            setTimeout(() => {
                cpu.classList.add('colorOrange')
                user.classList.add('colorOrange')
                setResult.textContent = `🤯 Its a Tie 🤯`
            }, 1200)
        } else {
            setTimeout(() => {
                cpu.classList.add('colorGreen')
                user.classList.add('colorRed')
                setResult.textContent = `🙁 You Lose 🙁`
                user.classList.add('drop')
            }, 1200)
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

        }, 3000)
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
    removeUserClass()
    removeCpuClass()
    user.classList.remove('moveRight')
    cpu.classList.remove('moveLeft')
}
function removeUserClass() {
    user.classList.remove('fa-hand-back-fist')
    user.classList.remove('fa-hand')
    user.classList.remove('fa-hand-scissors')
    removeAnimate()
}
function removeCpuClass() {
    cpu.classList.remove('fa-hand-back-fist')
    cpu.classList.remove('fa-hand')
    cpu.classList.remove('fa-hand-scissors')
    removeAnimate()
}
function removeAnimate() {
    cpu.classList.remove('colorGreen')
    user.classList.remove('colorGreen')
    cpu.classList.remove('drop')
    user.classList.remove('drop')
    cpu.classList.remove('colorRed')
    user.classList.remove('colorRed')
    cpu.classList.remove('colorOrange')
    user.classList.remove('colorOrange')
} 