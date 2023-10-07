/*            *

Name of the challenge      :  String functions                        *
Challenge No                       : 1                                                          *
Developed for                      : VHITECH Training Program         *
                  Maintenance History                                                    *
Developer                                  :                                                       *
Creation date                         :25/9/2023     Ticket No:               *
**/
//Screen Declaration
//DOM declaration
//Constant declaration
//Error declaration
//Main function
//DATE AND TIME

//Screen Declaration

setInterval(() => {
    let today = new Date()

    let year = today.getFullYear()
    let month = today.getMonth() + 1
    let date = today.getDate()

    let hour = showZero(today.getHours() % 12)
    let minute = showZero(today.getMinutes())
    let second = showZero(today.getSeconds())

    let current_date = `${date}/${month}/${year}`
    let current_time = `${hour}:${minute}:${second} `

    function showZero(num) {
        return num < 10 ? `0${num}` : num;
    }

    dateShow.innerText = current_date
    timeShow.innerText = current_time
}, 1000)
let dateShow = document.getElementById('currentDate')
let timeShow = document.getElementById('currentTime')
let formEl = document.getElementById('form')
let stringEl = document.getElementById('stringText')
let subStringEl = document.getElementById('subStringText')
let searchedStringEl = document.getElementById('searchedString')
let palindromeEl = document.getElementById('palindrome')
let reversedEl = document.getElementById('reversed')
const errTextLength = 'Enter String and String to be Searched'
const errText = 'Enter only Characters A-Z'
const substrText = 'i\'ts a SubString'
const notSubstrText = 'i\'ts not a SubString'
const palindromeText = 'i\'ts a Palindrome'
const notPalindromeText = 'i\'ts not a Palindrome'



//inputs

stringEl.addEventListener('keydown', (e) => {
    keyCode = e.keyCode
    if ((keyCode >= 48 && keyCode <= 57) ||
        (keyCode >= 186 && keyCode <= 192) ||
        (keyCode >= 219 && keyCode <= 222)) {
        e.preventDefault();
    } else stringEl.value = e.target.value

})
subStringEl.addEventListener('keydown', (e) => {
    keyCode = e.keyCode
    if ((keyCode >= 48 && keyCode <= 57) ||
        (keyCode >= 186 && keyCode <= 192) ||
        (keyCode >= 219 && keyCode <= 222)) {
        e.preventDefault();
    } else subStringEl.value = e.target.value

})

//searchString
function searchString(str, subStr) {
    str = str.toLowerCase().split(' ').join('')
    subStr = subStr.toLowerCase().split(' ').join('')

    if (str.includes(subStr)) return substrText
    else return notSubstrText
}
//reverseString
function reverseString(str) {
    let reversedStr = str.split('').reverse().join('')
    return reversedStr
}
//checkPalindrome
function checkPalindrome(str) {
    str = str.toLowerCase().split(' ').join('')
    if (str === reverseString(str)) return palindromeText
    else return notPalindromeText
}


//search
formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    if (stringEl.value == '' || subStringEl.value == '') return alert(errTextLength);

    searchedStringEl.value = searchString(stringEl.value, subStringEl.value)
    palindromeEl.value = checkPalindrome(stringEl.value)
    reversedEl.value = reverseString(stringEl.value)
})

//reset
formEl.addEventListener('reset', () => {
    stringEl.value = '';
    subStringEl.value = '';
    searchedStringEl.value = '';
    palindromeEl.value = '';
    reversedEl.value = '';
})