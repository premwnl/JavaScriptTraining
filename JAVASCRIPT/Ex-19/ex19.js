/*            *
                                            Name of the challenge      : Reversed and Unique Characters                       *
                                            Challenge No               : 19                                                          *
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

//DOM declaration
let getString = document.getElementById('string')
let setReversed = document.getElementById('reversed')
let setUnique = document.getElementById('unique')
const RESET_INPUT = document.querySelectorAll("input")

//Constant declaration

//Error declaration
const ERROR_MESSAGE = 'Please Enter String Value'

//Main functions
const calculate = () => {
    let string = getString.value

    if (!string) {
        alert(ERROR_MESSAGE)
        reset()
    } else {
        let uniqueObject = {}
        let uniqueCharacters = ''

        for (let index = 0; index < string.length; index++) {

            if (string[index] == " ") continue;// skiping for-loop for empty spaces

            uniqueObject[string[index]] ? uniqueObject[string[index]]++ : uniqueObject[string[index]] = 1;
        }

        for (const character in uniqueObject) {
            if (uniqueObject[character] == 1) uniqueCharacters += character
        }
        setReversed.value = string.split('').reverse().join('')
        setUnique.value = uniqueCharacters ? uniqueCharacters : `No Unique Characters`
    }
}

//only digits
function onlyString(e) {
    char = e.charCode
    return ((char >= 65 && char <= 90) ||
        (char >= 97 && char <= 122) || char == 32) ? true : false
}
//reset
const reset = () => {
    RESET_INPUT.forEach(input => input.value = '')
}