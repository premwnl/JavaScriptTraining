/*            *
                                            Name of the challenge      : Date Functions                       *
                                            Challenge No               : 7                                                         *
                                            Developed for              : VHITECH Training Program         *
                                                Maintenance History                                                    *
                                            Developer                  : Premkumar T                                                      *
                                            Creation date              :27/9/2023     Ticket No:               *
**/

//Screen Declaration
setInterval(() => {
    document.getElementById('currentDate').innerText = new Date().toLocaleDateString()
    document.getElementById('currentTime').innerText = new Date().toLocaleTimeString('en-in')
}, 1000)

///DOM declaration
let getDate = document.getElementById('date')
let setDay = document.getElementById('day')
let setMonth = document.getElementById('month')
let setDays = document.getElementById('days')
let setWeek = document.getElementById('week')
let setChristmas = document.getElementById('christmas')
let setWeekend = document.getElementById('weekend')
const RESET_INPUT = document.querySelectorAll("input")

//Constant declaration
const MIN_YEAR = 1900
const MAX_YEAR = 2500
const MILLI_SECONDS = 1000
const SECONDS = 60
const MINUTE = 60
const HOURS = 24
const YEAR = 365
//Error declaration
const ERROR_MESSAGE = 'Please Enter Valid date Value'
const MINMAX_ERROR = 'Please Enter Dates from 1900 - 2500'

//Main functions
const calculate = () => {

    const userDate = new Date(getDate.value);
    const year = userDate.getFullYear()
    const startDate = new Date(`01/01/${year}`);
    const month = userDate.getMonth() + 1
    const startDayofMonth = new Date(`${month}/01/${year}`)
    const dayOfWeek = startDayofMonth.getDay();
    const dayOfMonth = userDate.getDate();
    let christmasDate = new Date(`12/25/${year}`);

    const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    christmasDate = ((christmasDate - userDate) <= 0) ? new Date(`12/25/${year + 1}`) : new Date(`12/25/${year}`)

    if ((date == 'Invalid Date')) {
        alert(ERROR_MESSAGE);
        reset()
    }
    else if (year < MIN_YEAR || year > MAX_YEAR) {
        alert(MINMAX_ERROR)
        reset()
    }
    else {
        setDay.value = daysArr[userDate.getDay()]
        setMonth.value = monthArr[userDate.getMonth()]
        setDays.value = Math.floor((userDate - startDate) / (MILLI_SECONDS * SECONDS * MINUTE * HOURS))
        setWeek.value = Math.round((dayOfMonth + dayOfWeek) / 7)
        setChristmas.value = Math.floor((christmasDate - userDate) / (MILLI_SECONDS * SECONDS * MINUTE * HOURS))
        setWeekend.value = (userDate.getDay() === 0 || userDate.getDay() === 6) ? `Yes` : `No`
    }
}
//reset
const reset = () => {
    RESET_INPUT.forEach(input => input.value = '')
}


