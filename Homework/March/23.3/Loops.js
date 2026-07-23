//Ex1:

const numbers1To10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function printNumbers() {
    for (let i = 0; i < numbers1To10.length; i++) {
        console.log(`The numbers are: ${numbers1To10[i]}`);
    }
};
printNumbers();

//Ex2:

//No Loop
const reacuringNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function deleteElement(array, target) {
    return array.filter(element => element !== target);
};
console.log(`Original array: ${reacuringNumbers}`);
console.log(`New array without 5: ${deleteElement(reacuringNumbers, 5)}`);
console.log(`New array without 6: ${deleteElement(reacuringNumbers, 6)}`);

//Loop
const reacuringNumbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function deleteElement2(array, target) {
    const result = [];
    for (let element of array) {
        if (element !== target) {
            result.push(element);
        }
    }
    return result;
};
console.log(`Original array: ${reacuringNumbers2}`);
console.log(`New array without 5: ${deleteElement2(reacuringNumbers2, 5)}`);
console.log(`New array without 6: ${deleteElement2(reacuringNumbers2, 6)}`);

//Ex3:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function countOddAndEven(array) {
    const count = { odd: 0, even: 0 };

    for (let num of array) {
        num % 2 === 0 ? count.even++ : count.odd++;
    }
    return count;
};
console.log(countOddAndEven(numbers));

//Ex4:

const duplicatedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5];

function findDuplicates(array) {
    const count = {};
    const duplicates = {};

    for (let num of array) {
        count[num] = (count[num] || 0) + 1;
        if (count[num] > 1) {
            duplicates[num] = count[num];
        }
    }
    return duplicates;
};
console.log(findDuplicates(duplicatedNumbers));

//Ex5:

//1-20
function print1To20() {
    for (let i = 1; i <= 20; i++) {
        console.log(`The numbers are: ${i}`);
    }
};
print1To20();

//Only odds from 3 - 29
function printOdds() {
    for (let i = 3; i <= 29; i += 2) {
        console.log(`The numbers are: ${i}`);
    }
};
printOdds();

//Even numbers from 1 - 20 (descending)
function printEvenDescending() {
    for (let i = 20; i >= 1; i -= 2) {
        console.log(`The numbers are: ${i}`);
    }
};
printEvenDescending();

//Numbers between 50 to 20 descending (if % 3)
function printNumbersBetween50And20() {
    for (let i = 50; i >= 20; i--) {
        if (i % 3 === 0) {
            console.log(`The numbers are: ${i}`);
        }
    }
};
printNumbersBetween50And20();

//Ex6:

const string = "LaunchCode";
const arr = [1, 5, "LC101", "blue", 42];

function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`The elements are: ${array[i]}`);
    }
};
printArray(arr);

function printCharactersReversed(string) {
    for (let i = string.length - 1; i >= 0; i--) {
        console.log(`The characters reversed are: ${string[i]}`);
    }
};
printCharactersReversed(string);

//Ex7:

const hello = "Hello";
function printHello() {
    let i = 0;
    while (i < 10) {
        console.log(hello);
        i++;
    }
};

//Ex8:

function sumUntil(array, number) {
    let sum = 0;
    let i = 0;

    while (i < array.length) {
        if (sum + array[i] > number) {
            return sum;
        }
        sum += array[i];
        i++;
    }
    return sum;
};
const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(sumUntil(array1, 15));

const array2 = [5, 10, 3, 8, 2];
console.log(sumUntil(array2, 20));

//Ex9:

function findFalseIndex(array) {
    let i = 0;

    while (i < array.length) {
        if (!array[i]) {
            return i;
        }
        i++;
    }
    return -1;
}
const arrOfBools = [true, true, false, true, true];
console.log(findFalseIndex(arrOfBools));

const arrOfBools2 = [true, false, true, true];
console.log(findFalseIndex(arrOfBools2));

const arrOfBools3 = [true, true, true];
console.log(findFalseIndex(arrOfBools3));

//Ex10:

function findHello(array) {
    let i = 0;

    while (i < array.length) {
        if (array[i] === "Hello" && i % 2 !== 0) {
            return i;
        }
        i++;
    }
    return -1;
};

const arrayOfStrings = ["Hi", "Hello", "Bye", "World"];
console.log(findHello(arrayOfStrings));

const arrayOfStrings2 = ["Hello", "Hi", "Bye", "World"];
console.log(findHello(arrayOfStrings2));

const arrayOfStrings3 = ["Hi", "Bye", "Hello", "World", "Later"];
console.log(findHello(arrayOfStrings3));