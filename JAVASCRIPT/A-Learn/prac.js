import colors from "colors";

// longest non repeated string in a string

// function a(str) {
//     let sliced = ''
//     let tempStr = ''
//     let array = []
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i + 1; j < str.length; j++) {
//             if ((str[i] == str[j]) || tempStr.includes(str[j])) {
//                 sliced = str.slice(i, j)
//                 array.push(sliced)
//                 tempStr = ''
//                 break
//             } else {
//                 if (!tempStr.includes(str[j])) {
//                     tempStr += str[j]
//                 }
//             }
//             array.push(str[i] + tempStr)
//         }
//         tempStr = ""
//     }
//     return array.sort((a, b) => a.length - b.length).pop() || 'not a valid input'
// }

// console.log(a('abcadea'));


//  Write a JavaScript function to find a word within a string

// function findWord(str, substr) {
//     str = str.toLowerCase().split(' ').join('')
//     substr = substr.toLowerCase().split(' ').join('')
//     let arr = []

//     let substrLength = substr.length
//     for (let i = 0; i <= str.length - substrLength; i++) {
//         if (substr[0] == str[i]) arr.push(str.slice(i, i + substrLength))

//     }

//     while (arr.length) {
//         if (arr.pop() === substr) return true
//     }
//     return false
// }

// console.log(`${findWord("ABCDsh", 'd sH')}`);


// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case
// function convertCases(str) {
//     let newStr = ''
//     for (let i = 0; i < str.length; i++) {
//         newStr += str.charCodeAt(i) > 90 ? str[i].toUpperCase() : str[i].toLowerCase()

//     }
//     return newStr
// }
// console.log(convertCases('AbCd'));

//Write a JavaScript function to calculate the percentage (%) of a number 

// function findPercentage(num, per) {
//     return (num / 100 * per)
// }

// console.log(findPercentage(100, 50));


// Write Javascript program to print armstrong number between(1 - 1000) in Javascript ?
// function isArmstrong(num) {
//     let numStr = num.toString();
//     let numLength = numStr.length;
//     let sum = 0;

//     for (let i = 0; i < numLength; i++) {

//         let num = parseInt(numStr[i]);
//         sum += Math.pow(num, numLength);
//     }

//     return sum === num;
// }

// function armstrongNumber(start, end) {
//     let arr = [];

//     for (let i = start; i <= end; i++) {
//         if (isArmstrong(i)) {
//             arr.push(i);
//         }
//     }

//     return arr;
// }
// console.log(armstrongNumber(1, 1000));


// Write a program in Javascript to print Fibonacci series up to given number ? Write both iterative and recursive version

// function fibonaci(n) {
//     let n1 = 0
//     let n2 = 1
//     if (n === 0) return []
//     else if (n === 1) return [0]
//     else {
//         let arr = [n1, n2]
//         for (let i = 2; i < n; i++) {
//             [n1, n2] = [n2, n1 + n2]
//             arr.push(n2)
//         }
//         return arr
//     }
// }
// console.log('without rec', fibonaci(10));

//recursion
// function fiboRec(n) {
//     const arr = [];
//     for (let i = 0; i < n; i++) {
//         arr.push(recursion(i));
//     }
//     return arr;
// }
// function recursion(n) {
//     return (n <= 1) ? n : recursion(n - 1) + recursion(n - 2)
// }

// console.log('rec', fiboRec(10));



// let n = 5

// for (let i = 0; i < 2 * n; i++) {

//     let result = ''
//     let columns = i > n ? 2 * n - i : i

//     let spaces = n - columns

//     for (let j = 0; j < spaces; j++) {
//         result += " "
//     }
//     for (let k = 0; k < columns; k++) {
//         result += "^ "
//     }
//     console.log(result);
// }


// triangular pattern 

// function tria(arr) {
//     if (arr.length < 1) return arr
//     else if (arr.length == 1) return [1, 1]
//     else {
//         let ar = []
//         for (let i = 0; i < arr.length - 1; i++) {
//             ar.push(parseInt(arr[i]) + parseInt(arr[i + 1]))
//         }
//         ar.unshift(arr[0])
//         ar.push(arr[arr.length - 1])
//         return ar
//     }
// }
// function triangularNumbers(n) {
//     let arr = [1]
//     let gap = ''
//     for (let i = 0; i < n; i++) {
//         gap += " "
//     }
//     let res = `${gap}${1}\n`

//     while (arr.length <= n) {
//         let space = n - arr.length
//         let gaps = ''
//         for (let i = 0; i < space; i++) {
//             gaps += ' '
//         }
//         arr = tria(arr)
//         res += `${gaps}${arr}\n`

//     }
//     return res
// }

// console.log(triangularNumbers(5))

// function tria(arr) {
//     if (arr.length < 1) return arr
//     else if (arr.length == 1) return [1, 1]
//     else {
//         let ar = []
//         for (let i = 0; i < arr.length - 1; i++) {
//             ar.push(parseInt(arr[i]) + parseInt(arr[i + 1]))
//         }
//         ar.unshift(arr[0])
//         ar.push(arr[arr.length - 1])
//         return ar
//     }
// }
// function triangularNumbers(n) {
//     let arr = [1]
//     let gap = ''
//     for (let i = 0; i < n; i++) {
//         gap += " "
//     }
//     let res = `${gap}${1}\n`

//     for (let i = 0; i < n; i++) {
//         let space = n - arr.length
//         let gaps = ''
//         for (let i = 0; i < space; i++) {
//             gaps += ' '
//         }
//         arr = tria(arr)
//         res += `${gaps}${arr}\n`

//     }
//     return res
// }

// console.log(triangularNumbers(5))


// Write code that enhances all arrays such that you can call the snail(rowsCount, colsCount) method that transforms the 1D array into a 2D array organised in the pattern known as snail traversal order.
//     nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
// rowsCount = 5
// colsCount = 4
// Output:
// [
//     [19, 17, 16, 15],
//     [10, 1, 14, 4],
//     [3, 2, 12, 20],
//     [7, 5, 18, 11],
//     [9, 8, 6, 13]
// ]

// function snailTraversal(row, col, array) {
//     let snailArray = []
//     if (array.length != row * col) return false
//     else {
//         for (let index = 0; index < row; index++) {
//             snailArray.push([]) 
//         }
//         for (let index = 0; index < array.length; index++) {

//             let loop = (index % (row * 2)) > (row - 1) ? Math.abs(((row * 2) - 1) - index % (row * 2)) : index % (row * 2)
//             //0,1,2,3,4,4,
//             snailArray[loop].push(array[index])
//         }
//         return snailArray
//     }
// }

// let nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
// // let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// let rowsCount = 4
// let colsCount = 5

// console.log(snailTraversal(rowsCount, colsCount, nums));


// array = [90, 8, 0, 9, 0, 9, 0, 7, 99]
// Move all the zeroes to the last index of the array.Do this without any inbuilt methods

// function moveZeroes(array) {
// let zeroes = 0
// for (let index = 0; index < array.length - zeroes; index++) {
//     if (array[index] == 0) {
//         [array[index], array[index + 1]] = [array[index + 1], array[index]]
//         zeroes++
//     }
//     console.log(zeroes);
// }
// let zeroes = 0
// let swap = true
// while (swap) {
//     swap = false
//     for (let index = 0; index < array.length; index++) {
//         if (array[index] == 0) {
//             [array[index], array[index + 1]] = [array[index + 1], array[index]]
//             zeroes++
//         }
//         console.log(zeroes);
//     }

// }
//     let notZero = 0
//     for (let index = 0; index < array.length; index++) {
//         if (array[index] != 0) {
//             array[notZero] = array[index]
//             notZero++
//         }
//     }
//     for (let index = notZero; index < array.length; index++) {
//         array[index] = 0
//     }

//     return array
// }
// let array = [90, 8, 0, 9, 0, 9, 0, 7, 99]

// console.log(moveZeroes(array));


// function find(array) {
//     for (let i = 0; i < array.length - 1; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (array[i] == array[j]) continue
//             else if ((array[i] + array[j]) >= 40 && (array[i] + array[j]) <= 45) {
//                 console.log(i, j);
//             }
//         }
//     }
// }
// let array1 = [90, 8, 0, 9, 0, 9, 0, 7, 30, 12, 99]

// find(array1)

// const s1 = [[4, 2], [2, 4], [1, 2]];
// const s2 = [[6, 2], [4, 2], [1, 1], [1, 1]];

// // let c = 0;

// // for (let i = 0; i < s1.length; i++) {
// //     for (let j = 0; j < s2.length; j++) {
// //         if (s1[i][0] * s1[i][1] === s2[j][0] * s2[j][1]) {
// //             c++;
// //         }
// //     }
// // }

// let c = s1.reduce((a, v) => {
//     let s = s2.reduce((a1, v1) => {
//         if (v[0] * v[1] == v1[0] * v1[1]) {
//             a1++;
//         }
//         return a1
//     }, 0)
//     return a + s
// }, 0)

// console.log(c);


//array chucking

// function chunk(arr, val) {
//     let array = []
//     for (let i = 0; i < arr.length; i += val) {
//         array.push(arr.slice(i, i + val))
//     }
//     return array
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let val = 2

// console.log(chunk(arr, val));


//longest  country 

// function longest(array) {
//     longest = ''
//     for (let i = 0; i < array.length; i++) {
//         if (longest.length < array[i].length) longest = array[i]
//     }
//     return longest
// }

// let arr = ['Germany', 'Australia', 'United State of America', "United Kingdom"]
// console.log(longest(arr));



//find top notes

// function topNotes(array) {
//     let max = 0
//     let result = []

//     for (let i = 0; i < array.length; i++) {

//         let arr = [(array[i].notes)].flat()

//         for (let j = 0; j < arr.length; j++) {
//             max = arr[j] > max ? arr[j] : max
//         }
//         result.push(max)
//         max = 0
//     }
//     return result
// }

// let arr = [
//     { id: 1, name: 'Jack', notes: [5, 3, 4, 2, 5, 5, 6] },
//     { id: 2, name: 'Noah', notes: [2, 3, 3, 2, 5] },
//     { id: 3, name: 'Tara', notes: [2, 2, 7, 3, 4, 4] },
//     { id: 4, name: 'Rose' },
//     { id: 4, name: 'Adhi', notes: [2, 2, 3, 3, 4, 11] },
// ]

// console.log(topNotes(arr));


//flames

// function calculate(name1, name2) {
//     const n1 = name1.toLowerCase().replaceAll(' ', '');
//     const n2 = name2.toLowerCase().replaceAll(' ', '');

//     let n1Array = n1.split('')
//     let n2Array = n2.split('')

//     for (let i = 0; i < n1Array.length; i++) {
//         for (let j = 0; j < n2Array.length; j++) {
//             if (n1Array[i] == n2Array[j]) {
//                 n1Array.splice(i, 1)
//                 n2Array.splice(j, 1)
//                 i--
//                 j--
//             }
//         }
//     }
//     let length = n1Array.concat(n2Array).length;

//     let size = 6
//     let FLAMES = ["FRIEND", "LOVE", "AFFECTION", "MARRIGE", "ENEMY", "SISTER"]

//     while (size > 1) {
//         if (length % size == 0) {
//             FLAMES.splice((length % size - 1), 1)
//         } else {
//             FLAMES = FLAMES.slice((length % size), FLAMES.length).concat(FLAMES.slice(0, (length % size - 1)))
//         }
//         size--
//     }


//     return FLAMES
// }


// let n1 = 'Premkumar'
// let n2 = 'someone'


// console.log(calculate(n1, n2));


//min and max

// function calculate(array) {
//     let min = Infinity
//     let max = -Infinity
//     for (let i = 0; i < array.length; i++) {
//         min = array[i] < min ? array[i] : min
//         max = array[i] > max ? array[i] : max

//     }
//     return `Min:${min}  Max:${max}`
// }



// let arr = [7, 5, 2, 6, 3, 4, 1]

// console.log(calculate(arr));


//add even nums 2d array

// function calculate(array) {

//     let flatten = array.flat()

//     let sum = flatten.reduce((acc, val) => {
//         acc = val % 2 == 0 ? acc + val : acc;
//         return acc
//     }, 0)
//     return sum
// }

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]

// console.log(calculate(arr));


// let username = 'prem kumar london'
// let arr = username.split(' ')
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].split('').reverse().join('')
// }
// arr = arr.join(' ')
// console.log(arr);


// const s1 = [[4, 2], [2, 4], [1, 2]];
// const s2 = [[6, 2], [4, 2], [1, 1], [1, 1]];

// let c = 0;

// for (let i = 0; i < Math.min(s1.length, s2.length); i++) {
//     if (s1[i][0] * s1[i][1] === s2[i][0] * s2[i][1]) {
//         c++;
//     }
// }

// console.log(c);

const row = 4
const column = 5

//creating an empty array
for (let index = 0; index < row; index++) {
    mainArray[index] = []
    for (let loop = 0; loop < column; loop++) {
        mainArray[index][loop] = 0
    }
}

//creating input in table
// let matrixHTML = "";
for (let index = 0; index < row; index++) {
    // matrixHTML += "<tr>";
    let tr = document.createElement('tr')
    for (let innerIndex = 0; innerIndex < column; innerIndex++) {
        // matrixHTML += `<td><input type="number" id="input${index}_${innerIndex}"></td>`;
        let td = document.createElement('td')
        let input = document.createElement('input')
        input.type = 'number'
        input.id = `input${index}_${innerIndex}`
        td.appendChild(input)
        tr.appendChild(td)
    }
    // matrixHTML += "</tr>";
    setMatrix.appendChild(tr);
}

