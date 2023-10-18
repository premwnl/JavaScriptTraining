import colors from 'colors';


console.log(` o `.bgWhite);
function printDiamondStarPattern(n) {
    if (n % 2 === 0) {
        n++; //
    }

    for (let i = 1; i <= n; i++) {
        let row = '';

        for (let j = 1; j <= n - i; j++) {
            row += ' ';
        }

        for (let k = 1; k <= i; k++) {
            row += k;
        }

        for (let l = i - 1; l >= 1; l--) {
            row += l;
        }

        console.log(row);
    }

    for (let i = n - 1; i >= 1; i--) {
        let row = '';

        for (let j = 1; j <= n - i; j++) {
            row += ' ';
        }

        for (let k = 1; k <= i; k++) {
            row += k;
        }

        for (let l = i - 1; l >= 1; l--) {
            row += l;
        }

        console.log(row);
    }
}

printDiamondStarPattern(5);




// for (let index = 0; index < rowColumn * rowColumn; index++) {
//     if (index % rowColumn == 0) {
//         setRowColumn.appendChild(document.createElement("br"));
//         // mainArray.push([])
//     }
//     const input = document.createElement("input");
//     input.type = "number";
//     input.value = "";
//     input.classList.add('inputs')
//     // input.classList.add(`input_${index}`)
//     // mainArray[mainArray.length - 1].push(`input_${index}`)
//     setRowColumn.appendChild(input);
// }

// for (let i = 0; i < rowColumn; i++) {
//         mainArray[i] = [];
//         for (let j = 0; j < rowColumn; j++) {
//             mainArray[i][j] = ;
//         }
//     }
// setRowColumn.childNodes.forEach((node) => {
//     node.addEventListener('change', (event) => {
//         node.value = event.target.value

//         for (let index = 0; index < mainArray.length; index++) {
//             let innerArray = mainArray[index]

//             for (let loop = 0; loop < innerArray.length; loop++) {

//                 if (innerArray[loop] == node.classList[1]) {
//                     mainArray[index][loop] = node.value
//                 }
//             }
//         }

//         console.log(node.classList[1], mainArray);

//     })
// })




// const computerPlay = () => {// computer play
//     let drop = false
//     let previousCard = openCardElement.id;
//     let card = previousCard.split('_');
//     for (const index in cpuCards) {
//         if (cpuCards[index].color == card[0] && (cpuCards[index].value == 'skip' || cpuCards[index].value == 'reverse' || cpuCards[index].value == 'drawTwo')) {
//             let item = cpuCards.splice(index, 1)
//             setOpenCard(...item)
//             updateCards(cpuCards, cpuCardElement, 0)
//             drop = true
//             break
//         } else if (cpuCards[index].color == card[0]) {
//             console.log('color');
//             let item = cpuCards.splice(index, 1)
//             setOpenCard(...item)
//             updateCards(cpuCards, cpuCardElement, 0)
//             drop = true
//             break
//         } else if (cpuCards[index].value == card[1]) {
//             console.log('value');
//             let item = cpuCards.splice(index, 1)
//             setOpenCard(...item)
//             updateCards(cpuCards, cpuCardElement, 0)
//             drop = true
//             break
//         } else if (cpuCards[index].value == 'wild') {
//             let item = cpuCards.splice(index, 1)
//             setOpenCard(...item)
//             updateCards(cpuCards, cpuCardElement, 0)
//             drop = true
//             break
//         }
//         console.log(cpuCards);
//         if (index == cpuCards.length - 1) {
//             if (!drop) {
//                 drawDeckCard(cpuCards, cpuCardElement, 0);
//             }
//         }
//         drop = false
//     }
// }
