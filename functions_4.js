function countVowels(string) {
    var counter = 0;

    for (var i = 0; i < string.length; i++) {
        if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u'
            || string[i] === 'A' || string[i] === 'E' || string[i] === 'I' || string[i] === 'O' || string[i] === 'U') {
            counter++;
        }
    }

    return counter;
}

// console.log(countVowels('Paramaribo'));

function mergingAlternatingly(arr1, arr2) {
    var outputArr = [];

    for (var i = 0, j = 0; i < arr1.length; i++) {
        outputArr[j] = arr1[i];
        outputArr[j + 1] = arr2[i];
        j += 2;
    }

    return outputArr;
}

// console.log(mergingAlternatingly(['a', 'b', 'c'], [1, 2, 3]));

function rotateList(array, num) {
    var arr1 = [];
    var arr2 = [];
    outputArr = [];

    for (var i = 0, j = 0; i < array.length; i++) {
        if (i < num) {
            arr1[i] = array[i];
        } else {
            arr2[j] = array[i];
            j++;
        }
    }

    for (var i = 0, j = 0; i < array.length; i++) {
        if (i < arr2.length) {
            outputArr[i] = arr2[i];
        } else {
            outputArr[i] = arr1[j];
            j++;
        }
    }

    return outputArr;
}

// console.log(rotateList([1,2,3,4,5,6], 2));

function numberToArrayOfDigits(num) {
    var toString = num + '';
    var outputArr = [];

    for (var i = 0; i < toString.length; i++) {
        outputArr[i] = toString[i];
    }

    return outputArr;
}

// console.log(numberToArrayOfDigits(94351385));

function multiplicationTable(num) {
    var line = '';

    for (var i = 0; i <= num; i++) {
        if (i === 0) {
            for (var j = 0; j <= num; j++) {
                line += j + ' ';
            }
            line += '\n';
        } else {
            for (var j = 0; j <= num; j++) {
                if (j === 0) {
                    line += i + ' ';
                } else {
                    line += j * i + ' ';
                }
            }
            line += '\n';
        }
    }

    return line;
}

// console.log(multiplicationTable(12));

function centigradeToFahrenheit(num) {
    var fahrenheit = num * 9 / 5 + 32;

    return fahrenheit;
}

// console.log(centigradeToFahrenheit(0));

function maxElement(array) {
    var newArr = [];
    var max = -Infinity;

    for (var i = 0, j = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !isNaN(array[i]) && isFinite(array[i])) {
            newArr[j] = array[i];
            j++;
        }
    }

    for (var i = 0; i < newArr.length; i++) {
        if (newArr[i] > max) {
            max = newArr[i];
        }
    }

    return max;
}

// console.log(maxElement([-555, 5, 13, 102, '55', 24, undefined, NaN, Infinity, null]));

function maxAndMinElements(arr) {
    var max = arr[0];
    var min = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return [max, min];
}

// console.log(maxAndMinElements([-3, 45, 6, 99, -49, 1785]));

function medianElement(arr) {
    var median;
    var sortArr = arr.sort();

    if (sortArr.length % 2 !== 0) {
        median = sortArr[(sortArr.length + 1) / 2];
    } else {
        var firstNum = sortArr[sortArr.length / 2];
        var secondNum = sortArr[sortArr.length / 2 + 1];

        median = (firstNum + secondNum) / 2;
    }

    return median;
}

// console.log(medianElement([10, 3, 8, 9, 1]));
// console.log(medianElement([10, 3, 5, 8, 9, 1]));

function mostFrequentlyElement(array) {
    var counter = 0;
    var max = 0;
    var index;

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[j] === array[i]) {
                counter++;
            }
        }
        if (counter > max) {
            max = counter;
            index = i;
        }
        counter = 0;
    }

    return array[index]
}

// console.log(mostFrequentlyElement([2, 4, 55, 6, 6, 9, 2, 5, 2]));

function printFirstMiddleAndLast(arr) {
    var firstNum, middleNum, lastNum;

    if (arr.length === 0) {
        return arr;
    } else if (arr.length % 2 === 0) {
        firstNum = arr[0];
        lastNum = arr[arr.length - 1];

        return [firstNum, lastNum];
    } else {
        firstNum = arr[0];
        middleNum = arr[(arr.length - 1) / 2]
        lastNum = arr[arr.length - 1];

        return [firstNum, middleNum, lastNum];
    }
}

// console.log(printFirstMiddleAndLast([33, 45, 20, -5, 6, 106]));
// console.log(printFirstMiddleAndLast([33, 45, 20, -5, 6, 106, 22]));
// console.log(printFirstMiddleAndLast([]));

function findAverage() {
    var sum = 0;
    var average;

    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    average = sum / (arguments.length)
    return average;
}

// console.log(findAverage(33, 45, 20, -5, 6, 106, 22));

function numbersGreaterThanTheAverage() {
    var sum = 0;
    var average;
    var outputArr = [];

    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    average = sum / (arguments.length);

    for (var i = 0, j = 0; i < arguments.length; i++) {
        if (arguments[i] > average) {
            outputArr[j] = arguments[i];
            j++;
        }
    }

    return outputArr;
}

// console.log(numbersGreaterThanTheAverage(33, 45, 20, -5, 6, 106, 22));

function bodyMassIndex(weight, height) {
    var bmi = weight / ((height / 100) * (height / 100));

    if (bmi < 15) {
        return 'Starvation';
    } else if (bmi < 17.5) {
        return 'Anorexic';
    } else if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        return 'Ideal';
    } else if (bmi >= 25 && bmi < 30) {
        return 'Overweight';
    } else if (bmi >= 30 && bmi < 40) {
        return 'Obese';
    } else if (bmi >= 40) {
        return 'Morbidly obese';
    }
}

// console.log(bodyMassIndex(84, 178));

function rectangularFrameWithText(array) {
    var line = '';
    var star = '*';
    var counter = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i].length > counter) {
            counter = array[i].length
        }
    }    

    for (var i = 0; i < array.length + 2; i++) {
        if (i === 0 || i === array.length + 1) {
            for (var j = 0; j < counter + 2; j++) {
                line += star;
            }
            line += '\n';
        } else {
            for (var j = 0; j < counter + 2; j++) {
                if (j === 0 || j === counter + 1) {
                    line += star;
                } else if (j >= 1 && j < array[i-1].length+1) {
                    line += array[i-1][j-1];
                } else {
                    line += " ";
                }
            }
            line += '\n';
        }
    }

    return line;
}

console.log(rectangularFrameWithText(["Hellooooo", "World", "in", "a", "frame"]));