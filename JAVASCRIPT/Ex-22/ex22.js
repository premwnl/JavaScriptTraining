/*            *
                                            Name of the challenge      : Reduce Method                     *
                                            Challenge No               : 22                                                          *
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
let setDuplicates = document.getElementById('duplicates')
let ALL_OUPUT = document.querySelectorAll('.output')
let ALL_INPUT = document.querySelectorAll('.input')
const RESET_INPUT = document.querySelectorAll("input")

//Constant declaration
const MIN_VALUE = 1
const MAX_VALUE = 100

//Error declaration
const ERROR_MESSAGE = 'Please Enter the Item to be Added'
const RANGE_ERROR = 'Array was zaldready Full'
const EMPTY_ERROR = 'Array was Empty'
const MIN_MAX_ERROR = `Please Enter item Value Between ${MIN_VALUE} to ${MAX_VALUE}`

//Main functions
let mainArray = []

const add = () => {
    let item = parseInt(getItem.value)
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
const findDuplicates = () => {
    if (mainArray.length < 1) {
        alert(EMPTY_ERROR)
    } else {
        resetOutputs()
        let characters = mainArray.reduce((accumulator, value) => {
            accumulator[value] ? accumulator[value]++ : (accumulator[value] = 1);
            return accumulator
        }, {})

        let duplicates = Object.entries(characters).filter(([key, value]) => value > 1)
        duplicates.length > 0 ? (duplicates.forEach(([key, value]) => setDuplicates.value += `${key} Duplicated ${value} times\n`)) : (setDuplicates.value = `No Duplicates Found`)
    }
}

//only digits
function onlyDigits(e) {
    char = e.charCode
    return (char == 43 || char == 45 || char == 46 || char == 69 || char == 101) ? false : true
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



