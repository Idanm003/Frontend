//Ex1:

const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

function printArr(array) {
    console.log(array);
}
function sortArr(array) {
    array.sort();
}


sortArr(daysOfTheWeek);
printArr(daysOfTheWeek);

//Ex2:

function printValueByIndex(arr, index) {
    if (index >= 0 && index < arr.length) {
        console.log(arr[index]);
    } else {
        console.log(`Sorry, no value in the array for index number: ${index}`);
    }
}
const numbers = [10, 20, 30, 40, 50];
printValueByIndex(numbers, 2);
printValueByIndex(numbers, 6);

//Ex3:

function isOdd(number) {
    return number % 2 !== 0;
}

function allOdds(arr) {
    let result = "true";
    arr.forEach(function (num) {
        if (!isOdd(num))
            result = "false";
    });
    return result;
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const onlyOdds = [1, 3, 5, 7, 9];

console.log(allOdds(nums));
console.log(allOdds(onlyOdds));


//Ex4:

function addFiveIfIndexLessThanTen(arr) {
    arr.forEach(function (value, index) {
        if (index < 10) {
            arr[index] += 5;
        }
    });
    console.log(arr);
}
const arrayOfNumbers = [6, 7, 8, 9, 10];
addFiveIfIndexLessThanTen(arrayOfNumbers);

//Ex5:

function isInArray(arr, number) {
    return arr.includes(number) ? "Found" : "Not found";
}

/*
Another way:

function checkNumbers(arr, number) {
    let found = false;
    arr.forEach(function (value) {
        if (value === number) {
            found = true;
        }
    });
    return found ? "found" : "not found";
}
*/

const arrayOfFindingNumbers = [1, 2, 3, 4, 5];
console.log(isInArray(arrayOfFindingNumbers, 3));
console.log(isInArray(arrayOfFindingNumbers, 13));

//Ex6:

function checkFirstAndLast(arr, num1, num2) {
    return arr[0] === num1 && arr[arr.length - 1] === num2;
}
const arrayOfFirstAndLast = [1, 2, 3, 4, 5, 6];
console.log(checkFirstAndLast(arrayOfFirstAndLast, 1, 6));
console.log(checkFirstAndLast(arrayOfFirstAndLast, 1, 5));

//Ex7:

function checkValueOfElements(arr) {
    let smallerThan50 = true,
        between51And100 = true,
        between101And200 = true,
        biggerThen200 = true;

    arr.forEach(function (number) {
        if (number >= 50)
            smallerThan50 = false;
        if (number < 51 || number > 100)
            between51And100 = false;
        if (number < 101 || number > 200)
            between101And200 = false;
        if (number < 201)
            biggerThen200 = false;
    });

    switch (true) {
        case smallerThan50:
            return "All numbers are smaller than 50";
        case between51And100:
            return "All numbers are between 51 and 100";
        case between101And200:
            return "All numbers are between 101 and 200";
        case biggerThen200:
            return "All numbers are bigger than 200";
        default:
            return "No condition is happening";
    }
}

const arrLessThan50 = [10, 20, 30, 40,];
const arrBetween51And100 = [51, 61, 71, 81, 91];
const arrBetween101And200 = [101, 111, 121, 131, 141];
const arrBiggerThan200 = [201, 211, 221, 231, 241];
const none = [10, 60, 150];

console.log(checkValueOfElements(arrLessThan50));
console.log(checkValueOfElements(arrBetween51And100));
console.log(checkValueOfElements(arrBetween101And200));
console.log(checkValueOfElements(arrBiggerThan200));
console.log(checkValueOfElements(none));