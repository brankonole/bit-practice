'use strict'

function doesElementExist(array, element) {
    var isMatch = 'no';

    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
            isMatch = 'yes';
        }
    }

    return isMatch;
}

console.log(doesElementExist([5, -4.2, 3, 7], 3));

function doublePositiveArrayValues(inputArr) {
    var outputArr = [];

    for (var i = 0; i < inputArr.length; i++) {
        if (inputArr[i] > 0) {
            outputArr[i] = inputArr[i] * 2;
        } else {
            outputArr[i] = inputArr[i];
        }
    }

    return outputArr;
}

console.log(doublePositiveArrayValues([-3, 11, 5, 3.4, -8]));

function findMinimum(array) {
    var min = array[0];
    var position = 0;

    for (var i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            position = i;
        }
    }

    return [min, position];
}

console.log(findMinimum([4, 2, 2, -1, 6]));

function findSecondMax(inputArr) {
    var max = -Infinity;
    var secondMax = -Infinity;

    for (var i = 0; i < inputArr.length; i++) {
        if (inputArr[i] > max) {
            max = inputArr[i];
        } else if (inputArr[i] > secondMax) {
            secondMax = inputArr[i];
        }
    }

    return [max, secondMax];
}

console.log(findSecondMax([-44, 200, 2, -1, 6, 15, 30, -3]));

function sumPositiveNumbers(array) {
    var sum = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i];
        }
    }

    return sum;
}

console.log(sumPositiveNumbers( [3, 11, -5, -3, 2, -15, 16]));

function isArraySymmetric(array) {
    var arr1 = [];
    var arr2 = [];

    for (var i = 0; i < array.length / 2; i++) {
        var element = array[i];
        var elementPair = array[array.length - i - 1];

        if (element !== elementPair) {
            return false;
        }
    }

    return true;
}

console.log(isArraySymmetric([2, 4, -2, 7, -2, 4, 2]) ? "The array is symmetric." : "The array isn't symmetric.");

function twistArrays(firstArr, secondArr){
    var outputArr = [];

    for (var i = 0, j = 0; i < firstArr.length; i++, j+=2) {
        outputArr[j] = firstArr[i];
        outputArr[j+1] = secondArr[i];
    }

    return outputArr;
}

console.log(twistArrays([4, 5, 6, 2, 6], [3, 8, 11, 9, 3]));

function concatArrays(firstArr, secondArr) {
    var outputArr = [];
    var firstArrLength = firstArr.length;

    for (var i = 0; i < firstArr.length; i++) {
        outputArr[i] = firstArr[i];      
    }

    for (var j = 0; j < secondArr.length; j++) {
        outputArr[firstArrLength + j] = secondArr[j];
    }

    return outputArr;
}

console.log(concatArrays([4, 5, 6, 2], [3, 8, 11, 9]));

function deleteElement(array, elementToDelete){
    var outputArr = [];

    for (var i = 0, j = 0; i < array.length; i++) {
        if (array[i] !== elementToDelete) {
            outputArr[j] = array[i];
            j++;
        }
    }

    return outputArr;
}

console.log(deleteElement([4, 6, 2, 8, 2, 2], 2));

function insertElement(array, element, position){
    var outputArr = [];

    if (position > array.length - 1 || position < 0) {
        return 'Index out of bounds.';
    }

    for (var i = 0, j = 0; i <= array.length; i++, j++) {
        if (i < position) {
            outputArr[j] = array[i];
        } else if (i === position) {
            outputArr[j] = element;
        } else {
            outputArr[j] = array[i-1];
        }
    }

    return outputArr;
}

console.log(insertElement([2, -2, 33, 12, 5, 8], 78, 3));
