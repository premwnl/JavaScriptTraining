/*            *
                                            Name of the challenge      : Star Pattern                       *
                                            Challenge No               : 11                                                         *
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

// DOM declaration
let row = document.getElementById('row')
let character = document.getElementById('character')
let setFor = document.getElementById('for')
let setWhile = document.getElementById('while')
let setDoWhile = document.getElementById('doWhile')
let selected = document.getElementById('select')
let repeat = document.getElementById('repeat')
let ALL_OUPUT = document.querySelectorAll('.output')
const RESET_INPUT = document.querySelectorAll("input")
const RESET_SELECT = document.querySelectorAll("select")

//Constant declaration
const MIN_RANGE = 2
const MAX_RANGE = 10

//Error declaration
const ERROR_MESSAGE = 'Please Enter all Values'
const RANGE_ERROR = 'Only one character accepted'
const MINMAX_ERROR = 'Please Enter Values Between 2 - 10'
// const SAME_DATE_ERROR = "Values should not be same"

//Main functions
const calculate = () => {
    let rowNum = row.value;
    let symbol = character.value;

    if (!rowNum || !symbol) {
        alert(ERROR_MESSAGE)
        resetSelect()
        resetOutputs()
    } else if (rowNum < MIN_RANGE || rowNum > MAX_RANGE) {
        alert(MINMAX_ERROR)
        row.value = ''
        resetSelect()
        resetOutputs()

    } else if (symbol.length > 1) {
        alert(RANGE_ERROR)
        character.value = ''
        resetSelect()
        resetOutputs()
    } else {

        switch (true) {
            case selected.value == 'for':
                repeat.value == 'repeat' ? forLoopRepeat() : repeat.value == 'noRepeat' ? forLoop() : resetOutputs();
                break;
            case selected.value == 'while':
                repeat.value == 'repeat' ? whileLoopRepeat() : repeat.value == 'noRepeat' ? whileLoop() : resetOutputs();
                break;
            case selected.value == 'dowhile':
                repeat.value == 'repeat' ? doWhileLoopRepeat() : repeat.value == 'noRepeat' ? doWhileLoop() : resetOutputs();
                break;
            default:
                resetOutputs()
        }

        function forLoop() {
            resetOutputs()
            for (let index = 0; index < 2 * rowNum; index++) {
                let result = ''
                let star = index > rowNum ? 2 * rowNum - index : index
                let space = rowNum - star
                for (let j = 0; j < space; j++) {
                    result += "  "
                }
                for (let k = 0; k < star; k++) {
                    result += `${symbol}  `
                }
                result += `\n`
                setFor.value += result
            }
        }
        function whileLoop() {
            resetOutputs()
            let index = 0

            while (index < 2 * rowNum) {

                let result = ''
                let star = index > rowNum ? 2 * rowNum - index : index
                let space = rowNum - star
                for (let j = 0; j < space; j++) {
                    result += "  "
                }
                for (let k = 0; k < star; k++) {
                    result += `${symbol}  `
                }
                index++
                result += `\n`
                setWhile.value += result
            }
        }
        function doWhileLoop() {
            resetOutputs()
            let index = 0

            do {
                let result = ''
                let star = index > rowNum ? 2 * rowNum - index : index
                let space = rowNum - star
                for (let j = 0; j < space; j++) {
                    result += "  "
                }
                for (let k = 0; k < star; k++) {
                    result += `${symbol}  `
                }
                index++
                result += `\n`
                setDoWhile.value += result
            } while (index < 2 * rowNum)
        }
        function forLoopRepeat() {
            resetOutputs()


            for (let index = 0; index < rowNum * 2; index++) {
                let star = index > rowNum ? 2 * rowNum - index : index
                let space = rowNum - star

                setFor.value += '  '.repeat(space) + `${symbol}  `.repeat(star) + '\n';
            }
        }
        function whileLoopRepeat() {
            resetOutputs()

            let index = 0;
            while (index < rowNum * 2) {
                let star = index > rowNum ? 2 * rowNum - index : index
                let space = rowNum - star
                setWhile.value += '  '.repeat(space) + `${symbol}  `.repeat(star) + '\n';
                index++
            }

        }
        function doWhileLoopRepeat() {
            resetOutputs()

            let index = 0;
            do {
                let star = index > rowNum ? 2 * rowNum - index : index
                let space = rowNum - star

                setDoWhile.value += '  '.repeat(space) + `${symbol}  `.repeat(star) + '\n';
                index++
            } while (index < rowNum * 2)
        }


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


