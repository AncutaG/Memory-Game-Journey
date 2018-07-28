# Memory-Game-Journey

## P3 from Fend Udacity,  "a trip between Romania and Czech Republic" 
 
## FEND Memory Game

Mainly the purpose of the little game is reflected in a set of rules:
-clicking the cards
-matching the pairs
-recording the moves, time and star points
-providing the final stats of the game

## The project is splitted between:
-html: P3_index.html
-CSS: css_app.css
-JS script: app.js

## Technologies Used:
HTML5
CSS3
Vanilla JavaScript
FontAwesome
Icons that contain real images between the countries that I lived in till present times :Czech Republic and Romania(my home country).
As a disclaimer, the images used for the flipping cards pertain to the sources cited on the page too.


#Game Rules explained in more detail

###Having the final end window with the finish of the game:
You finish the game when you matched all 10 pairs.

###Flipping  the cards and matching them
Each possible first 2 cards are clicked and then are compared in order to decide for matching or not.
If they are not motched then they are flipped back and then the searching of the pairs continues with other 2 cards.

###Recording the moves, clock and stars
Every step you make is recorded while the time passes too.
The numbers of the moves are connected to the number of "earth stars"(you start with 3) that you lose as you make more and more moves.
You can track all of this in real time during the game.

The treshold is set a reasonable way (2 guess chances per each pair)+ a margin of 5 moves.When the number of moves is between 25 and 35 the number of "earth stars" goes to 2 and further the stars will remain to 1. 
The clock will stop once you matched all the pairs and you have the scoring of your game, which by the way will contain the exactly last minute from your game.

###Reset option
You can reset the game at any time by clicking on the reset icon.This will reshuffle the cards, restart the time and reset the moves and your "earth stars".

###Finish window
This will reflect the short description of your moves, time and stars and a short message dor the user.
Also one will have other 2 buttons to restart a new game("Try it again!" button) or to close the finish window and have a look on the matrix of pics ("See you next time buddy! :)" button). 

#Author
Created by Georgiana-Ancuta Gava (Anca) for an Udacity project (FEND Nanodegree).

###Note: The idea regarding a short code part about how the time is displayed and also the open cards separated array that is replaced with each matching trial, pertains to Matthew Cranford who gave me some inspiration and challenged me even more my further logic into achivieng my personal vision of how the game actually could work, depending on my own game framework.
(his outside work : https://github.com/MatthewCranford/fend-project-memory-game/tree/162fff98b15e3d9f6afd98034e3415e1049b0d96)

