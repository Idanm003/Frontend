//Ex1:

const printNumbers12To24 = () => {
    for (let i = 12; i <= 24; i++) {
        console.log(i);
    }
};

printNumbers12To24();

//Ex2:

const printOddNumbers7To31 = () => {
    for (let i = 7; i <= 31; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

printOddNumbers7To31();

//Ex3:

const printEven10ToNeg20 = () => {
    for (let i = 10; i >= -20; i--) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

printEven10ToNeg20();

//Ex4:

const isFizzOrBuzz = () => {
    for (let i = 1; i <= 45; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

isFizzOrBuzz();

//Ex5:

const calculateSum = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
const numbersArrayToCalc = [1, 13, 22, 123, 49, 34, 5, 24, 57, 45];

console.log(calculateSum(numbersArrayToCalc));

//Ex6:

const students = [
    {
        id: 1,
        firstName: "David",
        lastName: "Cohen",
        age: 20,
        country: "Israel",
        city: "Jerusalem"
    },
    {
        id: 2,
        firstName: "Tom",
        lastName: "Brady",
        age: 45,
        country: "USA",
        city: "New York"
    },
    {
        id: 3,
        firstName: "Idan",
        lastName: "Magen",
        age: 27,
        country: "Israel",
        city: "Tel Aviv"
    }
]

function deletePropertyIfExists(array, property) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].hasOwnProperty(property)) {
            delete array[i][property];
        }
    }
    return array;
}
console.log(deletePropertyIfExists(students, "city"));

function printProperty(array) {
    for (let i = 0; i < array.length; i++) {
        const keys = Object.keys(array[i]);
        for (let j = 0; j < keys.length; j++) {
            console.log(keys[j] + ": " + array[i][keys[j]]);
        }
    }
    return array;
}

printProperty(students);

//Ex7:

const ourPets = [
    {
        animalType: "cat",
        names: [
            "Meowzer",
            "Fluffy",
            "Kit-Cat"
        ]
    },
    {
        animalType: "dog",
        names: [
            "Spot",
            "Bowser",
            "Frankie"
        ]
    }
];

function printCatProperties(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].animalType !== "cat") {
            continue;
        }
        const keys = Object.keys(array[i]);
        for (let j = 0; j < keys.length; j++) {
            console.log(keys[j] + ": " + array[i][keys[j]]);
        }
    }
}

function printDogNames(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].animalType !== "dog") {
            continue;
        }
        for (let j = 0; j < array[i].names.length; j++) {
            console.log(array[i].names[j]);
        }
    }
}

printCatProperties(ourPets);
printDogNames(ourPets);

//Ex8:

const student = {
    name: "John",
    age: 20,
    hobbies: ["reading", "games", "coding"]
};

function printStudentData(student) {
    const keys = Object.keys(student);
    for (let i = 0; i < keys.length; i++) {
        console.log(keys[i] + ": " + student[keys[i]]);
    }
    return student;
}

printStudentData(student);

function addNewHobby(student, newHobby) {
    student.hobbies.push(newHobby);
    return student;
}

addNewHobby(student, "diving");
printStudentData(student);

function removeHobby(student, hobbyToRemove) {
    for (let i = 0; i < student.hobbies.length; i++) {
        if (student.hobbies[i] === hobbyToRemove) {
            student.hobbies.splice(i, 1);
        }
    }
}

removeHobby(student, "games");
printStudentData(student);

function addProperty(student, newProperty, newValue) {
    student[newProperty] = newValue;
    return student;
}

addProperty(student, "familyName", "Doe");
printStudentData(student);

//Ex9:

const arr = [[1, 2], [3, 4], [5, 6]];

function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            console.log(array[i][j]);
        }
    }
}

printArray(arr);

//Ex10:

function howManyZeros(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++)
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === 0) {
                count++;
            }
        }
    console.log(`There are ${count} zeros in the array.`);
    return count;
}
const arrayOfNumbers = [[0, 1, 1], [0, 1, 0], [1, 0, 0]];

howManyZeros(arrayOfNumbers);

//Ex11:

function findDuplicates(array) {
    const duplicates = [];
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) !== i && !duplicates.indexOf(array[i])) {
            duplicates.push(array[i]);
        }
    }
    console.log(duplicates);
    return duplicates;
}
const arrayOfDuplicates = [4, 2, 34, 4, 1, 12, 1, 4];

findDuplicates(arrayOfDuplicates);

//Ex12:

const arrayOfStuff = [43, "what", 9, true, "cannot", false, "be", 3, true];

function reverseArray(array) {
    const reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    console.log(reversedArray);
    return reversedArray;
}

reverseArray(arrayOfStuff);

//Ex13:

function addArrays(array1, array2) {
    const result = [];
    for (let i = 0; i < array1.length; i++) {
        result.push(array1[i] + array2[i]);
    }
    console.log(result);
    return result;
}
const arrayNum1 = [4, 6, 7];
const arrayNum2 = [8, 1, 9];

addArrays(arrayNum1, arrayNum2);

//Ex14:

function isPalindrome(string) {
    string = string.toLowerCase();
    let leftString = string.length - 1;
    for (let rightString = 0; rightString < string.length / 2; i++) {
        if (string[rightString] != string[leftString]) {
            return false;
        }
        leftString--;
    }
    return true;
}

let string1 = "racecar";
let string2 = "mom";
let string3 = "hamburger";

console.log(`Is ${string1} a plaindrome? ${isPalindrome(string1) ? "Yes" : "No"}`);
console.log(`Is ${string2} a plaindrome? ${isPalindrome(string2) ? "Yes" : "No"}`);
console.log(`Is ${string3} a plaindrome? ${isPalindrome(string3) ? "Yes" : "No"}`);

//Ex15:

function countTo100() {
    let counter = 1;
    while (counter < 100) {
        console.log(counter);
        counter *= 2;
    }
}

countTo100();

//Ex16:

function countTo50() {
    let counter = 900000;
    while (counter > 50) {
        console.log(counter);
        counter /= 2;
    }
}

countTo50();

//Ex17:

let names = ["Chris", "Kevin", "Naveed", "Pete", "Victor"];

function copyNames(names) {
    let copiedNames = [];
    let index = 0;
    while (index < names.length) {
        copiedNames.push(names[index]);
        index++;
    }
    console.log(copiedNames);
    return copiedNames;
}

copyNames(names);

//Ex18:

function stopAtPete(names) {
    let copiedNames = [];
    let index = 0;
    while (index < names.length) {
        if (names[index] === "Pete") {
            break;
        }
        copiedNames.push(names[index]);
        index++;
    }
    console.log(copiedNames);
    return copiedNames;
}

stopAtPete(names);

//Ex19:

function findSuccessiveIndex(array) {
    let index = 0;
    while (index < array.length - 1) {
        if (array[index] === array[index + 1]) {
            return index + 1;
        }
        index++;
    }
    return -1;
}

let arrayOfBools = [true, false, false, true, true, false];
let arrayOfBools2 = [true, false, true, false, false, true];
let arrayOfBools3 = [true, false, true, false, true, false];
console.log(findSuccessiveIndex(arrayOfBools));
console.log(findSuccessiveIndex(arrayOfBools2));
console.log(findSuccessiveIndex(arrayOfBools3));