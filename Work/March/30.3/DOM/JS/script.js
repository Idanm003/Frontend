const h1TextEl = document.querySelector("#titleID");
const h2TextEl = document.querySelector(".class-title");
const h3TextEl = document.querySelector("h3");

const classTitelEls = document.querySelectorAll(".class-title");
const inputTextEl = document.getElementById("idInput");
const inputEmailEl = document.getElementsByClassName("classEmailInput");

const inputAgeEl = document.getElementById("ageInput");
const ageValue = inputAgeEl.value;

const buttonEl = document.querySelector(".class-button");
buttonEl.addEventListener("click", printSomething);

function printSomething() {
    console.log(h1TextEl);
    console.log(h2TextEl);
    console.log(h3TextEl);

    console.log(classTitelEls);

    console.log(inputTextEl);
    console.log(inputEmailEl);
    console.log(inputAgeEl);
    console.log(ageValue);
    
    if (ageValue >= 18) {
        console.log("Age is above 18.");
    }
    else {
        console.log("Age is below 18.");
    };
};

inputTextEl.addEventListener("input", () =>{
    console.log(inputTextEl.value);
})