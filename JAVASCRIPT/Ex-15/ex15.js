/*            *
                                            Name of the challenge      : Array                        *
                                            Challenge No               : 15                                                          *
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
const getName = document.getElementById('employeeName')
const getSearchedString = document.getElementById('searchedString')
const setResultSearch = document.getElementById('resultSearch')
const setArray = document.getElementById('array')
let ALL_OUPUT = document.querySelectorAll('.output')
const RESET_ALL = document.querySelectorAll('input')

//Constant declaration


//Error declaration
const ERROR_MESSAGE = 'Enter Employee Name'
const SEARCH_ERROR = 'Enter Name to be Searched'
const ARRAY_ERROR = 'Employee Array was Full'

//Main functions
let employeeArray = []

const addEmployee = () => {
    const employeeName = getName.value
    const searchString = getSearchedString.value

    if (!employeeName) {
        alert(ERROR_MESSAGE)
        getSearchedString.value = ''
        setResultSearch.value = ''
    } else if (employeeArray.length > 3) {
        alert(ARRAY_ERROR)
        getName.value = ''
        getSearchedString.value = ''
        setResultSearch.value = ''
    } else {
        employeeArray.push(employeeName)
        setArray.value = employeeArray.join('\n')
        getName.value = ''
    }
}

const search = () => {
    const searchString = getSearchedString.value

    if (!searchString) {
        alert(SEARCH_ERROR)
        setResultSearch.value = ''
    } else {
        // setResultSearch.value = employeeArray.some((val) => isSubString(val, searchString)) ?
        //     `${searchString.replaceAll(" ", "")} is Present` :
        //     `${searchString.replaceAll(" ", "")} is not Present`
        searchArray = employeeArray.filter((val) => isSubString(val, searchString))
        setResultSearch.value = searchArray.length > 0 ? `${searchArray.join(', ')} - is Present` :
            `${searchString.replaceAll(" ", "")} is not Present`

    }
}
function isSubString(string, substring) {
    string = string.toLowerCase().replaceAll(" ", "")
    substring = substring.toLowerCase().replaceAll(" ", "")
    return string.includes(substring)
}

function onlyAlphabets(e) {
    let char = e.charCode
    return ((char >= 33 && char <= 64) ||
        (char >= 91 && char <= 96) ||
        (char >= 123 && char <= 126)) ? false : true
}
//reset
const reset = () => {
    RESET_ALL.forEach(input => input.value = '')
    ALL_OUPUT.forEach(input => input.value = '')
    employeeArray = []
}
