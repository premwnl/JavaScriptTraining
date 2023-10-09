/*            *
                                            Name of the challenge      : Flames                    *
                                            Challenge No               : 24                                                         *
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
let getFirstName = document.getElementById('firstName')
let getSecondName = document.getElementById('secondName')
let setResult = document.getElementById('result')
let ALL_OUPUT = document.querySelectorAll('.output')
const RESET_INPUT = document.querySelectorAll("input")

//Constant declaration

//Error declaration
const ERROR_MESSAGE = 'Please Enter the Names to be calculated'

//Main functions
const calculate = () => {

    const firstName = getFirstName.value;
    const secondName = getSecondName.value

    if (!firstName || !secondName) {
        alert(ERROR_MESSAGE)
        setResult.value = ''
    } else {
        //changing to array
        let firstNameArray = firstName.toLowerCase().replaceAll(' ', '').split('')
        let secondNameArray = secondName.toLowerCase().replaceAll(' ', '').split('')

        for (let firstLoop = 0; firstLoop < firstNameArray.length; firstLoop++) {
            for (let secondLoop = 0; secondLoop < secondNameArray.length; secondLoop++) {
                //removing same charecters
                if (firstNameArray[firstLoop] === secondNameArray[secondLoop]) {
                    firstNameArray.splice(firstLoop, 1)
                    secondNameArray.splice(secondLoop, 1)
                    firstLoop--
                    secondLoop--
                }
            }
        }
        let length = firstNameArray.concat(secondNameArray).length;
        let size = 6
        let flames = ["FRIEND", "LOVE", "AFFECTION", "MARRIGE", "ENEMY", "SISTER"]

        while (size > 1) {
            if (length % size == 0) {
                //if element location was 0 no need to rotate just remove
                flames.splice((length % size - 1), 1)
            } else {
                //deleting and rotating array to start from next postion
                flames = flames.slice((length % size), flames.length).concat(flames.slice(0, (length % size - 1)))
            }
            size--
        }

        setResult.value = flames
    }
}

//only alphabets
function onlyAlphabets(e) {
    let char = e.charCode
    return ((char >= 33 && char <= 64) ||
        (char >= 91 && char <= 96) ||
        (char >= 123 && char <= 126)) ? false : true
}
const resetOutputs = () => {
    ALL_OUPUT.forEach(input => input.value = '')
}

//reset
const reset = () => {
    RESET_INPUT.forEach(input => input.value = '')
}