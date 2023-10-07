/*            *
                                            Name of the challenge      : Name Search(variables)                        *
                                            Challenge No               : 14                                                        *
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

//DOM declaration
const getFirst = document.getElementById('firstEmployee')
const getSecond = document.getElementById('secondEmployee')
const getThird = document.getElementById('thirdEmployee')
const getFourth = document.getElementById('fourthEmployee')
const getFifth = document.getElementById('fifthEmployee')
const getSixth = document.getElementById('sixthEmployee')
const getSeventh = document.getElementById('seventhEmployee')
const getEight = document.getElementById('eighthEmployee')
const getSearchedString = document.getElementById('searchedString')
const setResultSearch = document.getElementById('resultSearch')
const RESET_ALL = document.querySelectorAll('input')

//Constant declaration


//Error declaration
const ERROR_MESSAGE = 'Enter All Employee Names'
const SEARCH_ERROR = 'Enter Name to be Searched'


//Main functions
const search = () => {
    firstEmployee = getFirst.value
    secondEmployee = getSecond.value
    thirdEmployee = getThird.value
    fourthEmployee = getFourth.value
    fifthEmployee = getFifth.value
    sixthEmployee = getSixth.value
    seventhEmployee = getSeventh.value
    eighthEmployee = getEight.value
    searchString = getSearchedString.value


    if (!firstEmployee || !secondEmployee || !thirdEmployee || !fourthEmployee || !fifthEmployee || !sixthEmployee || !seventhEmployee || !eighthEmployee) {
        alert(ERROR_MESSAGE)
        setResultSearch.value = ''
        searchString.value = ''
    } else if (!searchString) {
        alert(SEARCH_ERROR)
        setResultSearch.value = ''
    } else {
        setResultSearch.value = (
            isSubString(firstEmployee, searchString) ||
            isSubString(secondEmployee, searchString) ||
            isSubString(thirdEmployee, searchString) ||
            isSubString(fourthEmployee, searchString) ||
            isSubString(fifthEmployee, searchString) ||
            isSubString(sixthEmployee, searchString) ||
            isSubString(seventhEmployee, searchString) ||
            isSubString(eighthEmployee, searchString)) ?
            `${searchString.replaceAll(" ", "")} is Present` :
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
}