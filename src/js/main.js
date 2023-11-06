let secretNumber;
let attempts = 0;
let minRange = 1;
let maxRange = 100;

function generateSecretNumber() {
    secretNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
}

function checkGuess() {
    const userInput = document.getElementById('user-input').value;
    const hint = document.getElementById('hint');
    const attemptsElem = document.getElementById('attempts');

    if (userInput < minRange || userInput > maxRange) {
        hint.innerText = 'Введите число в заданном диапазоне!';
        return;
    }

    attempts++;
    attemptsElem.innerText = attempts;

    if (userInput < secretNumber) {
        hint.innerText = 'Загаданное число больше.';
    } else if (userInput > secretNumber) {
        hint.innerText = 'Загаданное число меньше.';
    } else {
        hint.innerText = 'Поздравляем! Вы угадали число!';
    }

    if (attempts % 3 === 0 && userInput != secretNumber) {
        const isEven = secretNumber % 2 === 0;
        hint.innerText += ` Подсказка: число ${isEven ? 'четное' : 'нечетное'}.`;
    }
}

function resetGame() {
    generateSecretNumber();
    attempts = 0;
    document.getElementById('attempts').innerText = attempts;
    document.getElementById('hint').innerText = '';
    document.getElementById('user-input').value = '';
}

generateSecretNumber();