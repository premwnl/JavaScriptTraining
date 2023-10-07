/*            *
                                            Name of the challenge      : Reduce Method                     *
                                            Challenge No               : 23                                                          *
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
let getFirstWidth = document.getElementById('firstWidth')
let getFirstHeight = document.getElementById('firstHeight')
let getSecondWidth = document.getElementById('secondWidth')
let getSecondHeight = document.getElementById('secondHeight')
let setArray = document.getElementById('array')
let setResult = document.getElementById('result')
let ALL_OUPUT = document.querySelectorAll('.output')
let ALL_INPUT = document.querySelectorAll('.input')
const RESET_INPUT = document.querySelectorAll("input")

//Constant declaration
const MIN_VALUE = 1
const MAX_VALUE = 10

//Error declaration
const ERROR_MESSAGE = 'Please Enter the Item to be Added'
const RANGE_ERROR = 'Sister Array was aldready Full'
const EMPTY_ERROR = 'Sisters Array was Empty'
const MIN_MAX_ERROR = `Please Enter item Value Between ${MIN_VALUE} to ${MAX_VALUE}`

//Main functions
let firstSisterArray = []
let secondSisterArray = []

const add = () => {
    let firstWidth = parseInt(getFirstWidth.value)
    let firstHeight = parseInt(getFirstHeight.value)
    let secondWidth = parseInt(getSecondWidth.value)
    let secondHeight = parseInt(getSecondHeight.value)


    if ((!firstWidth || !firstHeight) && (!secondWidth || !secondHeight)) {
        //check all input empty?
        alert(ERROR_MESSAGE);
        resetOutputs()

    } else if ((firstWidth ? (firstHeight ? false : true) : (firstHeight ? true : false)) || (secondWidth ? (secondHeight ? false : true) : (secondHeight ? true : false))) {
        //throws alert if odd input was empty
        alert(ERROR_MESSAGE);
        resetOutputs()

    } else if (firstWidth < MIN_VALUE || firstWidth > MAX_VALUE || firstHeight < MIN_VALUE || firstHeight > MAX_VALUE || secondWidth < MIN_VALUE || secondWidth > MAX_VALUE || secondHeight < MIN_VALUE || secondHeight > MAX_VALUE) {
        //checks min max values
        alert(MIN_MAX_ERROR)
        if (firstWidth < MIN_VALUE || firstWidth > MAX_VALUE) {
            getFirstWidth.value = ''
        } else if (firstHeight < MIN_VALUE || firstHeight > MAX_VALUE) {
            getFirstHeight.value = ''
        } else if (secondWidth < MIN_VALUE || secondWidth > MAX_VALUE) {
            getSecondWidth.value = ''
        } else {
            getSecondHeight.value = ''
        }
    } else {
        (firstSisterArray.length > 4 && secondSisterArray.length > 4) ? alert(`Both ${RANGE_ERROR}`) ://checking whether both array was full
            (firstWidth ? (firstSisterArray.length > 4 ? alert(`First ${RANGE_ERROR}`) : null) ://checking whether first array was full
                (secondWidth ? (secondSisterArray.length > 4 ? alert(`Second ${RANGE_ERROR}`) : null) : null))//checking whether second array was full
        resetAdded()
        resetOutputs()

        //only pushes if has both values and length available
        firstWidth && firstHeight && firstSisterArray.length < 5 ? firstSisterArray.push([firstWidth, firstHeight]) : null
        secondWidth && secondHeight && secondSisterArray.length < 5 ? secondSisterArray.push([secondWidth, secondHeight]) : null
        setArray.value = `First        ->  ${firstSisterArray.join('    ')}\nSecond  ->  ${secondSisterArray.join('    ')}\n`
        resetAdded()
    }
}
const calculate = () => {

    if (firstSisterArray.length < 1 || secondSisterArray < 1) alert(EMPTY_ERROR)
    else {

        let count = firstSisterArray.reduce((accumulator, value) => {
            let secondCount = secondSisterArray.reduce((innerAccumulator, innerValue) => {
                if (value[0] * value[1] == innerValue[0] * innerValue[1]) {
                    innerAccumulator++;
                }
                return innerAccumulator
            }, 0)
            return accumulator + secondCount
        }, 0)

        setResult.value = `Satisfies ${count} Conditions`
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
const resetAdded = () => {
    getFirstWidth.value = getFirstHeight.value = getSecondWidth.value = getSecondHeight.value = ''
}
//reset
const reset = () => {
    RESET_INPUT.forEach(input => input.value = '')
    ALL_INPUT.forEach(input => input.value = '')
    resetOutputs()
    firstSisterArray = []
    secondSisterArray = []
}