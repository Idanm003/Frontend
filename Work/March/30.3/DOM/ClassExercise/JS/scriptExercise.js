const fullNameInput = document.querySelector("#id-fullname-input");
const ageInput = document.querySelector("#id-age-input");
const submitBtn = document.querySelector("#id-submit-form-btn");

let newFullName, newAge;

submitBtn.addEventListener("click", () => {
    console.log(fullNameInput.value);
    console.log(ageInput.value);

    newFullName = fullNameInput.value;
    newAge = ageInput.value;

    //Age Check
    if (ageInput.value < 18) {
        console.log("Yay");
    } else if (ageInput.value >= 18) {
        console.log("Nay");
    };

    //Full Name Check
    if (fullNameInput.value === "") {
        console.log("Full Name Is Empty");
    };

    console.log(newFullName.value);
    console.log(newAge.value);
});