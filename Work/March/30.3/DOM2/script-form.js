const studentForm = document.querySelector("#studentRegistrationID");
const studentFullName = document.querySelector("#studentFullNameID");
const studentAge = document.querySelector("#studentAgeID");
const studentEmail = document.querySelector("#studentEmailID");
const submitButton = document.querySelector("#submitButtonID");

const createErrorMessage = () => {
    const existErrorMessage = document.querySelector(".studentFormError");
    if (existErrorMessage) {
        return;
    };
    const errorMessageContainerEl = document.createElement("div");
    errorMessageContainerEl.classList.add("studentFormError");
    const errorMessageEl = document.createElement("p");
    errorMessageEl.textContent = "YOU ARE UNDERAGE";
    errorMessageContainerEl.appendChild(errorMessageEl);
    studentForm.appendChild(errorMessageContainerEl);
};

const removeErrorMessage = () => {
    const errorMessageContainerEl = studentForm.querySelector(".studentFormError");
    if (!errorMessageContainerEl) {
        return;
    };
    errorMessageContainerEl.remove();
}

const createStudentObject = () => {
    const student = {};
    student.fullName = studentFullName.value;
    student.age = studentAge.value;
    student.email = studentEmail.value;

    return student;
}

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event);

    const invalidAge = studentAge.value < 18;
    studentForm.classList.toggle("studentFormError", invalidAge);

    if (invalidAge) {
        createErrorMessage();
        return;
    }
    else {
        removeErrorMessage();
    };
    const student = createStudentObject();
    console.log(student);
});