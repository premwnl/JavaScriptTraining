/*            *
                                            Name of the challenge      : Sum of Diagonals, Transpose and IndexSearch                     *
                                            Challenge No               : 26                                                          *
                                            Developed for              : VHITECH Training Program         *
                                                Maintenance History                                                    *
                                            Developer                  : Premkumar T                                                      *
                                            Creation date              : 09/10/2023     Ticket No:               *
**/


//Screen Declaration
setInterval(() => {
    document.getElementById('currentDate').innerText = new Date().toLocaleDateString()
    document.getElementById('currentTime').innerText = new Date().toLocaleTimeString('en-in')
}, 1000)

//DOM declaration
let getRowColumn = document.getElementById('rowColumn')
let setRowColumn = document.getElementById('inputs')
let getSearch = document.getElementById('search')
let setSumOfDiagonals = document.getElementById('sumOfDiagonals')
let setTransposeMatrix = document.getElementById('transposeMatrix')
let setMatrix = document.getElementById('matrix')
let setSearch = document.getElementById('index')
let ALL_OUPUT = document.querySelectorAll('.output')
const RESET_INPUT = document.querySelectorAll("input")

//Constant declaration
const ROW_MIN_VALUE = 2
const ROW_MAX_VALUE = 9
const MIN_VALUE = 1
const MAX_VALUE = 99

//Error declaration
const ERROR_MESSAGE = 'Please Enter the value of Rows*Column'
const SEARCH_MESSAGE = 'Please Enter the value to be Searched'
const FILL_ERROR = 'Array was Not Full'
const EMPTY_ERROR = 'Array was Empty'
const MIN_MAX_ERROR = `Please Enter Value Between ${MIN_VALUE} to ${MAX_VALUE}`
const ROW_MIN_MAX_ERROR = `Please Enter Row Column Value Between ${ROW_MIN_VALUE} to ${ROW_MAX_VALUE}`


//Main functions
let mainArray = []

getRowColumn.addEventListener('input', () => {
    resetInput()
    const rowColumn = parseInt(getRowColumn.value);

    if (!getRowColumn.value) {
        alert(ERROR_MESSAGE)
        resetOutputs()
        getSearch.value = ''
        getSearch.value = ''
    } else if (rowColumn < ROW_MIN_VALUE) {
        return
    } else if (rowColumn > ROW_MAX_VALUE) {
        alert(ROW_MIN_MAX_ERROR)
        reset()
    } else {
        //creating an empty array
        for (let index = 0; index < rowColumn; index++) {
            mainArray[index] = []
            for (let loop = 0; loop < rowColumn; loop++) {
                mainArray[index][loop] = 0
            }
        }

        let matrixHTML = "";
        for (let index = 0; index < rowColumn; index++) {
            matrixHTML += "<tr>";
            for (let innerIndex = 0; innerIndex < rowColumn; innerIndex++) {
                matrixHTML += `<td><input type="number" id="input${index}_${innerIndex}"></td>`;
            }
            matrixHTML += "</tr>";
        }
        setMatrix.innerHTML = matrixHTML;
    }
})


function getInput() {
    if (!getRowColumn.value) {
        alert(ERROR_MESSAGE)
        resetOutputs()
        getSearch.value = ''
    } else {
        for (let index = 0; index < mainArray.length; index++) {
            for (let innerIndex = 0; innerIndex < mainArray[0].length; innerIndex++) {
                const input = document.getElementById(`input${index}_${innerIndex}`);
                mainArray[index][innerIndex] = parseInt(input.value);
            }
        }
    }
}

function isFull(array) {
    for (let index = 0; index < array.length; index++) {
        for (let loop = 0; loop < array[0].length; loop++) {
            if (!array[index][loop]) return true
        }
    }
    return false
}


function sumDiagonals() {
    getInput();
    let firstDiagonal = 0
    let secondDiagonal = 0

    if (!getRowColumn.value) {
        alert(ERROR_MESSAGE)
        resetOutputs()
        getSearch.value = ''
    } else if (isFull(mainArray)) {
        alert(FILL_ERROR)
    } else {

        for (let index = 0; index < mainArray.length; index++) {
            for (let loop = 0; loop < mainArray.length; loop++) {
                if (index == loop) {
                    firstDiagonal += mainArray[index][loop]
                }
                if (loop == mainArray.length - 1 - index) {
                    secondDiagonal += mainArray[index][loop]
                }
            }
        }
        setSumOfDiagonals.value = firstDiagonal + ', ' + secondDiagonal;
    }
}

function transpose() {
    getInput();

    if (!getRowColumn.value) {
        alert(ERROR_MESSAGE)
        resetOutputs()
        getSearch.value = ''
    } else if (isFull(mainArray)) {
        alert(FILL_ERROR)
    } else {
        let transposed = []
        for (let index = 0; index < mainArray.length; index++) {
            transposed[index] = []
        }
        for (let index = 0; index < mainArray.length; index++) {
            for (let loop = 0; loop < mainArray[0].length; loop++) {
                transposed[loop][index] = mainArray[index][loop]
            }

        }
        setTransposeMatrix.value = transposed.join('\n')
    }
}

function search() {
    getInput()
    const search = parseInt(getSearch.value);
    if (!getRowColumn.value) {
        alert(ERROR_MESSAGE)
        resetOutputs()
        getSearch.value = ''
    } else if (isFull(mainArray)) {
        alert(FILL_ERROR)
    } else if (!search) {
        alert(SEARCH_MESSAGE)
        setSearch.value = ''
        // resetOutputs()
    } else {
        for (let index = 0; index < mainArray.length; index++) {
            for (let loop = 0; loop < mainArray[0].length; loop++) {
                if (mainArray[index][loop] == search) {
                    setSearch.value = ` ${search} found at ${index}, ${loop}`
                    return
                }
            }
        }
        setSearch.value = `${search} not found`;
    }
}

//only digits
function onlyDigits(e) {
    char = e.charCode
    return (char == 43 || char == 46 || char == 69 || char == 101) ? false : true
}
const resetOutputs = () => {
    ALL_OUPUT.forEach(input => input.value = '')
}
const resetInput = () => {
    setMatrix.innerHTML = ''
}
//reset
const reset = () => {
    RESET_INPUT.forEach(input => input.value = '')
    resetOutputs()
    resetInput()
    mainArray = []
}
