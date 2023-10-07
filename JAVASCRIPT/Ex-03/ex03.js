/*            *
                                            Name of the challenge      : Marrige age Validation                        *
                                            Challenge No               : 3                                                         *
                                            Developed for              : VHITECH Training Program         *
                                                Maintenance History                                                    *
                                            Developer                  : Premkumar T                                                      *
                                            Creation date              :25/9/2023     Ticket No:               *
**/

//Screen Declaration
setInterval(() => {
    document.getElementById('currentDate').innerText = new Date().toLocaleDateString()
    document.getElementById('currentTime').innerText = new Date().toLocaleTimeString('en-in')
}, 1000)

//DOM declaration
let getAge = document.getElementById('age')
let getGender = document.querySelectorAll("input[name='gender']")
let output = document.getElementById('elligibility')

//Constant declaration
const RESET_INPUT = document.querySelector('input')
const RESET_TEXTAREA = document.querySelectorAll('textarea')

//Error declaration
const ERROR_MESSAGE = 'Please Enter all Values'
const MIN_MESSAGE = 'Enter age greater than 0'
const MAX_MESSAGE = 'Enter age range between 1 - 110 '
const RADIO_MESSAGE = "Please select Gender"

//Main functions

//finding selected gender 
let gender = null
getGender.forEach((person) => {
    person.addEventListener('click', () => {
        gender = document.querySelector("input[name='gender']:checked").value;
    })
})
const validate = () => {
    let age = getAge.value
    age.length == 0 ? alert(ERROR_MESSAGE) :
        age < 1 ? (alert(MIN_MESSAGE), getAge.value = '') :
            age > 110 ? (alert(MAX_MESSAGE), getAge.value = '') :
                !gender ? alert(RADIO_MESSAGE) :
                    output.value = parseInt(age) >= gender ? `Eligible` : `Not Eligible`
}
//only digits
function onlyDigits(e) {
    char = e.charCode
    return (char == 43 || char == 45 || char == 69 || char == 101) ? false : true
}
//reset
const reset = () => {
    RESET_INPUT.value = ''
    RESET_TEXTAREA.forEach(input => input.value = '')
    getGender.forEach(input => input.checked = false)
    gender = null
}
