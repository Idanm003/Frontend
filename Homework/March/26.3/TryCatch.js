//Ex1:
//Output would be the error becuase lalala is undefined and would crash program.


//Ex2:
//Output would be a syntax error because of the "{{{{{{{", meaning the catch is never reached

//Ex3:
//A - Output would be - undefined because user.name does not exist
//B - new error would be
try {
    let user = JSON.parse(json);
    if (user.name == undefined) throw new Error("No user.name in JSON exists");
    alert(user.name);
} catch (error) {
    alert("Error has occured");
}

//Ex4:

const people = [
    {
        id: 1,
        name: "John",
        lastName: "Doe",
        age: 25,
        grades: [90, 67, 78, 100, 89, 92]
    },
    {
        id: 2,
        name: "Idan",
        lastName: "Magen",
        age: 27,
        grades: [100, 90, 80, 70, 65, 99]
    }
];

function loopThroughPeople(people) {
    const seenIDs = [];
    for (let i = 0; i < people.length; i++) {
        let person = people[i];
        console.log(person);

        if (!Number.isInteger(person.age)) {
            throw new Error("Age has to be integer");
        }
        if (seenIDs.includes(person.id)) {
            throw new Error("ID has to be unique");
        }
        seenIDs.push(person.id);
        for (let grades of person.grades) {
            if (grades < 0 || grades > 100) {
                throw new Error("Grades have to be between 0 and 100");
            }
        }
    }
}

try {
    loopThroughPeople(people);
} catch (error) {
    alert(error.message);
}

//Ex5:
//1.
const addNums = (num1, num2) => {
    return num1 + num2;
};
console.log(addNums(1, 2));

//2.
const returnAlert = () => {
    const alert = "Error in function";
    return alert;
};
console.log(returnAlert());

//3.
let x = (x) => {
    return x + 1;
};
console.log(x(4));

//4.

function Person() {
    this.name = 'Jack',
        this.age = 25,
        this.sayName = function () {
            console.log(this.age);
            let innerFunc = () => {
                console.log(this.age);
            }
            innerFunc();
        }
}
const persons = new Person();
persons.sayName();

//Output would 25 because we output the age of Jack oustide of the function and also inside of innerFunc