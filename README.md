# Memory-Game-Journey

## P3 for Fend Udacity,  "a trip between Romania and Czech Republic" 
 
## FEND Memory Game

Mainly the purpose of the little game is reflected in a set of rules:
- clicking the cards
- matching the pairs
- recording the moves, time and star points
- providing the final stats of the game

## The project is splitted between:
 - HTML: P3_index.html
 - CSS: css_app.css
 - JS script: app.js

## Technologies Used:

* HTML5
* CSS3
* JavaScript
--> using as well FontAwesome, for the small icons on the game menu.
The cards that contain real images between the countries that I lived in till present times :Czech Republic and Romania(my home country).
As a disclaimer, the images used for the flipping cards pertain to the sources cited on the page too for Romania [here](https://www.instagram.com/romaniapitoreasca/?hl=cs) and for Czech Republic, mainly Prague [just a pack facebook photos](https://www.facebook.com/justapack/).


# Game Rules explained in more detail

### Having the final end window with the finish of the game:
You finish the game when you matched all 10 pairs.

### Flipping  the cards and matching them
Each possible first 2 cards are clicked and then are compared in order to decide for matching or not.
If they are not moatched then they will be flipped back and then the searching of the pairs continues with other 2 cards, so on.

### Recording the moves, clock and stars
Every step one makes is recorded, while the time passes too.
The numbers of the moves are connected to the number of the "earth stars"(you start with 3) that one will lose as he/she will make more and more moves.
User can track all of these in real time during the game.

The treshold is set a reasonable way (2 guess chances per each pair) adding a margin of 5 moves.When the number of moves is between 25 and 35 the number of "earth stars" goes to 2 and further the stars will remain to 1. 
The clock will stop once all the pairs are matched and one has the scoring of your game, which by the way will contain the exactly last minute on the finish of the game.

### Reset option
One can reset the game at any time by clicking on the reset icon.This will reshuffle the cards, restart the time and reset the moves and your "earth stars".

### Finish window
It will reflect the short description of moves, time and stars and a  message for the user.
Also here one will have other 2 buttons to restart a new game("Try it again!" button) or to close the finish window and have a look on the matrix of pics ("See you next time buddy! :)" button). 

# Author
Created by Georgiana-Ancuta Gava (Anca) for an Udacity project (WEB DEV FEND Nanodegree).

### Note: 
The idea regarding a small part of the code about how the time is displayed as 2 digits for first 10 seconds and also the open cards separated array that is replaced with each matching trial, pertains to Matthew Cranford who gave me some inspiration and challenged even more my further logic into achivieng my personal vision of how the game actually could work, depending on my own game framework and hopefully...my own creativity. 
[Have a look on his github ;) ](https://github.com/MatthewCranford/fend-project-memory-game/tree/162fff98b15e3d9f6afd98034e3415e1049b0d96).

