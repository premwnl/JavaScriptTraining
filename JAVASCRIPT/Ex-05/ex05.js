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

//Constant declaration
const RESET_INPUT = document.querySelectorAll("input")

//Error declaration
const ERROR_MESSAGE = 'Please Enter all Values'
const MARK_ERROR = 'Enter Mark range between 0 - 100 '

//Main functions
const calculate = () => {
    let userName = getName.value
    let language = parseInt(getLanguage.value)
    let physics = parseInt(getPhysics.value)
    let maths = parseInt(getMaths.value)
    let chemistry = parseInt(getChemistry.value)
    let biology = parseInt(getBiology.value)
    let total = language + physics + maths + chemistry + biology
    let average = total / 5
    let medicalCutoff = (physics + chemistry + biology) / 3 * 2
    let engineeringCutoff = (physics + maths + chemistry + biology) / 2
    let otherCutoff = language + maths

    if (!userName || !language || !physics || !maths || !chemistry || !biology) alert(ERROR_MESSAGE)
    else if (language < 0 || language > 100 || physics < 0 || physics > 100 || maths < 0 || maths > 100 || chemistry < 0 || chemistry > 100 || biology < 0 || biology > 100) {
        alert(MARK_ERROR)
        if (language < 0 || language > 100) {
            getLanguage.value = ""
        } if (physics < 0 || physics > 100) {
            getPhysics.value = ""
        } if (maths < 0 || maths > 100) {
            getMaths.value = ""
        } if (chemistry < 0 || chemistry > 100) {
            getChemistry.value = ""
        } if (biology < 0 || biology > 100) {
            getBiology.value = ""
        }
    } else {
        //checks pass / fail
        if (language > 39 && physics > 39 && maths > 39 && chemistry > 39 && biology > 39) {
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
