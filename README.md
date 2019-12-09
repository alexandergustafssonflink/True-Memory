# True Memory Game!

<img src="https://media.giphy.com/media/QZB1utFhw8sxO/giphy.gif" width="100%">

## Description

A memory game made with great inspiration from the motion picture True Romance.

## Rules

You know the game, now play!

## Built with

-   HTML
-   CSS
-   Javascript

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Testers

-   [Andreas Lindberg](https://github.com/oaflindberg)
-   [Betsy Alva Soplin](https://github.com/milliebase)

## Author

Alexander Gustafsson Flink

## Code review by [Betsy Alva Soplin](https://github.com/milliebase)

Style.css:17-20 - Different indentation.
Style.css:81-84 - On the memorycard you have some transform on your :active-selector. Which makes the cards clickable even when they are a match and even though you have removed the eventlisteners from the cards. If you don’t want them to be clickable I would consider to discard this bit of code.
Style.css:95 - Delete this line of code and replace it with ‘border: 1px solid black’ for example, that will prevent the bug while flipping the card in Chrome. (fixed)
Script.js:11-77 - Maybe you could put your deck array in another file, this would make the readability easier.
Script.js: 125-127 - In your function restartgame() you could remove one of your foreach-loops. Since you are already looping through the memory cards, you don’t need to do it again to add an eventlistener to each card. You could even replace those three lines with your function startgame (see script.js:141).
