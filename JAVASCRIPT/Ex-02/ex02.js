/*            *
                                            Name of the challenge      : String Reverse(Arrry)                        *
                                            Challenge No               : 19                                                          *
                                            Developed for              : VHITECH Training Program         *
                                                Maintenance History                                                    *
                                            Developer                  : Premkumar T                                                      *
                                            Creation date              :03/10/2023     Ticket No:               *
**/

//Screen Declaration
setInterval(() => {
    document.getElementById('currentDate').innerText = new Date().toLocaleDateString()
    document.getElementById('currentTime').innerText = new Date().toLocaleTimeString('en-in')
}, 1000)

//DOM declaration
let getHours = document.getElementById('getHours')
let getMinutes = document.getElementById('getMinutes')
let getSeconds = document.getElementById('getSeconds')
let hoursMinutes = document.getElementById('hoursMinutes')
let seconds = document.getElementById('seconds')
let reset = document.getElementById('reset')

//Constant declaration
const RESET_ALL = document.querySelectorAll('input')
const SECONDS_PER_HOUR = 3600
const SECONDS_PER_MINUTE = 60

//Error declaration
const ERROR_MESSAGE = 'Please Enter all Values'
const MAXIMUM_VALUE = 'Enter Values Only in 2 Digits '
const MAXIMUM_SECONDS_VALUE = 'Enter Values Only in 6 Digits '

//Main functions
//convertToSeconds
const convertToSeconds = (e) => {
    e.preventDefault()
    let input_Hours = getHours.value;
    let input_Minutes = getMinutes.value;

    (input_Hours.length == 0 || input_Minutes.length == 0) ?
        alert(ERROR_MESSAGE) : (input_Hours.length > 2 && input_Minutes.length > 2) ? (alert(MAXIMUM_VALUE),
            getHours.value = '', getMinutes.value = '') : (input_Hours.length > 2) ? (alert(MAXIMUM_VALUE), getHours.value = '') : (input_Minutes.length > 2) ? (alert(MAXIMUM_VALUE), getMinutes.value = '') : (seconds.value = `${input_Hours * SECONDS_PER_HOUR + input_Minutes * SECONDS_PER_MINUTE} seconds`)
}
//convertToHoursMinutes
const convertToHoursMinutes = (e) => {
    e.preventDefault()
    let input_Seconds = getSeconds.value

    if (input_Seconds.length == 0) alert(ERROR_MESSAGE)
    else if (input_Seconds.length > 6) {
        alert(MAXIMUM_SECONDS_VALUE);
        getSeconds.value = '';
    }
    else hoursMinutes.value = `${Math.floor(input_Seconds / SECONDS_PER_HOUR)} Hrs ${Math.floor((input_Seconds % SECONDS_PER_HOUR) / SECONDS_PER_MINUTE)} Min ${Math.floor((input_Seconds % SECONDS_PER_HOUR) % SECONDS_PER_MINUTE)} Sec`
}
//only digits
function onlyDigits(e) {
    char = e.charCode
    return (char == 43 || char == 45 || char == 69 || char == 101) ? false : true
}
//reset
reset.addEventListener('click', () => {
    RESET_ALL.forEach(input => input.value = '')
})