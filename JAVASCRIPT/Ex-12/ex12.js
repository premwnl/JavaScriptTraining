/*            *
                                            Name of the challenge      : Star Pattern                       *
                                            Challenge No               : 12                                                        *
                                            Developed for              : VHITECH Training Program         *
                                                Maintenance History                                                    *
                                            Developer                  : Premkumar T                                                      *
                                            Creation date              :29/9/2023     Ticket No:               *
**/

//Screen Declaration
setInterval(() => {
    document.getElementById('currentDate').innerText = new Date().toLocaleDateString()
    document.getElementById('currentTime').innerText = new Date().toLocaleTimeString('en-in')
}, 1000)

// DOM declaration
let row = document.getElementById('row')
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
const MINMAX_ERROR = 'Please Enter Values Between 2 - 10'

//Main functions
const calculate = () => {
    let rowNum = row.value;

    if (!rowNum) {
        alert(ERROR_MESSAGE)
        resetSelect()
        resetOutputs()
    } else if (rowNum < MIN_RANGE || rowNum > MAX_RANGE) {
        alert(MINMAX_ERROR)
        row.value = ''
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
                for (let spaceLoop = 0; spaceLoop < space; spaceLoop++) {
                    result += "  "
                }
                for (let numLoop = 1; numLoop < star * 2; numLoop++) {
                    result += `${numLoop > Math.abs(space - rowNum) ? (Math.abs(space - rowNum) * 2) - numLoop : (numLoop > 9) ? 0 : numLoop}`
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
                let spaceLoop = 0
                while (spaceLoop < space) {
                    result += "  "
                    spaceLoop++
                }
                let numLoop = 1;
                while (numLoop < star * 2) {
                    result += `${numLoop > Math.abs(space - rowNum) ? (Math.abs(space - rowNum) * 2) - numLoop : (numLoop > 9) ? 0 : numLoop}`
                    numLoop++
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
                let spaceLoop = 0
                do {
                    result += "  "
                    spaceLoop++
                } while (spaceLoop <= space)
                let numLoop = 1;
                do {
                    result += `${numLoop > Math.abs(space - rowNum) ? (((Math.abs(space - rowNum) * 2) - numLoop >= 0) ? (Math.abs(space - rowNum) * 2) - numLoop : '') : (numLoop > 9) ? 0 : numLoop}`
                    numLoop++
                } while (numLoop < star * 2)
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
                result = ''
                for (let numLoop = 1; numLoop < star * 2; numLoop++) {
                    result += `${numLoop > Math.abs(space - rowNum) ? (Math.abs(space - rowNum) * 2) - numLoop : (numLoop > 9) ? 0 : numLoop}`
                }
                setFor.value += '  '.repeat(space) + `${result}` + '\n';

            }
        }
        function whileLoopRepeat() {
            resetOutputs()

            let index = 0;
            while (index < rowNum * 2) {
                let star = index > rowNum ? 2 * rowNum - index : index
                let space = rowNum - star
                result = ''
                let numLoop = 1;
                while (numLoop < star * 2) {
                    result += `${numLoop > Math.abs(space - rowNum) ? (Math.abs(space - rowNum) * 2) - numLoop : (numLoop > 9) ? 0 : numLoop}`
                    numLoop++
                }
                setWhile.value += '  '.repeat(space) + `${result}` + '\n';
                index++
            }

        }
        function doWhileLoopRepeat() {
            resetOutputs()

            let index = 0;
            do {
                let star = index > rowNum ? 2 * rowNum - index : index
                let space = rowNum - star
                result = ''
                let numLoop = 1;
                do {
                    result += `${numLoop > Math.abs(space - rowNum) ? (((Math.abs(space - rowNum) * 2) - numLoop >= 0) ? (Math.abs(space - rowNum) * 2) - numLoop : '') : (numLoop > 9) ? 0 : numLoop}`
                    numLoop++
                } while (numLoop < star * 2)
                setDoWhile.value += '  '.repeat(space) + `${result}` + '\n';
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






