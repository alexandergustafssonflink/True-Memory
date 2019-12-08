let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

const startButton = document.querySelector('.startButton')
const restartButton = document.querySelector('.restartButton')
const memoryGame = document.querySelector('.memorygame')

const backFace = document.querySelectorAll('.backFace')


// An array of images
const cards = [
    {
        img: 'img/alabama.jpg', id: 'alabama'
    },
    {
        img: 'img/samuel.jpg', id: 'samuel'
    },
    {
        img: 'img/brad.jpg', id: 'brad'
    },
    {
        img: 'img/chris-walken.jpg', id: 'chris-walken'
    },
    {
        img: 'img/clarencedad.jpg', id: 'clarencedad'
    },
    {
        img: 'img/gandolfini.jpg', id: 'gandolfini'
    },
    {
        img: 'img/gunsout.png', id: 'gunsout'
    },
    {
        img: 'img/pimp.jpg', id: 'pimp'
    },
    {
        img: 'img/alabama.jpg', id: 'alabama'
    },
    {
        img: 'img/samuel.jpg', id: 'samuel'
    },
    {
        img: 'img/brad.jpg', id: 'brad'
    },
    {
        img: 'img/chris-walken.jpg', id: 'chris-walken'
    },
    {
        img: 'img/clarencedad.jpg', id: 'clarencedad'
    },
    {
        img: 'img/gandolfini.jpg', id: 'gandolfini'
    },
    {
        img: 'img/gunsout.png', id: 'gunsout'
    },
    {
        img: 'img/pimp.jpg', id: 'pimp'
    },
]


const quotes = [
    {
        quote1: "I haven't killed anybody...since 1984."
    },
    {
        quote2: "Now I know I'm pretty, but I'm not as pretty as a pair of titties."
    },
    {
        quote3: "You're an actor. Act, motherfucker."
    },
    {
        quote4: "Hey! Get some beer and some cleaning products!"
    },
    {
        quote5: "She a four alarm fire or what?"
    }

]

console.log(quotes)


// Helper function to prevent XSS injections
// Creates an HTML element from string

const stringToHTML = str => {
    const div = document.createElement("div");
    div.innerHTML = str;
    return div.firstChild;
};


// function that sends back a div-element including image tags based on the variables sent in

const createMemoryCard = (img, id) => {
    return `<div class="memorycard" data-name="${id}">
      <img class="backface" src="img/true-primary.jpg">
      <img class="frontface" src="${img}" >
          </div>`;
};


// Function that generates images from the cards-array by calling the createMemoryCard-function

const generateCards = () => {
    cards.forEach(card => {
        const images = createMemoryCard(card.img, card.id);
        memoryGame.appendChild(stringToHTML(images));
    });
};

// Calls the generateCards-function

generateCards();


const memoryCards = document.querySelectorAll('.memorycard')


// function that shuffles the cards based on the order in flexbox

function shuffle() {
    memoryCards.forEach(memoryCard => {
        let randomPosition = Math.floor(Math.random() * 8);
        memoryCard.style.order = randomPosition;
    })
}


shuffle();


// Button that calls the function that restarts the game. 

restartButton.addEventListener('click', () => {
    restartGame();
})

// Function that estarts the game by removing the flip-class, adding the click-function back and shuffling the cards. 

function restartGame() {
    memoryCards.forEach(memoryCard =>
        memoryCard.classList.remove('flip'));
    memoryCards.forEach(memoryCard => memoryCard.addEventListener('click', flipCard))
    setTimeout(() => {
        shuffle(cards)
    }, 500);
}

// Function that adds the ability to click the cards and therefore starts the game

function startGame() {
    memoryCards.forEach(memoryCard => memoryCard.addEventListener('click', flipCard))
}

// Button that calls the startGame-function

startButton.addEventListener('click', () => {
    startGame()
})

// Function that flips card and checks if theres a match using the checkForMatch-function

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

// Function that resets the board by resetting the values of flipped cards

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}


// Function that checks for match by comparing dataset.name of the flipped cards. If they match, it calls the disableCards-function leaving them flipped. If the cards doesn't match it calls the unFlipCards-function.

function checkForMatch() {
    if (firstCard.dataset.name === secondCard.dataset.name) {
        disableCards()

        window.alert(quotes.firstChild)
        // setTimeout(() => {
        //     quoteDiv = document.createElement = "div"
        //     quoteDiv.textContent = "HJEHJE"
        // }, 500);
    }
    else {
        unflipCards()
    }
}

// Function that removes the "flip"-class and calls the resetBoard-function

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1000)
}

// Function that removes the click-eventlistener leaving the card with the current class. 

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}