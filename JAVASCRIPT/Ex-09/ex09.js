/*            *
                                            Name of the challenge      : Palindrome Numbers                        *
                                            Challenge No               : 9                                                         *
                                            Developed for              : VHITECH Training Program         *
                                                Maintenance History                                                    *
                                            Developer                  : Premkumar T                                                      *
                                            Creation date              :28/9/2023     Ticket No:               *
**/

//Screen Declaration
setInterval(() => {
    document.getElementById('currentDate').innerText = new Date().toLocaleDateString()
    document.getElementById('currentTime').innerText = new Date().toLocaleTimeString('en-in')
}, 1000)
//DOM declaration
let firstNumber = document.getElementById('firstNumber')
let secondNumber = document.getElementById('secondNumber')

let setFor = document.getElementById('for')
let setWhile = document.getElementById('while')
let setDoWhile = document.getElementById('doWhile')
let selected = document.getElementById('select')
let ALL_OUPUT = document.querySelectorAll('.output')
const RESET_INPUT = document.querySelectorAll("input")
const RESET_SELECT = document.querySelectorAll("#select")

//Constant declaration
const MIN_RANGE = 0
const MAX_RANGE = 1000

//Error declaration
const ERROR_MESSAGE = 'Please Enter all Values'
const RANGE_ERROR = 'First Value should be lesser than Second'
const MINMAX_ERROR = 'Please Enter Values Between 0 - 1000'
const SAME_DATE_ERROR = "Values should not be same"

//Main functions
const calculate = () => {
    const numOne = firstNumber.value;
    const numTwo = secondNumber.value;

    if (!numOne || !numTwo) {
        alert(ERROR_MESSAGE)
        resetSelect()
        resetOutputs()
    } else if (numOne < MIN_RANGE || numTwo < MIN_RANGE || numOne > MAX_RANGE || numTwo > MAX_RANGE) {
        alert(MINMAX_ERROR)
        if (numOne < MIN_RANGE || numOne > MAX_RANGE) {
            firstNumber.value = ''
        } if (numTwo < MIN_RANGE || numTwo > MAX_RANGE) {
            secondNumber.value = ''
        }
        resetSelect()
        resetOutputs()
    } else if ((numTwo - numOne) < 0) {
        alert(RANGE_ERROR)
        reset()
    } else if ((numOne - numTwo) == 0) {
        alert(SAME_DATE_ERROR)
        reset()
    } else {
        let index = numOne

        const isPalindrome = (num) => {
            const number = num.toString();
            const reversed = number.split('').reverse().join('');
            return number === reversed;
        }
        const forLoop = () => {
            resetOutputs()

            for (let index = numOne; index <= numTwo; index++) {
                isPalindrome(index) ? setFor.value += `${index}\n` : null
            }
        }
        const whileLoop = () => {
            resetOutputs()
            while (index <= numTwo) {
                isPalindrome(index) ? setWhile.value += `${index}\n` : null
                index++
            }
            index = ''

        }
        const doWhileLoop = () => {
            resetOutputs()
            do {
                isPalindrome(index) ? setDoWhile.value += `${index}\n` : null
                index++
            } while (index <= numTwo)
            index = ''

        }

        if (selected.value == 'for') forLoop()
        else if (selected.value == 'while') whileLoop()
        else if (selected.value == 'dowhile') doWhileLoop()
        else resetOutputs()
    }
}
//only digits
function onlyDigits(e) {
    char = e.charCode
    return (char == 43 || char == 45 || char == 46 || char == 69 || char == 101) ? false : true
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