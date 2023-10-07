/*            *
                                            Name of the challenge      : Push and Shift                      *
                                            Challenge No               : 21                                                          *
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
let getItem = document.getElementById('item')
let setArray = document.getElementById('array')
let getPush = document.getElementById('push')
let setPushedArray = document.getElementById('pushedArray')
let setShiftedArray = document.getElementById('shiftedArray')
let ALL_OUTPUT = document.querySelectorAll('.output')
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
        mainArray.push(item)
        setArray.value = mainArray
        getItem.value = ''
    }
}
const push = () => {
    let pushItem = parseFloat(getPush.value)
    if (!pushItem) { alert(ERROR_MESSAGE); resetOutputs() }
    else if (mainArray.length > 5) {
        alert(RANGE_ERROR)
        getPush.value = ''
        resetOutputs()
    } else if (pushItem < MIN_VALUE || pushItem > MAX_VALUE) {
        alert(MIN_MAX_ERROR)
        getPush.value = ''
    } else {
        mainArray.push(pushItem)
        setPushedArray.value = mainArray
        getPush.value = ''
    }
}
const shift = () => {
    if (mainArray.length < 1) {
        alert(EMPTY_ERROR)
    } else {
        mainArray.shift()
        setShiftedArray.value = mainArray.join(', ')
    }
}
//only digits
function onlyDigits(e) {
    char = e.charCode
    return (char == 43 || char == 44 || char == 69 || char == 101) ? false : true
}
const resetOutputs = () => {
    ALL_OUTPUT.forEach(input => input.value = '')
}
//reset
const reset = () => {
    RESET_INPUT.forEach(input => input.value = '')
    ALL_INPUT.forEach(input => input.value = '')
    resetOutputs()
    mainArray = []
}