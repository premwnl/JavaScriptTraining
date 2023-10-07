/*            *
                                            Name of the challenge      : Switch Statements                        *
                                            Challenge No               : 5                                                         *
                                            Developed for              : VHITECH Training Program         *
                                                Maintenance History                                                    *
                                            Developer                  : Premkumar T                                                      *
                                            Creation date              :26/9/2023     Ticket No:               *
**/

//Screen Declaration
setInterval(() => {
    document.getElementById('currentDate').innerText = new Date().toLocaleDateString()
    document.getElementById('currentTime').innerText = new Date().toLocaleTimeString('en-in')
}, 1000)

//DOM declaration
let getName = document.getElementById('name')
let getLanguage = document.getElementById('language')
let getPhysics = document.getElementById('physics')
let getMaths = document.getElementById('maths')
let getChemistry = document.getElementById('chemistry')
let getBiology = document.getElementById('biology')
let getTotal = document.getElementById('total')
let getAverage = document.getElementById('average')
let getGrade = document.getElementById('grade')
let getResult = document.getElementById('result')
let getCutoff = document.getElementById('cutoff')
let getElligibility = document.getElementById('elligibility')
const RESET_INPUT = document.querySelectorAll("input")

//Constant declaration
const MIN_MARKS = 0
const MAX_MARKS = 100

//Error declaration
const ERROR_MESSAGE = 'Please Enter all Values'
const MARK_ERROR = 'Enter Mark range between 0 - 100 '

//Main functions
const calculate = () => {
    let userName = getName.value
    let language = parseFloat(getLanguage.value)
    let physics = parseFloat(getPhysics.value)
    let maths = parseFloat(getMaths.value)
    let chemistry = parseFloat(getChemistry.value)
    let biology = parseFloat(getBiology.value)
    let total = language + physics + maths + chemistry + biology
    let average = (total / 5).toFixed(2)
    let medicalCutoff = ((physics + chemistry + biology) / 3 * 2).toFixed(2)
    let engineeringCutoff = ((physics + maths + chemistry + biology) / 2).toFixed(2)
    let otherCutoff = (language + maths).toFixed(2)

    let totalArray = [language, physics, maths, chemistry, biology]

    if (!userName || (totalArray.some((sub) => !sub))) {
        getCutoff.value = getElligibility.value = getGrade.value = getTotal.value = getAverage.value = getResult.value = ''
        alert(ERROR_MESSAGE);
    }
    else if (totalArray.some((sub) => sub < MIN_MARKS || sub > MAX_MARKS)) {
        alert(MARK_ERROR)
        if (language < MIN_MARKS || language > MAX_MARKS) {
            getLanguage.value = ""
        } if (physics < MIN_MARKS || physics > MAX_MARKS) {
            getPhysics.value = ""
        } if (maths < MIN_MARKS || maths > MAX_MARKS) {
            getMaths.value = ""
        } if (chemistry < MIN_MARKS || chemistry > MAX_MARKS) {
            getChemistry.value = ""
        } if (biology < MIN_MARKS || biology > MAX_MARKS) {
            getBiology.value = ""
        }
        getCutoff.value = getElligibility.value = getGrade.value = getTotal.value = getAverage.value = getResult.value = ''
    } else {
        if (totalArray.every((sub) => sub > 39)) {
            switch (true) {
                case average >= 90:
                    getGrade.value = `A`
                    break;
                case average < 90 && average >= 60:
                    getGrade.value = `B`
                    break;
                case average < 60 && average >= 40:
                    getGrade.value = `C`
                    break;
                default:
                    getGrade.value = `E`
            }
            switch (true) {
                case total > 400 && medicalCutoff >= 180:
                    getCutoff.value = medicalCutoff
                    getElligibility.value = `Elligible For Medical`
                    break;
                case total > 300 && engineeringCutoff >= 160:
                    getCutoff.value = engineeringCutoff
                    getElligibility.value = `Elligible For Engineering`
                    break;
                default:
                    getCutoff.value = otherCutoff
                    getElligibility.value = `Elligible For Arts`
            }
        } else {
            getCutoff.value = getElligibility.value = getGrade.value = ''
        }
        getTotal.value = total
        getAverage.value = average
        getResult.value = (language > 39 && physics > 39 && maths > 39 && chemistry > 39 && biology > 39) ? `Pass` : `Fail`
    }
}
//only digits and alphabets
function onlyDigits(e) {
    char = e.charCode
    return (char == 43 || char == 45 || char == 69 || char == 101) ? false : true
}
function onlyAlphabets(e) {
    let char = e.charCode
    return ((char >= 33 && char <= 64) ||
        (char >= 91 && char <= 96) ||
        (char >= 123 && char <= 126)) ? false : true
}
//reset
const reset = () => {
    RESET_INPUT.forEach(input => input.value = '')
}
