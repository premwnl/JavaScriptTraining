/*            *
                                            Name of the challenge      : Flames                    *
                                            Challenge No               : 24                                                         *
                                            Developed for              : VHITECH Training Program         *
                                                Maintenance History                                                    *
                                            Developer                  : Premkumar T                                                      *
                                            Creation date              : 05/10/2023     Ticket No:               *
**/

//Screen Declaration
setInterval(() => {
    document.getElementById('currentDate').innerText = new Date().toLocaleDateString()
    document.getElementById('currentTime').innerText = new Date().toLocaleTimeString('en-in')
}, 1000)

//DOM declaration
let setTimer = document.getElementById('timer')
let setSecond = document.getElementById('seconds')
let setIcon = document.getElementById('icon')


//Constant declaration

//Error declaration

//Main functions
let [hour, minute, second, millisecond] = [0, 0, 0, 0]
let secondValue = 0
let running = null

const startWatch = () => {

    if (running) {
        clearInterval(running)
        running = null
        setIcon.classList.remove('fa-pause')
        setIcon.classList.add('fa-play')
    } else {
        running = setInterval(start, 10);
        setIcon.classList.remove('fa-play')
        setIcon.classList.add('fa-pause')
    }
}
function start() {


    millisecond = millisecond += 1
    if (millisecond >= 100) {
        millisecond = 0
        second++
        secondValue++
    }
    if (second >= 60) {
        second = 0
        minute++
    }
    if (minute >= 60) {
        minute = 0
        hour++
    }

    let hours = hour < 10 ? '0' + hour : hour
    let minutes = minute < 10 ? '0' + minute : minute
    let seconds = second < 10 ? '0' + second : second
    let milliseconds = millisecond < 10 ? '0' + millisecond : millisecond

    setTimer.textContent = `${hours} :${minutes} :${seconds} :${milliseconds}`
    setSecond.textContent = secondValue
}

//reset
const reset = () => {
    clearInterval(running)
    running = null
    hour = minute = second = millisecond = secondValue = 0
    setTimer.textContent = '00 :00 :00 :00'
    setSecond.textContent = '0'
    setIcon.classList.remove('fa-pause')
    setIcon.classList.add('fa-play')
}