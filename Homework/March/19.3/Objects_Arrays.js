//Ex1:

const people = [{
    firstName: "John",
    lastName: "Doe"
},
{
    firstName: "Jane",
    lastName: "Doe"
}];

function displayName(person) {
    console.log(`First Name: ${person.firstName}, Last Name: ${person.lastName}`);
};

people.forEach(person => displayName(person));

//Ex2:

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
    }
};

console.log("Starting state:");
cat.printStatus();

console.log("After feeding:");
cat.feed();
cat.printStatus();

console.log("After sleeping:");
cat.sleep();
cat.printStatus();

console.log("After playing:");
cat.play();
cat.printStatus();


//Ex3:

let meal = {
    title: "Pasta Carbonara",
    numberOfOrders: 150,
    isVegan: false,
    ingredients: [
        "Pasta",
        "Eggs",
        "Cheese"
    ]
};

const nonVeganIngredients = new Set([
    "Eggs",
    "Cheese",
    "Meat",
    "Milk",
    "Butter"
]);

// Ingredients

function addIngredients(meal, ingredients) {
    meal.ingredients.push(...ingredients);
    updateIsVegan(meal);
    return meal;
};

function removeIngredients(meal, ingredients) {
    const toRemove = new Set(ingredients);
    meal.ingredients = meal.ingredients.filter(ingredient => !toRemove.has(ingredient));
    updateIsVegan(meal);
    return meal;
};

function updateIngredients(meal, ingredients, newIngredients) {
    if (newIngredients) {
        const replacements = new Map(ingredients.map((ing, i) => [ing, newIngredients[i]]));
        meal.ingredients = meal.ingredients.map(ingredient => replacements.get(ingredient) ?? ingredient);
    } else {
        const existing = new Set(meal.ingredients);
        meal.ingredients.push(...ingredients.filter(ingredient => !existing.has(ingredient)));
    }
    updateIsVegan(meal);
    return meal;
};


// Update Orders

function updateOrders(meal, numberOfNewOrders) {
    meal.numberOfOrders += numberOfNewOrders;
    return meal;
};

// Print Meal

function printMeal(meal) {
    console.log(`The meal is: ${meal.title}`);
    console.log(`It has ${meal.numberOfOrders} orders`);
    console.log(`Is vegan: ${meal.isVegan}`);
    console.log(`Ingredients:\n${meal.ingredients.map(i => `  - ${i}`).join("\n")}`);
};

// Vegan Check

function updateIsVegan(meal) {
    meal.isVegan = !meal.ingredients.some(ingredient => NON_VEGAN_INGREDIENTS.has(ingredient));
};

function isVegan(meal) {
    return meal.isVegan;
};

console.log("Starting meal:");
printMeal(meal);

console.log("After adding Bacon and Milk:");
addIngredients(meal, ["Bacon", "Milk"]);
printMeal(meal);

console.log("After removing Bacon:");
removeIngredients(meal, ["Bacon"]);
printMeal(meal);

console.log("After replacing Eggs with Tofu:");
updateIngredients(meal, ["Eggs"], ["Tofu"]);
printMeal(meal);

console.log("After one new order:");
updateOrders(meal, 1);
printMeal(meal);

console.log("Is the meal vegan?", isVegan(meal));

console.log("After removing all non-vegan ingredients:");
removeIngredients(meal, ["Cheese", "Milk"]);
printMeal(meal);
console.log("Is the meal vegan now?", isVegan(meal));

//Ex4:

const books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", alreadyRead: false },
    { title: "1984", author: "George Orwell", alreadyRead: true },
    { title: "Dune", author: "Frank Herbert", alreadyRead: false },
    { title: "To Kill a Mockingbird", author: "Harper Lee", alreadyRead: true }
];

console.log("All books:");
books.forEach(book => {
    console.log(`${book.title} by ${book.author}`);
});

function printReadStatus(books) {
    books.forEach(book => {
        if (book.alreadyRead) {
            console.log(`You already read "${book.title}" by ${book.author}`);
        } else {
            console.log(`You still need to read "${book.title}" by ${book.author}`);
        }
    });
}

console.log("Read status:");
printReadStatus(books);