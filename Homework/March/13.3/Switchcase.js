//Ex1:
function evenOrOdd(number) {
    switch (true) {
        case (number % 2 == 0):
            return "even";
        case (number % 2 !== 0):
            return "odd";
        default:
            return "Unhandled number";
    }
}
console.log(evenOrOdd(2));
console.log(evenOrOdd(5));
console.log(evenOrOdd("x"));

//Ex2:
function isNegativeOrPositive(number) {
    switch (true) {
        case (number < 0):
            return "negative";
        case (number > 0):
            return "positive";
        default:
            return "zero";
    }
}
console.log(isNegativeOrPositive(2));
console.log(isNegativeOrPositive(-5));

//Ex3:
function getDayByNum(number) {
    switch (number) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "please enter another number";
    }
}

console.log(getDayByNum(1));
console.log(getDayByNum(2));
console.log(getDayByNum(3));
console.log(getDayByNum(4));
console.log(getDayByNum(5));
console.log(getDayByNum(6));
console.log(getDayByNum(7));
console.log(getDayByNum(8));

//Ex4:
function getMonthByNum(number) {
    switch (number) {
        case 1:
            return "January";
        case 2:
            return "February";
        case 3:
            return "March";
        case 4:
            return "April";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "August";
        case 9:
            return "September";
        case 10:
            return "October";
        case 11:
            return "November";
        case 12:
            return "December";
        default:
            return "please enter another number";
    }
}
console.log(getMonthByNum(1));
console.log(getMonthByNum(2));
console.log(getMonthByNum(3));
console.log(getMonthByNum(4));
console.log(getMonthByNum(5));

//Ex5:
function isVowelOrConsonant(letter) {
    if (!isNaN(letter)) {
        return "Please enter a letter";
    }
    switch (letter.toLowerCase()) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        case "y":
            return "vowel";
        default:
            return "consonant";
    }
}
console.log(isVowelOrConsonant("a"));
console.log(isVowelOrConsonant("e"));
console.log(isVowelOrConsonant("E"));
console.log(isVowelOrConsonant("b"));

//Ex6:
function getGradeByNumber(number) {
    if (number < 0 || number > 100) {
        return "Please enter a number between 0 and 100";
    }

    switch (true) {
        case (number >= 90 && number <= 100):
            return "A+";
        case (number >= 71):
            return "A";
        case (number >= 56):
            return "B";
        case (number >= 21):
            return "C";
        case (number >= 0):
            return "D";
        default:
            return "Please enter a number between 0 and 100";
    }
}

console.log(getGradeByNumber(101));
console.log(getGradeByNumber(90));
console.log(getGradeByNumber(71));
console.log(getGradeByNumber(56));
console.log(getGradeByNumber(21));
console.log(getGradeByNumber(10));

//Ex7:
function calculate(num1, num2, operator) {
    switch (operator) {
        case 1:
            return num1 + num2;
        case 2:
            return num1 - num2;
        case 3:
            if (num2 === 0) {
                return "Cannot divide by zero";
            }
            return num1 / num2;
        case 4:
            return num1 * num2;
        default:
            return "please enter another operator";
    }
}
console.log(calculate(1, 2, 1));
console.log(calculate(1, 2, 2));
console.log(calculate(1, 2, 3));
console.log(calculate(1, 2, 4));
console.log(calculate(1, 2, 5));