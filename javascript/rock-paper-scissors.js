let computerResult = '';               
let playerResult = '';
let finalResult = '';
const computerOutput = document.querySelector('.js-computer-result');
const playerOutput = document.querySelector('.js-player-result');
const resultOutput = document.querySelector('.js-final-result');
const scoresOutput = document.querySelector('.js-scores');
let scores = JSON.parse(localStorage.getItem('scores')) || {
    wins: 0,
    losses: 0,
    draws: 0
};

function playerMove(move) {                                                                        
    if (move === 'rock') {
        playerResult = 'kő';
    } else if (move === 'paper') {
        playerResult = 'papír';
    } else if (move === 'scissors') {
        playerResult = 'olló';
    }

    playerOutput.innerHTML = 'Te választásod: ' + playerResult;
    computerMove();
    finalResultFunc()
    updateScore()
}

function computerMove() {
    let computerChoose = Math.random();

    if (computerChoose <= 1/3) {
        computerResult = 'kő';
    } else if (computerChoose > 1/3 && computerChoose <= 2/3) {
        computerResult = 'papír';
    } else {
        computerResult = 'olló';
    }

    computerOutput.innerHTML = 'Gép választása: ' + computerResult;
}

function finalResultFunc() {
    if (computerResult === 'kő' && playerResult === 'kő') {
        finalResult = 'döntetlen';
    } else if (computerResult === 'kő' && playerResult === 'papír') {
        finalResult = 'győztél';
    } else if (computerResult === 'kő' && playerResult === 'olló') {
        finalResult = 'vesztettél';
    } else if (computerResult === 'papír' && playerResult === 'kő' ) {
        finalResult = 'vesztettél';
    } else if (computerResult === 'papír' && playerResult === 'papír' ) {
        finalResult = 'döntetlen';
    } else if (computerResult === 'papír' && playerResult === 'olló' ) {
        finalResult = 'győztél';
    } else if (computerResult === 'olló' && playerResult === 'kő' ) {
        finalResult = 'győztél';
    } else if (computerResult === 'olló' && playerResult === 'papír' ) {
        finalResult = 'vesztettél';
    } else if (computerResult === 'olló' && playerResult === 'olló' ) {
        finalResult = 'döntetlen';
    }
}

function updateScore() {
    if (finalResult === 'győztél') {
        scores.wins += 1;
    } else if (finalResult === 'vesztettél') {
        scores.losses += 1;
    } else if (finalResult === 'döntetlen') {
        scores.draws += 1;
    }

    resultOutput.innerHTML = 'Eredmény: ' + finalResult + '!';
    scoresOutput.innerHTML = 'Győzelmek: ' + scores.wins + ', ' + 'Vesztések: ' + scores.losses + ' Döntetlenek: ' + scores.draws;

    localStorage.setItem('scores', JSON.stringify(scores));
}

function resetScore() {
    scores.wins = 0;
    scores.losses = 0;
    scores.draws = 0;
    localStorage.removeItem('scores');
    computerOutput.innerHTML = '';
    playerOutput.innerHTML = '';
    resultOutput.innerHTML = '';
    scoresOutput.innerHTML = 'Győzelmek: ' + scores.wins + ', ' + 'Vesztések: ' + scores.losses + ' Döntetlenek: ' + scores.draws;

}


document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
        playerMove('rock');
    });

document.querySelector('.js-paper-button')
    .addEventListener('click', () => {
        playerMove('paper');
    });

document.querySelector('.js-scissors-button')
    .addEventListener('click', () => {
        playerMove('scissors');
    });