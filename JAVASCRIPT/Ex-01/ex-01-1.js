/*            *
                                            Name of the challenge      : String functions                        *
                                            Challenge No               : 1                                                          *
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
let stringElement = document.getElementById('stringText')
let subStringElement = document.getElementById('subStringText')
let searchedStringElement = document.getElementById('searchedString')
let palindromeElement = document.getElementById('palindrome')
let reversedElement = document.getElementById('reversed')
let submitElement = document.getElementById('submit')
let resetElement = document.getElementById('reset')
const RESET_ALL = document.querySelectorAll('input')

//Constant declaration
const SUBSTRING_OUTPUT = 'i\'ts a SubString'
const NOT_SUBSTRING_OUTPUT = 'i\'ts not a SubString'
const PALINDROME_OUTPUT = 'i\'ts a Palindrome'
const NOT_PALINDROME_OUTPUT = 'i\'ts not a Palindrome'

//Error declaration
const ERROR_MESSAGE = 'Enter String and String to be Searched'

//Main functions
//search
submitElement.addEventListener('click', (e) => {
    let reversedString = ''
    let getString = stringElement.value
    let getSubString = subStringElement.value
    let trimmedString = getString.toLowerCase().replace(' ', '')
    let trimmedSubString = getSubString.toLowerCase().replace(' ', '')

    if (getString == '' || getSubString == '') alert(ERROR_MESSAGE);
    else {
        for (let index = getString.length - 1; index >= 0; index--) {
            reversedString += getString[index]
        }
        searchedStringElement.value = (trimmedString).includes(trimmedSubString) ? SUBSTRING_OUTPUT : NOT_SUBSTRING_OUTPUT
        reversedElement.value = reversedString
        palindromeElement.value = (trimmedString === reversedString.toLowerCase().replace(' ', '')) ? PALINDROME_OUTPUT : NOT_PALINDROME_OUTPUT
    }
})
function onlyAlphabets(e) {
    let char = e.charCode
    return ((char >= 33 && char <= 64) ||
        (char >= 91 && char <= 96) ||
        (char >= 123 && char <= 126)) ? false : true
}
//reset
resetElement.addEventListener('click', () => {
    RESET_ALL.forEach(input => input.value = '')
})