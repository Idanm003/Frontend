//Objects

const student = {
  name: "Oren",
  age: 15,
  email: "oren@gmail.com",
  country: "Israel",
  courses: ["Full Stack", "Clean Code"],
  iStudentDetails: function() {
      console.log("---------------")
      console.log("This is " + this.name);
      console.log("His Age is " + this.age);
      console.log("You can send him a meesage on " + this.email);
      console.log("He live in the country " + this.country);
      if(this.courses) {
          this.courses.forEach(function(el) {
              console.log("I he stuying: " + el)
          });
      }
  }
}

const student2 = {
    name: "David",
    age: 17,
    country: "Israel",
    email: "david@gmail.com",
    iStudentDetails: function() {
        console.log("---------------")
        console.log("This is " + this.name);
        console.log("His Age is " + this.age);
        console.log("You can send him a meesage on " + this.email);
        console.log("He live in the country " + this.country);
        if(this.courses) {
            this.courses.forEach(function(el) {
                console.log("I he stuying: " + el)
          });
      }
  }
}

student.iStudentDetails();
student2.iStudentDetails();

//Loops

//For loop

for (let i = 0; i < 5; i++){
    console.log(`Printed ${i}`);
}

const someArray = ["Apple", "Orange", "Bannana"];

for (let i = 0; i < someArray.length; i++){
    console.log(`Printed: ${someArray[i]}`);
}

//While loop

let stopGame = false;
let loopCount = 0;

function initGame(stopGame){
    while (!stopGame){
        console.log("Game is still on!");
        loopCount++;
        if (loopCount >= 5 && !stopGame){
            stopGame = true;
        }
    }
}
initGame();
console.log("Game Over!");

//Do while loop


let doWhileStopGame = false;
let doWhileLoopCount = 0;

function doWhileInitGame(){
    do {
        console.log("Game is still on!");
        doWhileLoopCount++;
        if (doWhileLoopCount >= 5 && !doWhileStopGame){
            doWhileStopGame = true;
        }
    }
    while(!doWhleStopGame)
}

doWhileInitGame();

//New for loop

const stringArray = ["Apple", "Bannana", "Pear"];

for (let test of stringArray){
    console.log(`This is new for loop ${test}`)
}

//Loop in object

const obj = {
    a: "1",
    b: "2"
}

for (let o in obj) {
    console.log(o)
    console.log(obj[o])
}

//Matrix

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
        console.log(matrix[i][j]);
    };
};

//Class Exersize

const matrix1 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

const matrix2 = [
  [10,11,12],
  [13,14,15],
  [16,17,18],
];

const matrix3 = [
  [19, 20, 21],
  [22, 23, 24],
  [25, 26, 27]
];

const matrixObj = {
  firstMatrix : matrix1,
  secondMatrix : matrix2,
  thirdMatrix : matrix3
};

function printSecondMatrix(obj) {
  const matrix = obj.secondMatrix;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j]);
    }
  }
};

printSecondMatrix(matrixObj);

//Other way

function printSecondMatrixFlat(obj) {
  obj.secondMatrix.flat().forEach(function (element){ 
    console.log(element);
  });
}
printSecondMatrixFlat(matrixObj);