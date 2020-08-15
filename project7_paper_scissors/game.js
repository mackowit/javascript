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

hands.forEach(hand => hand.addEventListener('click', handSelection));


