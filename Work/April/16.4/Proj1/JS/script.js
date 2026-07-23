const headerTextEl = document.getElementById("id-header-text");
const changeTextBttn = document.getElementById("id-changeTextBttn");
const changeColorBttn = document.getElementById("id-changeColorBttn");

let clickTimes = 0;
const changeHeaderText = () => {
    clickTimes++;

    if (clickTimes % 2 === 0) {
        headerTextEl.innerText = "Hello World!";
    } else {
        headerTextEl.innerText = "Hello New World!";
    }
};

changeTextBttn.addEventListener("click", changeHeaderText);
changeColorBttn.addEventListener("click", () => {
    headerTextEl.classList.toggle("red-color");
});