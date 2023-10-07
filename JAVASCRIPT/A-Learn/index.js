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