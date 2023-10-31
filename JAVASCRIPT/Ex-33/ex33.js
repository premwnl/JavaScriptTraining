/*            *
                                            Name of the challenge      : CRUD                        *
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
const getImage = document.getElementById('file')
const setImage = document.getElementById('image')
const getOrganization = document.getElementById('organization')
const getFirstName = document.getElementById('firstName')
const getLastName = document.getElementById('lastName')
const getGender = document.querySelectorAll("input[name='gender']")
const getDob = document.getElementById('dateOfBirth')
const getMobile = document.getElementById('mobile')
const getEmail = document.getElementById('email')
const getCountry = document.getElementById('country')
const getState = document.getElementById('state')
const getCity = document.getElementById('city')
const getCommunicationAddress = document.getElementById('communicationaddress')
const getPermanentAddress = document.getElementById('permanentaddress')
const getCopyAddress = document.getElementById('addressCopy')
const getPincode = document.getElementById('pincode')
const registerBTN = document.getElementById('register')
const resetBTN = document.getElementById('reset')
const form = document.querySelector('form')
const RESET_ALL = document.querySelectorAll('input')
const RESET_INPUTS = document.querySelectorAll('.input')


//Constant declaration
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//Error declaration

//Main functions
getImage.addEventListener('change', () => {//event listerner for image
    let extension = getImage.files[0] ? getImage.files[0].name.split('.').pop().toLowerCase() : null;
    if (getImage.files[0] && (extension == 'jpg' || extension == 'jpeg' || extension == 'png')) {
        removeHelper(getImage);
        setImage.parentElement.classList.remove('border_red');
        let reader = new FileReader();
        reader.onload = function (e) {
            setImage.src = e.target.result;
        };
        reader.readAsDataURL(getImage.files[0]);
    } else {
        setImage.src = 'images/whiteBG.png';
        addHelper(getImage);
        setImage.parentElement.classList.add('border_red')
    }
})
form.addEventListener('submit', (e) => {
    e.preventDefault()
    register()
})
form.addEventListener('reset', (e) => {
    e.preventDefault()
    reset()
})
const register = () => {//validations
    const image = getImage.files[0]
    const organization = getOrganization.value
    const firstName = getFirstName.value
    const lastName = getLastName.value
    const gender = document.querySelector("input[name='gender']:checked").value;
    const dateOfBirth = getDob.value
    const mobile = getMobile.value
    const email = getEmail.value
    const country = getCountry.value
    const state = getState.value
    const city = getCity.value
    const communicationaddress = getCommunicationAddress.value
    const permanentaddress = getPermanentAddress.value
    const pincode = getPincode.value

    let elements = [getImage, getOrganization, getFirstName, getLastName, getDob, getMobile, getEmail, getCountry, getState, getCity, getCommunicationAddress, getPermanentAddress, getPincode]
    elements.forEach(element => element.addEventListener('input', () => { removeHelper(element) }))

    if (!image || !organization || !firstName || !lastName || !dateOfBirth || !mobile || !email || !country || !state || !city || !communicationaddress || !permanentaddress || !pincode) {
        if (!image) {
            addHelper(getImage)
            addHelper(setImage.parentElement)
        }
        if (!organization) addHelper(getOrganization);
        if (!firstName) addHelper(getFirstName);
        if (!lastName) addHelper(getLastName);
        if (!dateOfBirth) addHelper(getDob);
        if (!mobile) addHelper(getMobile);
        if (!email) addHelper(getEmail);
        if (!country) addHelper(getCountry);
        if (!state) addHelper(getState);
        if (!city) addHelper(getCity);
        if (!communicationaddress) addHelper(getCommunicationAddress);
        if (!permanentaddress) addHelper(getPermanentAddress);
        if (!pincode) addHelper(getPincode);
    } else if (firstName.length < 3) { addHelper(getFirstName) }
    else if (!regexEmail.test(email)) { addHelper(getEmail) }

}




function addHelper(element) {//add helper test and border
    element.classList.remove('border_green')
    element.classList.add('border_red')
    element.nextElementSibling.classList.add('display_block')
}
function removeHelper(element) {//remove helper test and border
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
    RESET_INPUTS.forEach(input => input.nextElementSibling.classList.remove('display_block'))
    document.querySelectorAll('select').forEach(item => {
        item.classList.remove('border_red')
        item.nextElementSibling.classList.remove('display_block')
    })
    document.querySelectorAll('textarea').forEach(item => {
        item.classList.remove('border_red')
        item.nextElementSibling.classList.remove('display_block')
    })

}

const reset = () => {//reset all
    RESET_INPUTS.forEach(input => input.value = '')
    setImage.src = 'images/whiteBG.png'
    setImage.parentElement.classList.remove('border_red');
    setImage.parentElement.classList.add('border_green');
    removeHelper(setImage.parentElement)
    resetBorder()
}



