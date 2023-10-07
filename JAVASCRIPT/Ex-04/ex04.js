/*            *
                                            Name of the challenge      : Age Comparison                        *
                                            Challenge No               : 4                                                         *
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
let getFirst = document.getElementById('firstAge')
let getSecond = document.getElementById('secondAge')
let getThird = document.getElementById('thirdAge')
let elderOutput = document.getElementById('elder')
let ageOrderOutput = document.getElementById('ageOrder')
const RESET_INPUT = document.querySelectorAll("input")
const RESET_TEXTAREA = document.querySelectorAll('textarea')

//Constant declaration
const MIN_AGE = 1
const MAX_AGE = 110

//Error declaration
const ERROR_MESSAGE = 'Please Enter all Values'
const AGE_ERROR = 'Enter age range between 1 - 110 '

//Main functions
const submit = () => {
    let first = parseInt(getFirst.value);
    let second = parseInt(getSecond.value);
    let third = parseInt(getThird.value);

    //check empty values
    if (!first || !second || !third) alert(ERROR_MESSAGE)

    //check min /max age
    else if (first < MIN_AGE || first > MAX_AGE || second < MIN_AGE || second > MAX_AGE || third < MIN_AGE || third > MAX_AGE) {
        alert(AGE_ERROR)
        if ((first < MIN_AGE || first > MAX_AGE)) getFirst.value = ''
        if ((second < MIN_AGE || second > MAX_AGE)) getSecond.value = ''
        if ((third < MIN_AGE || third > MAX_AGE)) getThird.value = ''

    } else {
        if (first == second && first == third) {
            elderOutput.value = `All Persons`
        } else if ((first == second) && (second > third)) {
            elderOutput.value = `First & Second Person`
        } else if ((first == third) && (first > second)) {
            elderOutput.value = `First & Third Person`
        } else if ((second == third) && (third > first)) {
            elderOutput.value = `Second & Third Person`
        } else if ((first > second) && (first > third)) {
            elderOutput.value = `First Person`
        } else if (second > third) {
            elderOutput.value = `Second Person`
        } else {
            elderOutput.value = `Third Person`
        }

        let order = [first, second, third]
        //ordering 
        for (let outer = 0; outer < order.length; outer++) {
            for (let inner = outer; inner < order.length; inner++) {
                if (order[outer] < order[inner]) {
                    [order[outer], order[inner]] = [order[inner], order[outer]]
                }
            }
        }
        ageOrderOutput.value = order.join('\n')
    }
}
//only digits
function onlyDigits(e) {
    char = e.charCode
    return (char == 43 || char == 45 || char == 69 || char == 101) ? false : true
}
//reset
const reset = () => {
    RESET_INPUT.forEach(input => input.value = '')
    RESET_TEXTAREA.forEach(input => input.value = '')
}
