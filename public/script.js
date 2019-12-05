
const cards = document.querySelectorAll('.memorycard');

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;


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



cards.forEach(card => card.addEventListener('click', flipCard))











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
