const gameSummary = {
    numbers: 0,
    wins: 0,
    loses: 0,
    draws: 0
}

const game = {
    playerHand: null,
    compsHand: null
}

const hands = Array.from(document.querySelectorAll('.select img'));

function handSelection() {
    game.playerHand = this.dataset.option; //patrz w img data-option="np. kamień"
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px yellow';
}

function startGame() { //funkcja sterująca
    if (!game.playerHand) return alert("Pick the hand!");
    game.compsHand = compsChoice();
    const result = gameResult(game.playerHand, game.compsHand);
    gameSummary.numbers++;
    publishResult(result, game.playerHand, game.compsHand);
    game.playerHand = null;
    game.compsHand = null;
    hands.forEach(hand => hand.style.boxShadow = '');
}

function compsChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option;
}

function gameResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        gameSummary.draws++;
        return "Draw :\\";
    } else if ((playerChoice === "papier" && computerChoice === "kamień") || (playerChoice === "kamień" && computerChoice === "nożyczki") || (playerChoice === "nożyczki" && computerChoice === "papier")) {
        gameSummary.wins++;
        return "You!";
    } else {
        gameSummary.loses++;
        return "Computer:(";
    }
}

function publishResult(result, player, comp) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = comp;
    document.querySelector('[data-summary="who-win"]').textContent = result;
    document.querySelector('.numbers span').textContent = gameSummary.numbers;
    document.querySelector('.wins span').textContent = gameSummary.wins;
    document.querySelector('.losses span').textContent = gameSummary.loses;
    document.querySelector('.draws span').textContent = gameSummary.draws;
}

hands.forEach(hand => hand.addEventListener('click', handSelection));

document.querySelector('.start').addEventListener('click', startGame);