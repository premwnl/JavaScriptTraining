/*            *
                                            Name of the challenge      : Date Validation                       *
                                            Challenge No               : 18                                                         *
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

///DOM declaration
let getDate = document.getElementById('date')
let getMonth = document.getElementById('month')
let getYear = document.getElementById('year')
let getMethod = document.getElementById('method')
let setDay = document.getElementById('daySet')
let setMonth = document.getElementById('monthSet')
let setYear = document.getElementById('yearSet')
let setLeapYear = document.getElementById('leapYear')
const RESET_SELECT = document.querySelectorAll("select")
const RESET_INPUT = document.querySelectorAll("input")

//Constant declaration
const MIN_YEAR = 1900
const MAX_YEAR = 2500
const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

//Error declaration
const ERROR_MESSAGE = 'is Not a Valid date'
const MINMAX_ERROR = 'Please Enter Dates from 1900 - 2500'

//Main functions
const calculate = () => {

    const day = getDate.value
    const month = getMonth.value
    const year = getYear.value
    const userDate = new Date(`${month}/${day}/${year}`);
    const leapYear = ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) ? true : false

    if (userDate == 'Invalid Date' || ((month == 4 || month == 6 || month == 9 || month == 11) && (day == 31)) || (month == 2 && day >= 30) || (month == 2 && day >= 28 & !leapYear)) {
        alert(`${day ? day : ' - '}/${month ? month : ' - '}/${year ? year : ' - '} ${ERROR_MESSAGE}`);
        reset()
    }
    else if (year < MIN_YEAR || year > MAX_YEAR) {
        alert(MINMAX_ERROR)
        getYear.value = ''
    } else {
        resetOutputs()
        switch (true) {
            case getMethod.value == 'array':
                arrayMethod();
                break;
            case getMethod.value == 'nonArray':
                nonArrayMethod();
                break;
            default:
                resetOutputs()
        }
    }
    function arrayMethod() {
        setDay.value = daysArray[userDate.getDay()]
        setMonth.value = monthArray[userDate.getMonth()]
        setYear.value = year
        setLeapYear.value = leapYear ? 'LeapYear' : 'Not a LeapYear'
    }
    function nonArrayMethod() {
        let day = userDate.getDay()
        let month = userDate.getMonth()

        if (day == 0) setDay.value = 'Sun'
        else if (day == 1) setDay.value = 'Mon'
        else if (day == 2) setDay.value = 'Tues'
        else if (day == 3) setDay.value = 'Wed'
        else if (day == 4) setDay.value = 'Thurs'
        else if (day == 5) setDay.value = 'Fri'
        else setDay.value = 'Sat'

        if (month == 0) setMonth.value = 'January'
        else if (month == 1) setMonth.value = 'February'
        else if (month == 2) setMonth.value = 'March'
        else if (month == 3) setMonth.value = 'April'
        else if (month == 4) setMonth.value = 'May'
        else if (month == 5) setMonth.value = 'June'
        else if (month == 6) setMonth.value = 'July'
        else if (month == 7) setMonth.value = 'August'
        else if (month == 8) setMonth.value = 'September'
        else if (month == 9) setMonth.value = 'October'
        else if (month == 10) setMonth.value = 'November'
        else setMonth.value = 'December'

        setYear.value = year
        setLeapYear.value = leapYear ? 'LeapYear' : 'Not a LeapYear'
    }

}
// only digits
function onlyDigits(e) {
    char = e.charCode
    return (char == 43 || char == 45 || char == 46 || char == 69 || char == 101) ? false : true
}
const resetSelect = () => {
    RESET_SELECT.forEach(select => select.selectedIndex = 0)
}
const resetOutputs = () => {
    setDay.value = setMonth.value = setYear.value = setLeapYear.value = ''
}
//reset
const reset = () => {
    RESET_INPUT.forEach(input => input.value = '')
    resetSelect()
}

