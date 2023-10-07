/*            *
                                            Name of the challenge      : Display Years in Reverse and find Leap year                        *
                                            Challenge No               : 8                                                         *
                                            Developed for              : VHITECH Training Program         *
                                                Maintenance History                                                    *
                                            Developer                  : Premkumar T                                                      *
                                            Creation date              :27/9/2023     Ticket No:               *
**/

//Screen Declaration
setInterval(() => {
    document.getElementById('currentDate').innerText = new Date().toLocaleDateString()
    document.getElementById('currentTime').innerText = new Date().toLocaleTimeString('en-in')
}, 1000)

//DOM declaration
let firstDate = document.getElementById('firstDate')
let secondDate = document.getElementById('secondDate')
let setReverseFor = document.getElementById('reverseFor')
let setLeapYearsFor = document.getElementById('leapYearsFor')
let setLeapsFor = document.getElementById('leapYearFor')
let setReverseWhile = document.getElementById('reverseWhile')
let setLeapYearsWhile = document.getElementById('leapYearsWhile')
let setLeapsWhile = document.getElementById('leapYearWhile')
let setReverseDoWhile = document.getElementById('reverseDoWhile')
let setLeapYearsDoWhile = document.getElementById('leapYearsDoWhile')
let setLeapsDoWhile = document.getElementById('leapYearDoWhile')
let selected = document.getElementById('select')
let ALL_OUPUT = document.querySelectorAll('.output')
const RESET_INPUT = document.querySelectorAll("input")
const RESET_SELECT = document.querySelectorAll("#select")

//Constant declaration
const MIN_YEAR = 1900
const MAX_YEAR = 2500

//Error declaration
const ERROR_MESSAGE = 'Please Enter all date Values'
const RANGE_ERROR = 'First Date should be lesser than Second'
const MINMAX_ERROR = 'Please Enter Dates from 1900 - 2500'
const SAME_DATE_ERROR = "Dates should not be same"

//Main functions
const calculate = () => {
    const startDate = new Date(firstDate.value);
    const endDate = new Date(secondDate.value);
    const startDateYear = startDate.getFullYear();
    const endDateYear = endDate.getFullYear();

    if ((startDate == 'Invalid Date') || (endDate == 'Invalid Date')) {
        alert(ERROR_MESSAGE)
        resetSelect()
        resetOutputs()
    } else if (startDateYear < MIN_YEAR || endDateYear < MIN_YEAR || startDateYear > MAX_YEAR || endDateYear > MAX_YEAR) {
        alert(MINMAX_ERROR)
        if (startDateYear < MIN_YEAR || startDateYear > MAX_YEAR) {
            firstDate.value = ''
        } if (endDateYear < MIN_YEAR || endDateYear > MAX_YEAR) {
            secondDate.value = ''
        }
        resetSelect()
        resetOutputs()
    } else if (startDate > endDate) {
        alert(RANGE_ERROR)
        firstDate.value = secondDate.value = ''
        resetSelect()
        resetOutputs()
    } else if ((endDate - startDate) == 0) {
        alert(SAME_DATE_ERROR)
        firstDate.value = secondDate.value = ''
        resetSelect()
        resetOutputs()
    } else {
        let leap = 0
        let index = endDateYear

        const forLoop = () => {
            resetOutputs()
            for (let index = endDateYear; index >= startDateYear; index--) {
                setReverseFor.value += `${index}\n`;
                ((index % 4 == 0 && index % 100 !== 0) || index % 400 == 0) ? (setLeapYearsFor.value += `${index}\n`, leap++) : null
            }
            setLeapsFor.value = leap
            leap = 0
        }
        const whileLoop = () => {
            resetOutputs()
            while (index >= startDateYear) {
                setReverseWhile.value += `${index}\n`;
                ((index % 4 == 0 && index % 100 !== 0) || index % 400 == 0) ? (setLeapYearsWhile.value += `${index}\n`, leap++) : null;
                index--
            }
            setLeapsWhile.value = leap
            leap = 0
        }
        const doWhileLoop = () => {
            resetOutputs()
            do {
                setReverseDoWhile.value += `${index}\n`;
                ((index % 4 == 0 && index % 100 !== 0) || index % 400 == 0) ? (setLeapYearsDoWhile.value += `${index}\n`, leap++) : null;
                index--
            } while (index >= startDateYear)
            setLeapsDoWhile.value = leap
            leap = 0
        }

        if (selected.value == 'for') forLoop()
        else if (selected.value == 'while') whileLoop()
        else if (selected.value == 'dowhile') doWhileLoop()
        else resetOutputs()
    }
}

//reset
const resetOutputs = () => {
    ALL_OUPUT.forEach(input => input.value = '')
}
const resetSelect = () => {
    RESET_SELECT.forEach(select => select.selectedIndex = 0)
}
const reset = () => {
    RESET_INPUT.forEach(input => input.value = '')
    resetSelect()
    resetOutputs()
}
