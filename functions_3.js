function maxNumber(a, b) {
    if (a > b) {
        return a;
    } else if (a === b) {
        return 'Numbers are equal.'
    } else {
        return b;
    }
}

console.log(maxNumber(5, 10));

function isOddNumber(num) {
    if (num % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isOddNumber(5));

function isThreeDigitNumber(num) {
    if (num > 99 && num < 1000) {
        return true;
    } else {
        return false;
    }
}

console.log(isThreeDigitNumber(999));

function arithmeticMean(a, b, c, d) {
    return (a + b + c + d) / 4;
}

console.log(arithmeticMean(5, 10, 15, 20));

function square(num) {
    var line = '';
    var star = '*';
    var newRow = '\n';

    for (var i = 0; i < num; i++) {
        if (i === 0 || i === num - 1) {
            for (var j = 0; j < num; j++) {
                line += star;
            }
            line += newRow;
        } else if (i !== 0 && i !== num - 1) {
            for (var j = 0; j < num; j++) {
                if (j === 0 || j === num - 1) {
                    line += star;
                } else {
                    line += ' ';
                }
            }
            line += newRow;
        }
    }

    return line;
}

console.log(square(10));

function horizontalChart(a, b, c){
    var lineOne = '';
    var lineTwo = '';
    var lineThree = '';
    var star = '*';
    var final = '';

    for (var i = 0; i < a; i++) {
        lineOne += star;
    }

    for (var i = 0; i < b; i++) {
        lineTwo += star;
    }

    for (var i = 0; i < c; i++) {
        lineThree += star;
    }
    
    final = lineOne + '\n' + lineTwo + '\n' + lineThree;
    return final;
}

console.log(horizontalChart(3,7,5));

function sumOfDigits(num) {
    var str = num + '';
    var sum = 0;

    for (var i = 0; i < str.length; i++) {
        sum += parseInt(str[i]);
    }

    return sum;
}

console.log(sumOfDigits(56243));

function numberOfAppearances(array, num) {
    var counter = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] === num) {
            counter++;
        }
    }

    return counter;
}

console.log(numberOfAppearances([2, 2, 5, 13, 27, 2], 2));

function sumOfOddElements(array) {
    var sum = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            sum += array[i];
        }
    }

    return sum;
}

console.log(sumOfOddElements([1, 2, 3, 10, 11]));

function numberOfAppearancesOfALetterA(string){
    var counter = 0;

    for (var i = 0; i < string.length; i++) {
        if (string[i].charCodeAt() === 65 || string[i].charCodeAt() === 97) {
            counter++;
        }
    }

    return counter;
}

console.log(numberOfAppearancesOfALetterA('abcAbcaA'));

function repeat(string, num){
    var finalStr = '';
    var i = 0;

    while(i < num){
        finalStr += string;
        i++;
    }

    return finalStr;
}

console.log(repeat('abc', 5));
