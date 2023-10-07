/*            *
                                            Name of the challenge      : Bubble Sort                      *
                                            Challenge No               : 20                                                          *
                                            Developed for              : VHITECH Training Program         *
                                                Maintenance History                                                    *
                                            Developer                  : Premkumar T                                                      *
                                            Creation date              : 04/10/2023     Ticket No:               *
**/

//Screen Declaration
setInterval(() => {
    document.getElementById('currentDate').innerText = new Date().toLocaleDateString()
    document.getElementById('currentTime').innerText = new Date().toLocaleTimeString('en-in')
}, 1000)

//DOM declaration
let getItem = document.getElementById('item')
let setArray = document.getElementById('array')
let setNonArrayAscending = document.getElementById('nonArrayAscending')
let setNonArrayDescending = document.getElementById('nonArrayDescending')
let setArrayAscending = document.getElementById('arrayAscending')
let setArrayDescending = document.getElementById('arrayDescending')
let ALL_OUPUT = document.querySelectorAll('.output')
let ALL_INPUT = document.querySelectorAll('.input')
const RESET_INPUT = document.querySelectorAll("input")

//Constant declaration
const MIN_VALUE = -1000
const MAX_VALUE = 1000

//Error declaration
const ERROR_MESSAGE = 'Please Enter the Item to be Added'
const RANGE_ERROR = 'Array was aldready Full'
const EMPTY_ERROR = 'Array was Empty'
const MIN_MAX_ERROR = `Please Enter item Value Between ${MIN_VALUE} to ${MAX_VALUE}`

//Main functions
let mainArray = []
const add = () => {
    let item = parseFloat(getItem.value)
    if (!item) { alert(ERROR_MESSAGE); resetOutputs() }
    else if (mainArray.length > 5) {
        alert(RANGE_ERROR)
        getItem.value = ''
        resetOutputs()
    } else if (item < MIN_VALUE || item > MAX_VALUE) {
        alert(MIN_MAX_ERROR)
        getItem.value = ''
    } else {
        resetOutputs()
        mainArray.push(item)
        setArray.value = mainArray.join('\n')
        getItem.value = ''
    }
}
const bubbleSort = () => {
    if (mainArray.length < 1) alert(EMPTY_ERROR)
    else {
        resetOutputs()
        let swap = true
        while (swap) {
            swap = false
            for (let index = 0; index < mainArray.length - 1; index++) {
                if (mainArray[index] > mainArray[index + 1]) {
                    [mainArray[index], mainArray[index + 1]] = [mainArray[index + 1], mainArray[index]]
                    swap = true
                }
            }
        }
        setNonArrayAscending.value = mainArray.join('\n')
        swap = true
        while (swap) {
            swap = false
            for (let index = 0; index < mainArray.length - 1; index++) {
                if (mainArray[index] < mainArray[index + 1]) {
                    [mainArray[index], mainArray[index + 1]] = [mainArray[index + 1], mainArray[index]]
                    swap = true
                }
            }
        }
        setNonArrayDescending.value = mainArray.join('\n')
    }
}
const arraySort = () => {
    if (mainArray.length < 1) alert(EMPTY_ERROR)
    else {
        resetOutputs()
        setArrayAscending.value = mainArray.sort((a, b) => a - b).join('\n')
        setArrayDescending.value = mainArray.sort((a, b) => b - a).join('\n')
    }
}
//only digits
function onlyDigits(e) {
    char = e.charCode
    return (char == 43 || char == 69 || char == 101) ? false : true
}
const resetOutputs = () => {
    ALL_OUPUT.forEach(input => input.value = '')
}
//reset
const reset = () => {
    RESET_INPUT.forEach(input => input.value = '')
    ALL_INPUT.forEach(input => input.value = '')
    resetOutputs()
    mainArray = []
}