//Ex1:

function findBiggestNum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

const res = findBiggestNum(5, 10);
console.log(res);

//Ex2:

function isEqual(num1, num2) {
    if (num1 === num2) {
        num1++;
        return num1;
    }
}
const res2 = isEqual(5, 5);
console.log(res2);

//Ex3:

function findSmallest(num1, num2, num3, num4) {

    const isNum1Valid = num1 >= 1 && num1 <= 5;
    const isNum2Valid = num2 >= 1 && num2 <= 5;
    const isNum3Valid = num3 >= 1 && num3 <= 5;
    const isNum4Valid = num4 >= 1 && num4 <= 5;

    if (isNum1Valid || isNum2Valid || isNum3Valid || isNum4Valid) {
        return -1;
    }
    return isSmallest(num1, num2, num3, num4);
}

function isSmallest(num1, num2, num3, num4) {
    let smallest;
    if (num1 < num2 && num1 < num3 && num1 < num4) {
        smallest = num1;
    } else if (num2 < num1 && num2 < num3 && num2 < num4) {
        smallest = num2;
    } else if (num3 < num1 && num3 < num2 && num3 < num4) {
        smallest = num3;
    } else {
        smallest = num4;
    }
    return smallest;
}
const between1And5 = findSmallest(1, 2, 3, 4);
const outside1And5 = findSmallest(10, 20, 6, 8);
console.log(between1And5, outside1And5);

//Ex4:

function isEven(num) {
    if (num % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}
const res4 = isEven(5);
console.log(res4);

//Ex5:

function checkEqual(num1, num2, num3, num4) {
    if (num1 === num2 && num2 === num3 && num3 === num4) {
        return "All numbers are equal";
    }
    let equalCount = 0;
    if (num1 == num2) equalCount++;
    if (num1 == num3) equalCount++;
    if (num1 == num4) equalCount++;
    if (num2 == num3) equalCount++;
    if (num2 == num4) equalCount++;
    if (num3 == num4) equalCount++;

    if (equalCount > 0 && equalCount < 4) {
        return "Some numbers are equal";
    }
    else if (equalCount === 1) {
        return "Two numbers are equal";
    }
    else {
        return "No numbers are equal";
    }
}

const res5 = checkEqual(1, 2, 3, 4);
console.log(res5);

//Ex6:

function whatDayIsToday(num) {

    if (num < 1 || num > 7) {
        return "Error";
    }
    if (num === 1) {
        return "Sunday";
    }
    if (num === 2) {
        return "Monday";
    }
    if (num === 3) {
        return "Tuesday";
    }
    if (num === 4) {
        return "Wednesday";
    }
    if (num === 5) {
        return "Thursday";
    }
    if (num === 6) {
        return "Friday";
    }
    if (num === 7) {
        return "Saturday";
    }
}
const res6 = whatDayIsToday(3);
console.log(res6);

//Ex7:

function whatdayInTheMonth(num) {
    if (num < 1 || num > 12) {
        return -1;
    }
    else if (num === 1 // January
        || num === 3 // March
        || num === 5 // May
        || num === 7 // July
        || num === 8 // August
        || num === 10 // October
        || num === 12) // December
    {
        return 31;
    }
    else if (num === 4 // April
        || num === 6 // June
        || num === 9 // September
        || num === 11) // November
    {
        return 30;
    }
    else // February
    {
        return 28;
    }
}

const res7 = whatdayInTheMonth(22);
console.log(res7);

//Ex8:

let counter = 0,
    totalSum = 0,
    lastNumber = null;

function addNumbers(num) {
    totalSum += num;
    counter++;
    lastNum = num;

    console.log(`Added: ${num}`); // Log the added number
    console.log(`Total Sum: ${totalSum}`); // Log the current total sum
    console.log(`Times called: ${counter}`); // Log how many times the function has been called
    console.log(`Last number added: ${lastNumber}`); // Log the last number added
}

addNumbers(10);
addNumbers(20);
addNumbers(30);

//Ex9:

function calculateOrder(price, quantity, discountPercent) {
    let subtotal = price * quantity;
    let discountAmount = subtotal * (discountPercent / 100);
    let total = subtotal - discountAmount;

    console.log("Subtotal: $" + subtotal); // Log the subtotal before discount
    console.log("Discount: $" + discountAmount); // Log the discount amount
    console.log("Total: $" + total); // Log the final total after applying the discount

    return total;
}

calculateOrder(50, 3, 10); //Subtotal: $150, Discount: $15, Total: $135