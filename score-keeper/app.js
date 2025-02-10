// Selecting Elements
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playto')

// Inital Scores & Player Objects
let winningScore = 11;
let isGameOver = false;

const player1 = { score: 0, display: p1Display, button: p1Button };
const player2 = { score: 0, display: p2Display, button: p2Button };

// Score Update Function
function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

// Event Listeners
p1Button.addEventListener('click', () => updateScores(player1, player2));
p2Button.addEventListener('click', () => updateScores(player2, player1));

// Changing Winning Score
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
});

// Reset
resetButton.addEventListener('click', reset);

// Defining Function Reset
function reset() {
    isGameOver = false;
    [player1, player2].forEach(player => {
        player.score = 0;
        player.display.textContent = 0;
        player.display.classList.remove('has-text-success', 'has-text-danger');
        player.button.disabled = false;
    });
}
