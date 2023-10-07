/*            *
                                            Name of the challenge      : Sort and Find Method                        *
                                            Challenge No               : 17                                                          *
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
const getLength = document.getElementById('employeeLimit')
const getNumber = document.getElementById('employeeNumber')
const getName = document.getElementById('employeeName')
const getDepartment = document.getElementById('employeeDepartment')
const setTable = document.getElementById('arrayBody')
let setSort = document.getElementById('sortBody')
const getSearchedName = document.getElementById('searchedName')
const setArray = document.getElementById('array')
const ALL_TABLE = document.querySelectorAll('tbody')
let ALL_OUPUT = document.querySelectorAll('.output')
const RESET_ALL = document.querySelectorAll('input')

//Constant declaration
const MIN_VALUE = 1
const MAX_LENGTH = 4
const MAX_VALUE = 9999


//Error declaration
const ERROR_MESSAGE = 'Enter all Values'
const SEARCH_ERROR = 'Enter Name to be Searched'
const ARRAY_ERROR = 'Employee Array was Full'
const EMPTY_ERROR = 'Employee Array was Empty'
const ARRAY_LIMIT_ERROR = 'Employee Array Range Entered was only'
const LIMIT_ERROR = 'Employee Array Range 1-4 only'
const DUPLICATE_ERROR = 'Entered Employee Number Already Added'
const RANGE_ERROR = 'Enter Numbers Between 1-9999'


//Main functions
let employeeArray = []

const addEmployee = () => {
    const employeeLimit = getLength.value
    const employeeName = getName.value
    const employeeNumber = parseInt(getNumber.value)
    const employeeDepartment = getDepartment.value
    const employeeObject = {
        employeeNumber,
        employeeName,
        employeeDepartment
    }

    if (!employeeLimit || !employeeNumber || !employeeName || !employeeDepartment) {
        alert(ERROR_MESSAGE)
        getSearchedName.value = ''
    } else if (employeeLimit < MIN_VALUE || employeeLimit > MAX_LENGTH) {
        alert(LIMIT_ERROR)
        getLength.value = ''
        getSearchedName.value = ''
    } else if (employeeNumber < MIN_VALUE || employeeNumber > MAX_VALUE) {
        alert(RANGE_ERROR)
        getNumber.value = ''
        getSearchedName.value = ''
    } else if (employeeArray.some((value) => value.employeeNumber == employeeNumber)) {
        alert(DUPLICATE_ERROR)
        getNumber.value = ''
        getSearchedName.value = ''
    } else if (employeeArray.length >= employeeLimit) {
        alert(`${ARRAY_LIMIT_ERROR} ${employeeLimit}`)
        resetOutputs()
    } else {
        getLength.setAttribute('readonly', true)
        employeeArray.push(employeeObject)
        setTable.innerHTML += `
        <tr>
            <td>${employeeNumber}</td>
            <td>${employeeName}</td>
            <td>${employeeDepartment}</td>
        </tr>
        `
        resetOutputs()
    }
}

const sort = () => {
    if (employeeArray.length < 1) alert(EMPTY_ERROR)
    else {
        let sortedEmployees = employeeArray.sort((a, b) => a.employeeNumber - b.employeeNumber)
        let sortedResult = sortedEmployees.map((value) => `
        <tr>
            <td>${value.employeeNumber}</td>
            <td>${value.employeeName}</td>
            <td>${value.employeeDepartment}</td>
        </tr>`)
        setSort.innerHTML = sortedResult.join('\n')
    }
}

const search = () => {
    const searchString = getSearchedName.value

    if (!searchString) {
        alert(SEARCH_ERROR)
    } else if (employeeArray.length < 1) {
        alert(EMPTY_ERROR)
        getSearchedName.value = ''
    }
    else {
        let searchArray = employeeArray.filter((value) => isSubString(value.employeeName, searchString))
        setArray.value = searchArray.length > 0 ? searchArray.map((value) => `No: ${value.employeeNumber}
Name: ${value.employeeName}
Department: ${value.employeeDepartment} 
`) :
            `${searchString.replaceAll(" ", "")} was not Present`

    }
}
function isSubString(string, substring) {
    string = string.toLowerCase().replaceAll(" ", "")
    substring = substring.toLowerCase().replaceAll(" ", "")
    return string == substring
}

function onlyDigits(e) {
    char = e.charCode
    return (char == 43 || char == 45 || char == 46 || char == 69 || char == 101) ? false : true
}
function onlyAlphabets(e) {
    let char = e.charCode
    return ((char >= 33 && char <= 64) ||
        (char >= 91 && char <= 96) ||
        (char >= 123 && char <= 126)) ? false : true
}
//reset

const resetOutputs = () => {
    getNumber.value = ''
    getName.value = ''
    getDepartment.value = ''
    getSearchedName.value = ''
}
const reset = () => {
    RESET_ALL.forEach(input => input.value = '')
    ALL_OUPUT.forEach(input => input.value = '')
    ALL_TABLE.forEach(tbody => tbody.innerHTML = '')
    getLength.removeAttribute('readonly')
    employeeArray = []
}
