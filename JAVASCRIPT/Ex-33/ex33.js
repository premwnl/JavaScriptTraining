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
const male = document.getElementById('male')
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
const container = document.getElementById('tableBodyContainer')
const RESET_SELECT = document.querySelectorAll("select")
const RESET_INPUTS = document.querySelectorAll('.input')
//Constant declaration
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexMobile = /^\+?\d.\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}?/;
const regexPincode = /[1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3}/;
let editing = -1;
//Error declaration

//Main functions
const register = () => {//validations
    const organization = getOrganization.value
    const firstName = getFirstName.value
    const lastName = getLastName.value
    const gender = document.querySelector("input[name='gender']:checked").value;
    const addressCopy = getCopyAddress.checked
    const dateOfBirth = getDob.value
    const mobile = getMobile.value
    const email = getEmail.value
    const country = getCountry.value
    const state = getState.value
    const city = getCity.value
    const communicationaddress = getCommunicationAddress.value
    const permanentaddress = getPermanentAddress.value
    const pincode = getPincode.value



    if (setImage.src.includes('images/whiteBG.png') || !organization || !firstName || !lastName || !dateOfBirth || !mobile || !email || !country || !state || !city || !communicationaddress || !permanentaddress || !pincode) {
        if (setImage.src.includes('images/whiteBG.png')) { addHelper(getImage) }
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
    else if (new Date(dateOfBirth) > new Date(Date.now())) { addHelper(getDob) }
    else if (!regexMobile.test(mobile) || mobile.replaceAll(" ", '').length > 15) { addHelper(getMobile) }
    else if (!regexEmail.test(email)) { addHelper(getEmail) }
    else if (!regexPincode.test(pincode) || pincode.length > 6) { addHelper(getPincode) }
    else {
        let items = {
            image: setImage.src, organization, firstName, lastName, gender, dateOfBirth, mobile, email, addressCopy, country, state, city, communicationaddress, permanentaddress, pincode
        }
        createData(items)
        resetInputs()
    }

}
const createData = (data) => {//create object and set item to locale storage
    let prevData = JSON.parse(localStorage.getItem('crud') || '[]')
    if (editing >= 0) {
        let upd = prevData.filter(item => item != prevData[editing])
        localStorage.setItem('crud', JSON.stringify([...upd, data]))
        readData()
        editing = -1;
        container.style.pointerEvents = 'all'
    } else {
        localStorage.setItem('crud', JSON.stringify([...prevData, data]))
        readData()
    }
}
const readData = () => {//read data and set table
    container.innerHTML = '';
    let prevData = JSON.parse(localStorage.getItem('crud') || '[]');
    if (prevData.length) {
        container.parentElement.classList.remove('display-none');
        for (const loop of prevData) {//looping to asssign table values
            let dataArray = [loop.firstName, loop.lastName, loop.organization, loop.gender, loop.dateOfBirth, loop.mobile, loop.email, loop.country, loop.state, loop.city, loop.pincode]
            const rowElement = document.createElement('tr')
            for (const data of dataArray) {
                const dataElement = document.createElement('td')
                dataElement.textContent = data
                rowElement.append(dataElement)
            }
            const dataElement = document.createElement('td')
            dataElement.innerHTML = `<i id='edit_${prevData.indexOf(loop)}' class="fa-solid fa-edit padding_ten blue"></i>
            <i id='delete_${prevData.indexOf(loop)}' class="fa-solid fa-trash padding_ten red"></i>`;
            rowElement.append(dataElement)
            container.append(rowElement)
            document.getElementById(`edit_${prevData.indexOf(loop)}`).addEventListener('click', () => { editing = prevData.indexOf(loop); updateData(prevData.indexOf(loop)); })
            document.getElementById(`delete_${prevData.indexOf(loop)}`).addEventListener('click', () => { deleteData(prevData.indexOf(loop)) })
        }
    } else {
        container.parentElement.classList.add('display-none');
    }

}
readData()
const updateData = (index) => {//
    resetInputs()
    editing >= 0 ? (registerBTN.value = 'UPDATE', container.style.pointerEvents = 'none') : 'REGISTER';
    let prevData = JSON.parse(localStorage.getItem('crud') || '[]');
    let data = prevData[index];
    setImage.src = data.image;
    getOrganization.value = data.organization;
    getFirstName.value = data.firstName
    getLastName.value = data.lastName
    document.getElementById(`${data.gender}`).checked = true;
    getDob.value = data.dateOfBirth
    getMobile.value = data.mobile
    getCopyAddress.checked = data.addressCopy
    getEmail.value = data.email
    getCountry.value = data.country
    getState.value = data.state
    getCity.value = data.city
    getCommunicationAddress.value = data.communicationaddress
    getPermanentAddress.value = data.permanentaddress
    getPincode.value = data.pincode
}
const deleteData = (index) => {//deleting data using index
    let answer = confirm('Are You Want to Delete This Data?')
    if (answer) {
        let prevData = JSON.parse(localStorage.getItem('crud') || '[]');
        localStorage.setItem('crud', JSON.stringify([...prevData.filter(data => data != prevData[index])]))
        readData()
    }
}
getImage.addEventListener('change', () => {//event listerner for image
    let extension = getImage.files[0] ? getImage.files[0].name.split('.').pop().toLowerCase() : null;
    if (getImage.files[0] && (extension == 'jpg' || extension == 'jpeg' || extension == 'png') && getImage.files[0].size < 8000000) {
        removeHelper(getImage);
        let reader = new FileReader();
        reader.onload = function (e) {
            setImage.src = e.target.result;
        };
        reader.readAsDataURL(getImage.files[0]);
    } else {
        setImage.src = 'images/whiteBG.png';
        addHelper(getImage);
    }
})
form.addEventListener('submit', (e) => {//submit button 
    e.preventDefault()
    register();
})
form.addEventListener('reset', (e) => {//reset button
    e.preventDefault()
    reset()
})
getCopyAddress.addEventListener('change', () => {//radio button for copy address
    getCopyAddress.checked ? (getPermanentAddress.value = getCommunicationAddress.value,
        getCommunicationAddress.addEventListener('input', copyaddress), getPermanentAddress.readOnly = true) :
        (getCommunicationAddress.removeEventListener('input', copyaddress), getPermanentAddress.readOnly = false, permanentaddress.value = '');
})
function copyaddress() { getPermanentAddress.value = getCommunicationAddress.value }//function for event handler


let elements = [getImage, getOrganization, getFirstName, getLastName, getDob, getMobile, getEmail, getCountry, getState, getCity, getCommunicationAddress, getPermanentAddress, getPincode]
elements.forEach(element => element.addEventListener('input', () => { removeHelper(element) }))
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
function onlyMobile(e) {//onlyDigits allowed
    char = e.charCode
    return (char == 43 || char == 32 || char >= 48 && char <= 57) ? true : false
}
function onlyAlphabets(e) {//onlyAlphabets allowed
    let char = e.charCode
    return ((char >= 65 && char <= 90) ||
        (char >= 97 && char <= 122)) ? true : false
}
const resetBorder = () => {//reset all helper and borders
    RESET_INPUTS.forEach(input => input.classList.remove('border_red'))
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
const resetSelect = () => {//reset all select options
    RESET_SELECT.forEach(select => select.selectedIndex = 0)
}
const resetInputs = () => {
    RESET_INPUTS.forEach(input => input.value = '')
    setImage.src = 'images/whiteBG.png'
    male.checked = true;
    getImage.files.length = 0;
    registerBTN.value = 'REGISTER';
    removeHelper(getImage)
    resetBorder()
    resetSelect()
}
const reset = () => {//reset all
    if (editing >= 0) { updateData(editing) }
    else { resetInputs() }
}



