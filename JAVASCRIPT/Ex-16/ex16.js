/*            *
                                            Name of the challenge      : Array                        *
                                            Challenge No               : 16                                                          *
                                            Developed for              : VHITECH Training Program         *
                                                Maintenance History                                                    *
                                            Developer                  : Premkumar T                                                      *
                                            Creation date              :03/10/2023     Ticket No:               *
**/

//Screen Declaration
setInterval(() => {
    document.getElementById('currentDate').innerText = new Date().toLocaleDateString()
    document.getElementById('currentTime').innerText = new Date().toLocaleTimeString('en-in')
}, 1000)

//DOM declaration
const getNumber = document.getElementById('employeeNumber')
const getSearchedNumber = document.getElementById('searchedNumber')
const setResultSearch = document.getElementById('resultSearch')
const setArray = document.getElementById('array')
let ALL_OUPUT = document.querySelectorAll('.output')
const RESET_ALL = document.querySelectorAll('input')

//Constant declaration
const MIN_VALUE = 1
const MAX_VALUE = 9999


//Error declaration
const ERROR_MESSAGE = 'Enter Employee Number'
const SEARCH_ERROR = 'Enter Number to be Searched'
const ARRAY_ERROR = 'Employee Array was Full'
const DUPLICATE_ERROR = 'Entered Number Already Added'
const RANGE_ERROR = 'Enter Numbers Between 1-9999'


//Main functions
let employeeArray = []

const addEmployee = () => {
    const employeeNumber = parseInt(getNumber.value)

    if (!employeeNumber) {
        alert(ERROR_MESSAGE)
        resetOutputs()
    } else if (employeeNumber < 1 || employeeNumber > 9999) {
        alert(RANGE_ERROR)
        resetOutputs()
    } else if (employeeArray.includes(employeeNumber)) {
        alert(DUPLICATE_ERROR)
        resetOutputs()
    } else if (employeeArray.length > 7) {
        alert(ARRAY_ERROR)
        resetOutputs()
    } else {
        employeeArray.push(employeeNumber)
        setArray.value = employeeArray.join('\n')
        resetOutputs()
    }
}

const search = () => {
    const searchNumber = parseInt(getSearchedNumber.value)

    if (!searchNumber) {
        alert(SEARCH_ERROR)
        setResultSearch.value = ''
    } else {
        // setResultSearch.value = employeeArray.some((val) => isSubNumber(val, searchNumber)) ?
        //     `${searchNumber.replaceAll(" ", "")} is Present` :
        //     `${searchNumber.replaceAll(" ", "")} is not Present`
        // searchArray = employeeArray.filter((number) => isSubNumber(number, searchNumber))
        // setResultSearch.value = searchArray.length > 0 ? `${searchArray.join(', ')} - is Present` :
        //     `${searchNumber} is not Present`
        searchValue = employeeArray.find(number => number == searchNumber)
        setResultSearch.value = searchValue ? `${searchNumber}  is Present` :
            `${searchNumber} is not Present`
    }
}
// function isSubNumber(number, subNumber) {
//     return number.toString() == subNumber.toString()
// }

function onlyDigits(e) {
    char = e.charCode
    return (char == 43 || char == 45 || char == 46 || char == 69 || char == 101) ? false : true
}
function resetOutputs() {
    getNumber.value = ''
    getSearchedNumber.value = ''
    setResultSearch.value = ''
}
//reset
const reset = () => {
    RESET_ALL.forEach(input => input.value = '')
    ALL_OUPUT.forEach(input => input.value = '')
    employeeArray = []
}
