const PLAYER_X_TURN_TEXT = "Player X's turn";
const PLAYER_O_TURN_TEXT = "Player O's turn";
const TIE_TEXT = "It's a tie!";
const CELL_TAKEN_TEXT = "That cell is already taken! Choose another one.";
const COMPUTER_TURN_TEXT = "Computer's turn...";
const COMPUTER_WAIT_TEXT = "It's the computer's turn! Please wait!";

const WAYS_TO_WIN = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //columns
    [0, 4, 8], [2, 4, 6] //diagonals
];

let board, currentPlayer, gameOver; // Game state variables

let cellsEl, statusEl, notificationEl, restartBtn, modeInputs; // DOM elements

window.addEventListener("DOMContentLoaded", () => {
    getElements();
    initEvents();
    initGame();
});

function initGame() {
    board = Array(9).fill(null);
    currentPlayer = 'X';
    gameOver = false;
    notificationEl.classList.add('d-none');
    renderBoard();
    setStatus(PLAYER_X_TURN_TEXT, 'alert-info');
};

function getElements() {
    cellsEl = document.querySelectorAll('.cell');
    statusEl = document.getElementById('status');
    notificationEl = document.getElementById('notification');
    restartBtn = document.getElementById('restartBtn');
    modeInputs = document.querySelectorAll('input[name="mode"]');
};

function initEvents() {
    cellsEl.forEach(cell => {
        cell.addEventListener('click', () => {
            if (getMode() === 'pvc' && currentPlayer === 'O') {
                showNotification(COMPUTER_WAIT_TEXT);
                return;
            }
            makeMove(parseInt(cell.dataset.index));
        });
    });

    restartBtn.addEventListener('click', () => {
        initGame();
    });

    modeInputs.forEach(input => {
        input.addEventListener('change', () => {
            initGame();
        });
    });
};

function gameUtils() {

    const getMode = () => {
        return document.querySelector('input[name="mode"]:checked').value;
    };

    const showNotification = (message) => {
        notificationEl.textContent = message;
        notificationEl.classList.remove('d-none');

        clearTimeout(showNotification.timeout);
        showNotification.timeout = setTimeout(() => {
            notificationEl.classList.add('d-none');
        }, 2500);
    };

    const setStatus = (message, colorClass = 'alert-info') => {
        statusEl.textContent = message;
        statusEl.className = `alert ${colorClass} status-box`;
    };

    const checkWinners = () => {
        const highlightWinningCells = (combo) => {
            combo.forEach(index => cellsEl[index].classList.add('winning-cell'));
        };

        for (const [a, b, c] of WAYS_TO_WIN) {
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                highlightWinningCells([a, b, c]);
                return { winner: board[a], combo: [a, b, c] };
            }
        }
        if (board.every(function (cell) { return cell !== null; })) {
            return { winner: null, combo: null, tie: true };
        }
        return null;
    };

    return { getMode, showNotification, setStatus, checkWinners };
};

const { getMode, showNotification, setStatus, checkWinners } = gameUtils();

function renderBoard() {
    for (let i = 0; i < cellsEl.length; i++) {
        cellsEl[i].textContent = board[i] || '';
        cellsEl[i].className = 'cell';

        if (board[i]) {
            cellsEl[i].classList.add('taken', board[i]);
        }
    }
};

function makeMove(index) {
    if (gameOver) return;

    if (board[index] !== null) {
        handleCellTaken();
        return;
    }

    board[index] = currentPlayer;
    renderBoard();

    const result = checkWinners();

    if (result) {
        gameOver = true;
        if (result.tie) {
            handleTie();
        } else {
            handleWin(result);
        }
        return;
    }

    handleTurnSwitch();
};

function computerMove() {
    const emptyCells = [];
    for (let i = 0; i < board.length; i++) {
        if (board[i] === null) emptyCells.push(i);
    }
    if (emptyCells.length === 0) return;

    const choice = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    setTimeout(() => makeMove(choice), 500);

};

function handleEvents() {
    const handleCellTaken = () => {
        showNotification(CELL_TAKEN_TEXT);
    };

    const handleTurnSwitch = () => {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

        if (getMode() === 'pvc' && currentPlayer === 'O') {
            setStatus(COMPUTER_TURN_TEXT, 'alert-warning');
            computerMove();
        } else {
            const turnText = currentPlayer === 'X' ? PLAYER_X_TURN_TEXT : PLAYER_O_TURN_TEXT;
            setStatus(turnText, 'alert-info');
        }
    };

    const handleTie = () => {
        setStatus(TIE_TEXT, 'alert-secondary');
    };

    const handleWin = (result) => {
        const label = (getMode() === 'pvc' && result.winner === 'O') ? 'Computer' : `Player ${result.winner}`;
        setStatus(`${label} wins!`, 'alert-info');
    };

    return { handleCellTaken, handleTurnSwitch, handleTie, handleWin };
};

const { handleCellTaken, handleTurnSwitch, handleTie, handleWin } = handleEvents();