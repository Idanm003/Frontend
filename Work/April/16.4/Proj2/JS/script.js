const MAX_SCORE = 10;
const YOU_CAN_GUESS_NOW_TEXT = "You can guess now";
const CORRECT_NUMBER_TEXT = "Correct Number!";
const YOU_LOST_GAME_TEXT = "You Lost The Game!";

let randomNumber;
let score;
let highScore = 0;

let messageEl;
let scoreInputEl;
let checkBtnEl;
let gameDetailsBoxEl;

window.addEventListener("DOMContentLoaded", () => {
  initGame();
});

const initGame = () => {
  getElements();
  initEvents();

  score = MAX_SCORE;

  scoreInputEl.textContent = score;
  document.querySelector(".guess").value = "";

  messageEl.textContent = YOU_CAN_GUESS_NOW_TEXT;

  randomNumber = generateRandomNumber();

  removeWinBox();
  addCheckButton();
};

const getElements = () => {
  messageEl = document.querySelector(".message");
  scoreInputEl = document.querySelector(".score");
  checkBtnEl = document.querySelector(".check");
  gameDetailsBoxEl = document.querySelector(".gameDetailsBox");
};

const initEvents = () => {
  document.querySelector(".again").addEventListener("click", () => {
    initGame();
  });

  checkBtnEl.addEventListener("click", () => {
    const userGuess = Number(document.querySelector("#currentNumber").value);

    if (userGuess != "") {
      checkGuess(userGuess);
    } else {
      messageEl.textContent = YOU_CAN_GUESS_NOW_TEXT;
    }
  });
};

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 29 + 1);
};

const checkGuess = (userGuess) => {
  if (userGuess === randomNumber) {
    handleCorrectGuess();
  } else if (userGuess < randomNumber) {
    updateScore("Too low!");
  } else {
    updateScore("Too high!");
  }
};

const handleCorrectGuess = () => {
  messageEl.textContent = CORRECT_NUMBER_TEXT;

  addWinBox();
  handleHighScore();
  removeCheckButton();
};

const handleHighScore = () => {
  if (score > highScore) {
    highScore = score;
    document.querySelector(".highScore").textContent = highScore;
  }
};

const updateScore = (msg) => {
  if (score > 1) {
    messageEl.textContent = msg;
    score--;
    scoreInputEl.textContent = score;
  } else {
    messageEl.textContent = YOU_LOST_GAME_TEXT;
    score--;
    scoreInputEl.textContent = score;

    removeCheckButton();
  }
};

const removeCheckButton = () => {
  checkBtnEl.classList.add("nonDisplayElement");
};

const addCheckButton = () => {
  checkBtnEl.classList.remove("nonDisplayElement");
};

const addWinBox = () => {
  gameDetailsBoxEl.classList.remove("right");
  gameDetailsBoxEl.classList.add("rightCorrect");
};

const removeWinBox = () => {
  gameDetailsBoxEl.classList.add("right");
  gameDetailsBoxEl.classList.remove("rightCorrect");
};