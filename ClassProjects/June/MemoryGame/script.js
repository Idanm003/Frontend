const MAX_PAIRS = 8;
const THEMES = ['hp', 'dogs', 'countries', 'random'];
const flipClass = 'flip';

let lockBoard = false;
let hasFlippedCard = false;
let firstCard = null;
let secondCard = null;
let matchedPairs = 0;
let currentTheme = '';

async function startTheme(theme) {
    if (theme === 'random') {
        const nonRandom = THEMES.filter(t => t !== 'random');
        theme = nonRandom[Math.floor(Math.random() * nonRandom.length)];
    }

    currentTheme = theme;
    const images = await fetchImages(theme);
    startGame(images);
}

async function fetchImages(theme) {
    if (theme === 'hp') {
        const res = await fetch('https://hp-api.onrender.com/api/characters');
        const data = await res.json();
        const withImage = data.filter(character => character.image);
        return pickRandom(withImage, MAX_PAIRS).map(character => ({ src: character.image, alt: character.name }));
    }

    if (theme === 'dogs') {
        const res = await fetch(`https://dog.ceo/api/breeds/image/random/${MAX_PAIRS}`);
        const data = await res.json();
        return data.message.map((url, i) => ({ src: url, alt: 'Dog ' + i }));
    }

    if (theme === 'countries') {
        const res = await fetch('https://raw.githubusercontent.com/mledoze/countries/master/countries.json');
        const data = await res.json();
        return pickRandom(data, MAX_PAIRS).map(country => ({
            src: `https://flagcdn.com/w320/${country.cca2.toLowerCase()}.png`,
            alt: country.name.common,
        }));
    }
}

function startGame(images) {
    lockBoard = false;
    hasFlippedCard = false;
    firstCard = null;
    secondCard = null;
    matchedPairs = 0;

    const deck = [];
    images.forEach((img, id) => {
        deck.push({ id, ...img });
        deck.push({ id, ...img });
    });
    const shuffledDeck = shuffle(deck);

    document.querySelector('.screenSelect').style.display = 'none';
    document.querySelector('.gameScreen').style.display = 'block';
    document.querySelector('.winMsg').style.display = 'none';

    renderBoard(shuffledDeck);
}
function renderBoard(deck) {
    const board = document.querySelector('.gameBoard');
    board.innerHTML = '';

    deck.forEach(card => {
        const cardEl = document.createElement('div');
        cardEl.classList.add('memoryCard');
        cardEl.dataset.card = card.id;
        cardEl.innerHTML = `<img src="${card.src}" alt="${card.alt}">`;
        cardEl.addEventListener('click', handleClickFlip);
        board.appendChild(cardEl);
    });
}

const handleClickFlip = (e) => {
    const clickedCard = e.target.closest('.memoryCard');

    if (clickedCard === firstCard || lockBoard) return;

    clickedCard.classList.add(flipClass);

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = clickedCard;
        return;
    }

    secondCard = clickedCard;
    lockBoard = true;

    checkForMatch();
};

const checkForMatch = () => {
    const isMatch = firstCard.dataset.card === secondCard.dataset.card;
    isMatch ? disableMatchedCards() : flipCardsBack();
};

const disableMatchedCards = () => {
    firstCard.removeEventListener('click', handleClickFlip);
    secondCard.removeEventListener('click', handleClickFlip);
    matchedPairs++;
    if (matchedPairs === MAX_PAIRS) setTimeout(showWin, 500);
    resetTurn();
};

const flipCardsBack = () => {
    setTimeout(() => {
        firstCard.classList.remove(flipClass);
        secondCard.classList.remove(flipClass);
        resetTurn();
    }, 1500);
};

const resetTurn = () => {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
};

function showWin() {
    document.querySelector('.gameScreen').style.display = 'none';
    document.querySelector('.winMsg').style.display = 'block';
}

function goBackToThemes() {
    document.querySelector('.screenSelect').style.display = 'block';
    document.querySelector('.gameScreen').style.display = 'none';
    document.querySelector('.winMsg').style.display = 'none';
}

function restartGame() {
    startTheme(currentTheme);
}

function pickRandom(array, count) {
    return shuffle(array).slice(0, count);
}

function shuffle(array) {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}