/*            *
                                            Name of the challenge      : Regex Validations                        *
                                            Challenge No               : 33                                                          *
                                            Developed for              : VHITECH Training Program         *
                                                Maintenance History                                                    *
                                            Developer                  : Premkumar T                                                      *
                                            Creation date              : 30/10/2023     Ticket No:               *
**/

//Screen Declaration
setInterval(() => {
    document.getElementById('currentDate').innerText = new Date().toLocaleDateString()
    document.getElementById('currentTime').innerText = new Date().toLocaleTimeString('en-in')
}, 1000)

//DOM declaration
const getName = document.getElementById('userName')
const getEmail = document.getElementById('email')
const getCredit = document.getElementById('credit')
const getPan = document.getElementById('pan')
const getGst = document.getElementById('gst')
const setName = document.getElementById('modalName')
const setEmail = document.getElementById('modalEmail')
const setCredit = document.getElementById('modalCredit')
const setPan = document.getElementById('modalPan')
const setGst = document.getElementById('modalGst')
const modal = document.getElementById('modal')
const RESET_ALL = document.querySelectorAll('input')

//Constant declaration
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexPan = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
let regexGst = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/

//Error declaration
const NAME_ERROR = 'Enter Valid Name'
const EMAIL_ERROR = 'Enter Valid Email'
const CREDIT_ERROR = 'Enter Valid Credit'
const PAN_ERROR = 'Enter Valid PAN'
const GST_ERROR = 'Enter Valid GST'
const MATCH_ERROR = 'GST and PAN not matches'

//Main functions
const validate = () => {//validations
    const userName = getName.value
    const email = getEmail.value
    const credit = getCredit.value
    const pan = getPan.value
    const gst = getGst.value

    if (!userName || !email || !credit || !pan || !gst) {
        if (!userName) addHelper(getName);
        if (!email) addHelper(getEmail);
        if (!credit) addHelper(getCredit);;
        if (!pan) addHelper(getPan);
        if (!gst) addHelper(getGst);
    } else if (userName.length < 3) {
        alert(NAME_ERROR)
    } else if (!regexEmail.test(email)) {
        alert(EMAIL_ERROR)
    } else if (!(credit.length >= 16 && credit.length <= 20)) {
        alert(CREDIT_ERROR)
    } else if (!regexPan.test(getPan.value) && getPan.value.length !== 10) {
        alert(PAN_ERROR)
    } else if (!regexGst.test(getGst.value) && getGst.value.length !== 15) {
        alert(GST_ERROR)
    } else if (!checkGST(pan, gst)) {
        alert(MATCH_ERROR)
    } else {
        openModal(userName, email, credit, pan, gst)
        reset()
    }

}
//open modal
function openModal(userName, email, credit, pan, gst) {
    setName.textContent = userName
    setEmail.textContent = email
    setCredit.textContent = credit
    setPan.textContent = pan
    setGst.textContent = gst
    modal.classList.add('popUpModal')
}
//close modal
const closeModal = () => {
    modal.classList.remove('popUpModal')
}

//event listers for all input elements
// getName.addEventListener('input', () => getName.value.length >= 3 ? removeHelper(getName) : addHelper(getName))
// getEmail.addEventListener('input', () => regexEmail.test(getEmail.value) ? removeHelper(getEmail) : addHelper(getEmail))
// getCredit.addEventListener('input', () => (getCredit.value.length >= 16 && getCredit.value.length <= 20) ? removeHelper(getCredit) : addHelper(getCredit))
// getPan.addEventListener('input', () => (regexPan.test(getPan.value) && getPan.value.length == 10) ? removeHelper(getPan) : addHelper(getPan))
// getGst.addEventListener('input', () => (regexGst.test(getGst.value) && checkGST(getPan.value, getGst.value) && getGst.value.length == 15) ? removeHelper(getGst) : addHelper(getGst))

getName.addEventListener('input', () => removeHelper(getName))
getEmail.addEventListener('input', () => removeHelper(getEmail))
getCredit.addEventListener('input', () => removeHelper(getCredit))
getPan.addEventListener('input', () => removeHelper(getPan))
getGst.addEventListener('input', () => removeHelper(getGst))

function checkGST(pan, gst) {//checking gst and pan values
    return pan == gst.split('').slice(2, 12).join('')
}
function addHelper(element) {//add helper test and border
    element.classList.remove('border_green')
    element.classList.add('border_red')
    element.nextElementSibling.classList.add('display_block')
}
function removeHelper(element) {//remove helper test and border
    // element.classList.add('border_green')
    element.classList.remove('border_red')
    element.nextElementSibling.classList.remove('display_block')
}

function onlyDigits(e) {//onlyDigits allowed
    char = e.charCode
    return (char == 43 || char == 45 || char == 46 || char == 69 || char == 101) ? false : true
}

function onlyAlphabets(e) {//onlyAlphabets allowed
    let char = e.charCode
    return ((char >= 65 && char <= 90) ||
        (char >= 97 && char <= 122)) ? true : false
}

function onlyAlphabetsDigits(e) {//onlyAlphabetsDigits allowed
    let char = e.charCode
    return ((char >= 65 && char <= 90) ||
        (char >= 97 && char <= 122) ||
        (char >= 48 && char <= 57)) ? true : false
}

const resetBorder = () => {//reset all helper and borders
    RESET_ALL.forEach(input => input.classList.remove('border_red'))
    RESET_ALL.forEach(input => input.classList.remove('border_green'))
    RESET_ALL.forEach(input => input.nextElementSibling.classList.remove('display_block'))
}

const reset = () => {//reset all
    RESET_ALL.forEach(input => input.value = '')
    resetBorder()
}