
const cards = document.querySelectorAll('.memorycard');

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

const startButton = document.querySelector('.startButton')
const restartButton = document.querySelector('.restartButton')

const backFace = document.querySelectorAll('.backFace')


// Button that calls the function that restarts the game. 

restartButton.addEventListener('click', () => {
    restartGame();
})

// Restarts the game 

function restartGame() {
    cards.forEach(card =>
        card.classList.remove('flip'));
    cards.forEach(card => card.addEventListener('click', flipCard))

}

function startGame() {
    cards.forEach(card => card.addEventListener('click', flipCard))
}

startButton.addEventListener('click', () => {
    startGame()
})

// cards.forEach(card, () => {
//     if (card.classList = 'flip')
//         console.log('card is flipped')
// })



function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');
    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;
    } else {
        hasFlippedCard = false;
        secondCard = this;

        checkForMatch();

    }
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}



function checkForMatch() {
    if (firstCard.dataset.name === secondCard.dataset.name) {
        disableCards()
    }
    else {
        unflipCards()
    }
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500)
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}







const createMemoryCard = (image, id) => {
    return `<div class="memory-card" data-icon="${id}">
      <img class="card-back" src="images/question.png">
      <img class="card-front" src="${image}" >
          </div>`;
};











// function createCards() => {

// }

// cards.forEach(card =>
//     document.createElement(div);
//     div.innerHTML()



// const div = document.createElement("div");



// const cards = [
//     {
//         img: 'img/alabama.jpg'
//     },
//     {
//         img: 'img/blood.jpg'
//     },
//     {
//         img: 'img/brad.jpg'
//     },
//     {
//         img: 'img/chris-walken.jpg'
//     },
//     {
//         img: 'img/clarencedad.jpg'
//     },
//     {
//         img: 'img/gandolfini.jpg'
//     },
//     {
//         img: 'img/gunsout.jpg'
//     },
//     {
//         img: 'img/lee-donowitz'
//     },
//     {
//         img: 'img/pimp.jpg'
//     },
//     {
//         img: 'img/police.jpg'
//     },
//     {
//         img: 'img/samuel.jpg'
//     },
//     {
//         img: 'img/true-primary.jpg'
//     }
// ]
