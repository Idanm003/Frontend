let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");

let operator = document.getElementById("operator");
const validOp = ["*", "/", "+", "-"];

let calculate = document.getElementById("calculate");
let result = document.getElementById("output");

operator.addEventListener("input", () => {
    operator.value = operator.value.slice(0, 1);
    if (!validOp.includes(operator.value)) {
        operator.value = "";
        operator.style.outline = "2px solid red";
    } else {
        operator.style.outline = "2px solid green";
    }
});

calculate.addEventListener("click", () => {
    const num1 = Number(firstNumber.value);
    const num2 = Number(secondNumber.value);

    if (!validOp.includes(operator.value)) {
        result.textContent = "Invalid Operator";
        return;
    }
    switch (operator.value) {
        case "*":
            result.textContent = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                result.textContent = "Cannot Divide By Zero";
                return;
            }
            result.textContent = num1 / num2;
            break;
        case "+":
            result.textContent = num1 + num2;
            break;
        case "-":
            result.textContent = num1 - num2;
            break;
        default:
            return "Invalid Operator";
            break;
    }
});

let cat = {
    tiredness: 3,
    hunger: 4,
    loneliness: 5,
    happiness: 7,

    clamp: function () { //Limits min/max of cat properties
        this.tiredness = Math.max(0, Math.min(10, this.tiredness));
        this.hunger = Math.max(0, Math.min(10, this.hunger));
        this.loneliness = Math.max(0, Math.min(10, this.loneliness));
        this.happiness = Math.max(0, Math.min(10, this.happiness));
    },

    printStatus: function () {
        console.log(`Tiredness: ${this.tiredness}`);
        console.log(`Hunger: ${this.hunger}`);
        console.log(`Loneliness: ${this.loneliness}`);
        console.log(`Happiness: ${this.happiness}`);
    },

    feed: function () {
        this.hunger -= 2;
        this.happiness += 1;
        this.clamp();
    },

    sleep: function () {
        this.tiredness -= 2;
        this.hunger += 1;
        this.clamp();
    },

    play: function () {
        this.loneliness -= 1;
        this.happiness += 1;
        this.tiredness += 1;
        this.hunger += 1;
        this.clamp();
    },

    pet: function () {
        this.loneliness -= 3;
        this.happiness += 2;
        this.clamp();
    }
};

// Replace these URLs with your preferred cat gifs
const catGifs = {
    happy:    "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
    hungry:   "https://media.giphy.com/media/3oriO6qJiXajN0TksU/giphy.gif",
    tired:    "https://media.giphy.com/media/CjmvTCZf2U3p09Cn0h/giphy.gif",
    lonely:   "https://media.giphy.com/media/VGG8UY1nEl66Y/giphy.gif",
    normal:   "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif"
};

function getCatEmotion() {
    if (cat.hunger >= 7)     return "hungry";
    if (cat.tiredness >= 7)  return "tired";
    if (cat.loneliness >= 7) return "lonely";
    if (cat.happiness >= 7)  return "happy";
    return "normal";
}

function updateCatUI() {
    document.getElementById("cat-tiredness").textContent = cat.tiredness;
    document.getElementById("cat-hunger").textContent = cat.hunger;
    document.getElementById("cat-loneliness").textContent = cat.loneliness;
    document.getElementById("cat-happiness").textContent = cat.happiness;

}

document.getElementById("btn-feed").addEventListener("click", () => { cat.feed(); updateCatUI(); });
document.getElementById("btn-sleep").addEventListener("click", () => { cat.sleep(); updateCatUI(); });
document.getElementById("btn-play").addEventListener("click", () => { cat.play(); updateCatUI(); });
document.getElementById("btn-pet").addEventListener("click", () => { cat.pet(); updateCatUI(); });

updateCatUI();