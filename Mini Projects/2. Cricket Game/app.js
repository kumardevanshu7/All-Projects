let scoreStr = localStorage.getItem('Score');

let score = JSON.parse(scoreStr) || {
    win: 0,
    lost: 0,
    tie: 0,
};

score.displayScore = function () {
    return `WIN : ${score.win} LOST : ${score.lost} TIE : ${score.tie}`;
}

function generateComputerChoice() {
    let randomNumber = Math.random() * 3;
    if (randomNumber > 0 && randomNumber <= 1) {
        return 'Bat';
    } else if (randomNumber > 1 && randomNumber <= 2) {
        return 'Ball';
    } else {
        return 'Stump';
    }
}

function getResult(userMove, computerMove) {
    if (userMove === 'Bat') {
        if (computerMove === 'Ball') {
            score.win++;
            return 'User WON';
        } else if (computerMove === 'Bat') {
            score.tie++;
            return 'Its a TIE';
        } else if (computerMove === 'Stump') {
            score.lost++;
            return 'Computer WON'
        }
    } else if (userMove === 'Ball') {
        if (computerMove === 'Stump') {
            score.win++;
            return 'User WON';
        } else if (computerMove === 'Ball') {
            score.tie++;
            return 'Its a TIE';
        } else if (computerMove === 'Bat') {
            score.lost++;
            return 'Computer WON'
        }
    } else {
        if (computerMove === 'Bat') {
            score.win++;
            return 'User WON';
        } else if (computerMove === 'Stump') {
            score.tie++;
            return 'Its a TIE';
        } else if (computerMove === 'Ball') {
            score.lost++;
            return 'Computer WON'
        }
    }
}

function showResult(userMove, computerMove, result) {

    localStorage.setItem("Score", JSON.stringify(score));


    // that show updation will be written here

    document.querySelector('#user-move').innerText = userMove !== undefined ? `You have chosen ${userMove}` : '';
    document.querySelector('#Computer-move').innerText = computerMove !== undefined ? `Computer choice is ${computerMove}` : '';
    document.querySelector('#result').innerText = result || 'Play Again!';
    document.querySelector('#score').innerText = score.displayScore();




    // alert(`You have chosen ${userMove}. Computer choice is ${computerMove} and 

    // ${result}

    // ${score.displayScore()}`)
}

function bat() {
    let computerChoice = generateComputerChoice();
    let resultMSG = getResult('Bat', computerChoice);
    showResult('Bat', computerChoice, resultMSG);
}
function ball() {
    let computerChoice = generateComputerChoice();
    let resultMSG = getResult('Ball', computerChoice);
    showResult('Ball', computerChoice, resultMSG);
}
function stump() {
    let computerChoice = generateComputerChoice();
    let resultMSG = getResult('Stump', computerChoice);
    showResult('Stump', computerChoice, resultMSG);
}

function reset() {
    localStorage.clear();
    score = {
        win: 0,
        lost: 0,
        tie: 0,
    }
    score.displayScore = function () {
        return `WIN : ${score.win} LOST : ${score.lost} TIE : ${score.tie}`;
    }

    showResult()
}

// function py() {
//     localStorage.setItem("Score", JSON.stringify(score));
//     alert(`Previous Score: --> ${score.displayScore()}`)
// }