//Input Section

const passwordInput = document.querySelector('#passwordInput');
const confirmPasswordInput = document.querySelector('#confirmPasswordInput');
const viewPasswordButtons = document.querySelectorAll('.viewPassword');
const submitButton = document.querySelector('.submitBtn');

//Buttons Section

const yellowBtn = document.querySelector('.yellow-btn');
const prplBtn = document.querySelector('.purple-btn');
const orangeBtn = document.querySelector('.orange-btn');


function togglePasswordVisibility(button){
    const input = button.previousElementSibling;
    if (input.type === 'password') {
        input.type = 'text';
        button.textContent = 'Hide Password';
    } else {
        input.type = 'password';
        button.textContent = 'View Password';
    }
}

viewPasswordButtons.forEach(button => {
    button.addEventListener('click', () => togglePasswordVisibility(button));
});

function validatePasswords(event) {
    event.preventDefault();
    if (passwordInput.value === confirmPasswordInput.value) {
        alert('Passwords match!');
    } else {
        alert('Passwords do not match.');
    }
};

submitButton.addEventListener('click', validatePasswords);

function changeButtonColor(event) {
    if (event.target === yellowBtn) {
        yellowBtn.style.backgroundColor = 'yellow';
    } else if (event.target === prplBtn) {
        prplBtn.style.backgroundColor = 'purple';
    } else if (event.target === orangeBtn) {
        orangeBtn.style.backgroundColor = 'orange';
    }
};

yellowBtn.addEventListener('click', changeButtonColor);
prplBtn.addEventListener('click', changeButtonColor);
orangeBtn.addEventListener('click', changeButtonColor);