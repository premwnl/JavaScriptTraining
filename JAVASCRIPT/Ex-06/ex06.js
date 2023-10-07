/*            *
                                            Name of the challenge      : Date Functions                        *
                                            Challenge No               : 6                                                         *
                                            Developed for              : VHITECH Training Program         *
                                                Maintenance History                                                    *
                                            Developer                  : Premkumar T                                                      *
                                            Creation date              :26/9/2023     Ticket No:               *
**/

//Screen Declaration
setInterval(() => {
    document.getElementById('currentDate').innerText = new Date().toLocaleDateString()
    document.getElementById('currentTime').innerText = new Date().toLocaleTimeString('en-in')
}, 1000)

//DOM declaration
let getFirst = document.getElementById('firstDate')
let getSecond = document.getElementById('secondDate')
let setMinute = document.getElementById('minutes')
let setHours = document.getElementById('hours')
let setDates = document.getElementById('dates')
let setYears = document.getElementById('years')
const RESET_INPUT = document.querySelectorAll("input")

//Constant declaration
const MIN_YEAR = 1900
const MAX_YEAR = 2500
const MILLI_SECONDS = 1000
const SECONDS = 60
const MINUTE = 60
const HOURS = 24
const YEAR = 365

//Error declaration
const ERROR_MESSAGE = 'Please Enter all date Values'
const RANGE_ERROR = 'First Date should be lesser than Second'
const MINMAX_ERROR = 'Please Enter Dates from 1900 - 2500'
const SAME_DATE_ERROR = "Dates should not be same"

//Main functions
const calculate = () => {

    const startDate = new Date(getFirst.value);
    const endDate = new Date(getSecond.value);
    const startDateYear = startDate.getFullYear();
    const endDateYear = endDate.getFullYear();

    if ((startDate == 'Invalid Date') || (endDate == 'Invalid Date')) alert(ERROR_MESSAGE)
    else if (startDateYear < MIN_YEAR || endDateYear < MIN_YEAR || startDateYear > MAX_YEAR || endDateYear > MAX_YEAR) {
        alert(MINMAX_ERROR)
        if (startDateYear < MIN_YEAR || startDateYear > MAX_YEAR) {
            getFirst.value = ''
        } if (endDateYear < MIN_YEAR || endDateYear > MAX_YEAR) {
            getSecond.value = ''
        }
    } else if (startDate > endDate) {
        alert(RANGE_ERROR)
        getFirst.value = getSecond.value = ''
    } else if ((endDate - startDate) == 0) {
        alert(SAME_DATE_ERROR)
        getFirst.value = getSecond.value = ''
    } else {
        let difference = endDate - startDate
        setMinute.value = difference / (MILLI_SECONDS * SECONDS)
        setHours.value = difference / (MILLI_SECONDS * SECONDS * MINUTE)
        setDates.value = difference / (MILLI_SECONDS * SECONDS * MINUTE * HOURS)
        setYears.value = Math.round((difference / (MILLI_SECONDS * SECONDS * MINUTE * HOURS)) / YEAR)
    }
}
//reset
const reset = () => {
    RESET_INPUT.forEach(input => input.value = '')
}
