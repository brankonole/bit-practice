"use strict";

function addition(a, b) {
    var sum;

    sum = a + b;

    return sum;
}

console.log(addition(2, 3));

function isString(input) {
    if (typeof input == 'string') {
        return true;
    } else {
        return false;
    }
}

console.log(isString('abc'));
console.log(isString(55));

function isBlanc(input) {
    if (input === ' ') {
        return true;
    } else {
        return false;
    }
}

console.log(isBlanc(' '));
console.log(isBlanc('My random text'));

function repeat(a, b) {
    var i = 0;
    var line = "";
    while (i < a) {
        i++;
        line = line + b;
    }

    return line;
}

console.log(repeat(10, "Ha"));

function countOcurances(str, letter) {
    var counter = 0;

    for (var i = 0; i < letter.length; i++) {
        if (letter[i] === str) {
            counter++;
        }
    }

    return counter;
}

console.log(countOcurances('n', 'My random string'));

function positionOfFirst(character, inputString) {
    var i = 0;

    while (i < inputString.length) {
        if (character === inputString[i]) {
            return i + 1;
            break;
        }
        i++;
    }

    return -1;
}

console.log(positionOfFirst("a", "My random string"));

function positionOfLast(character, inputString) {
    var i = inputString.length - 1;
    while (i >= 0) {
        if (character === inputString[i]) {
            return i + 1;
        }
        i--;
    }

    return -1;
}

console.log(positionOfLast("a", "My random string"));

function stingToArray(inputString) {
    var outputArray = [];

    if (typeof inputString == "string") {
        for (var i = 0; i < inputString.length; i++) {
            if (inputString[i] === ' ') {
                outputArray[i] = null;
            } else {
                outputArray[i] = inputString[i];
            }
        }
    }

    return outputArray;
}

console.log(stingToArray("My random string"));

function firstPostition(str, n) {
    if (str.indexOf(n) !== -1) {
        return str.indexOf(n)+1;
    }
    
    return -1;
}

console.log(firstPostition('aijjtnrgnr dssb asfiuabf', 'j'));

function isPrimeNumber(num) {
    var prime = true;
    
    if (num === 1) {
        prime = false;
        return prime;
    } else if (num === 2) {
        return prime;
    } else {
        for (var n = Math.floor(num / 2); n > 1; n--) {
            if (num % n === 0) {
                prime = false;
            }
        }

        return prime;
    }
}

console.log(isPrimeNumber(11));

function replaceSpace (str, sep) {
    var newStr = '';

    for (var i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            newStr += sep;
        } else {
            newStr += str[i];
        }
    }

    return newStr;
}

console.log(replaceSpace("My random string", "_"));

function stringChop(input, size) {
    var output = '';

    for (var i = 0; i < input.length; i++) {
        output += input[i];
        if (i === (size - 1)) {
            output += '...'
            break;
        }
    }

    return output;
}

console.log(stringChop("This is long string", 7));

function filterNonNumbers(inputArr) {
    var outputArr = [];

    for (var i = 0, j = 0; i < inputArr.length; i++) {

        if (typeof +inputArr[i] === 'number'){
            if (!isNaN(+inputArr[i]) && isFinite(+inputArr[i])) {
                outputArr[j] = +inputArr[i];
                j++
            }
        }  
    }

    return outputArr;
}

console.log(filterNonNumbers(["1", "21", undefined, "42", "1e+3", Infinity]));

function calculateAge(yearOfBirth, gender){
    var age = 2018 - yearOfBirth;

    if (gender === 'm' && age <= 65) {
        return  65 - age;
    } else if (gender === 'f' && age <= 60) {
        return 60 - age;
    } else {
        return 'Person is already in retirement';
    }
}

console.log(calculateAge(1989, 'm'));

function humanizeNumber(num) {
    if (num % 100 === 11 || num % 100 === 12 || num % 100 === 13){
        return num + 'th';
    } else if (num % 10 === 1){
        return num + 'st';
    } else if (num % 10 === 2) {
        return num + 'nd';
    } else if (num % 10 === 3) {
        return num + 'rd';
    } else {
        return num + 'th';
    }
}

console.log(humanizeNumber(1));
console.log(humanizeNumber(10));
console.log(humanizeNumber(12));
console.log(humanizeNumber(23));