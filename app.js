
/* Create a list that holds all of your cards */

/* I will have the array (of objects) of images attached here together,
I won't use fontawesome svgs for the matrix */
const cardsArray = [{
  'name': 'karlstejnCastle',
  'img': 'img_mem_game_small/Karlstejn_Castle_just_a_pack.jpg'
}, {
  'name': 'sunsetPrague',
  'img': 'img_mem_game_small/Prague_sunset_just_a_pack.jpg'
}, {
  'name': 'charlesBridge',
  'img': 'img_mem_game_small/Charles_Bridge_Prague_just_a_pack.jpg'
  }, {
  'name': 'ceskyKrumlov',
  'img': 'img_mem_game_small/cesky_krumlov_just_a_pack_small.jpg'
  }, {
  'name': 'transfagarasanRoad',
  'img': 'img_mem_game_small/Transfagarasan_Romania__small.jpg'
  }, {
  'name': 'pragueStreets',
  'img': 'img_mem_game_small/streets_of_Prague_streets.jpg'
}, {
  'name': 'ironGates',
  'img': 'img_mem_game_small/IRON_GATES_Romania_free_source.jpg'
}, {
  'name': 'pelesCastle',
  'img': 'img_mem_game_small/peles_castle_Romania_free_source.jpg'
}, {
  'name': 'suceava',
  'img': 'img_mem_game_small/Suceava_small_Romania_pitoreasca.jpg'
}, {
  'name': 'riegrovySady',
  'img': 'img_mem_game_small/Riegrovy_Sady_Prague_just_a_pack_small.jpg'
}];


/*
* Display the cards on the page
*   - shuffle the list of cards using the provided "shuffle" method below
*   - loop through each card and create its HTML
*   - add each card's HTML to the page*/

/*My notes*/

/* document.querySelector selects the first element in html with that class*/
/* I took the cardsDeck class for the deck itself
and constructed the variable that will store the pairs of cards after are created in HTML too*/

/* set the clock,stars and moves - the constant game info taht appears next to the grid*/
const startButton=document.querySelector(".start-game-btn");
let minutesTime=0;
let secondsTime=0;
let moves=0;
let stars=3;
// let timeIndex;
// let timeStep;
startButton.addEventListener('click', event => {
   time=setInterval(timer,1000);
  document.querySelector('.layer-wrapper').classList.add('hidden');
  document.querySelector('.start-window-popup').classList.add('hidden');
  document.querySelector('.start-game-btn').classList.add('clicked');
  // document.querySelector('.end-window-popup').classList.add('hidden');
  generateCards();

});

function timer() {
  const visualClock=document.querySelector('.visual-clock');
  secondsTime++;
  /* I wanted to have teh 2 digits format :I was inspired by nice MatthewCranford's approach*/
  if(secondsTime % 60<10) {
    seconds=('0'+ secondsTime%60).toString();
  }
    else {
    seconds=(secondsTime%60).toString();
  }

  minutes=Math.floor(secondsTime/60).toString();
  visualClock.textContent=minutes+":"+ seconds;
  // if(minutes>=60) {
  // visualClock.textContent="Buddy, this is way too long...";
  //   clearTimeout(visualClock);
  // }
}

let openCards=[];
let matchedCards=0;
// Shuffle function from http://stackoverflow.com/a/2450976, already here from Udacity
  function shuffle(array) {
     let currentIndex = array.length, temporaryValue, randomIndex;
     while (currentIndex!== 0) {
         randomIndex = Math.floor(Math.random() * currentIndex);
         currentIndex -= 1;
         temporaryValue = array[currentIndex];
         array[currentIndex] = array[randomIndex];
         array[randomIndex] = temporaryValue;
     }
     return array;
}


/* this is the full array with the pairs of cards, shuffled also*/
/*  use concat() because it  concatenates the array itelf with the same array  and you'll have the pairs :) */

//OBS:
/* I took  each card from the shuffled cards pairs array and generate for it the html tag*/
/* I could have used also array.map()
inside of a function and associate the iconCard with the html syntax value stored in another variable
but I chose somth else because of the images behind cards in my case and not fontawesome used */
// shuffledCards.forEach(function(item)


function generateCards() {
  const shuffledCards=shuffle(cardsArray.concat(cardsArray));
  const matrix=document.querySelector(".cardsDeck");
    shuffledCards.forEach(function(item) {
      let name=item.name, img=item.img;
      const iconCard=document.createElement("article");
      iconCard.classList.add("card");
      // iconCard.dataset.name=name;
      // const frontCard=document.createElement("div");
      // frontCard.classList.add("frontFace");
      const backCard=document.createElement("div");
      backCard.classList.add("backFace");
      backCard.dataset.name=name;
      backCard.style.backgroundImage='url('+img+')';

    /* the final appending inside of the html section*/
      matrix.appendChild(iconCard);
      // iconCard.appendChild(frontCard);
      iconCard.appendChild(backCard);
    });
}

/* the Click Event is practically splitted between toggling (switching off/on the card class)
  and matching the pairs(check for the match also) and keeping the cards already opened at the LEVEL of the checked PAIR*/
  document.querySelector(".cardsDeck").addEventListener('click', event => {
    const clickCard=event.target;
    checkCards(clickCard);
  });

  function openedCards(clickCard){
    if( clickCard.classList.contains('card')) {
      // console.log("I am a card!!");
        clickCard.classList.toggle('open');
        clickCard.classList.toggle('show');
        openCards.push(clickCard);
    }
  }


/*
---> first check the single and first flipped card and put it inside of openedCards
then, on the possible pair level (when you touch 2 cards as array length), check the matching
and toggle the new additional class for those 2 cards

---> if they are not a match then make space in openCards for other 2 future cards
then check the matching once you have 2 flipped cards
then also inside here end the game once a  maximum of pairs is obtained */

function checkCards(clickCard) {
    // Prevent cards being checked while timeout in progress
      if(openCards.length<2) {
        if (!openCards.includes(clickCard)) {
        openedCards(clickCard);
      }
      if (openCards.length ===2) {
        countMoves();
        countStars();
        // updateMoves();
        if(openCards[0].firstElementChild.dataset.name===openCards[1].firstElementChild.dataset.name) {
          const maxMatches=10;
          matchedCards++;
          for (let openCard of openCards) {
            openCard.classList.toggle('match');
            openCard.style.pointerEvents='none'; /*was a little bug , but fixed it*/
              if( openCard.classList.contains('match')) {
                openCard.firstElementChild.classList.toggle('flipped');
              }
          }
          if (matchedCards===maxMatches) {
             endGame();
            // console.log('finish');
          }
          else {
            setTimeout(function() {
            openCards=[];},800);
            }
          }
        else {
          // console.log('golire');
            emptyOpenCards();
        }
    }
  }
}

function endGame() {
  clearInterval(time);
  scorePanel();
  bringScorecard();
}

/* bring the score panel above the matrix  */
function bringScorecard() {
  document.querySelector('.end-window-popup').classList.toggle('closed');
}

function countMoves() {
  moves++;
  document.querySelector('.number-steps').textContent=moves;
}
function scorePanel() {
  let timeSpent=document.querySelector('.gameTime');
  let starsGained=document.querySelector('.totalStars');
  let movesMade=document.querySelector('.totalMoves');
  timeSpent.textContent="Your time: "+ minutes+":"+ seconds;
  starsGained.textContent="Your travel stars: "+ stars;
  movesMade.innerHTML=`You made some good steps though: ${moves}`;
}

/* just hit 2 consecutive tresholds for decreasing the "stars"*/
function countStars() {
  if(moves<=25) {
    stars=3;
  } else if(moves>25 && moves<=35) {
    stars=2;
    }
    else {
    stars=1;
      }
  document.querySelector('.number-stars').textContent=stars;
}

/* a kind of reset for the openCards array if the 2 are not matched*/
function emptyOpenCards () {
  setTimeout(function() {
    for (let openCard of openCards) {
      openCard.classList.toggle('open');
      openCard.classList.toggle('show');
    }
    openCards=[];},800);
}

/* reset the class and the cards */
function resetCards () {
    openCards=[];
    matchedCards=0;
    const matrix=document.querySelector('.cardsDeck');
    // const otherCards=document.querySelectorAll('.cardsDeck article');
    // for(let card of otherCards) {
     // card.classList='card';
    matrix.innerHTML="";
    generateCards();
}

function resetMoves () {
  moves=0;
  document.querySelector('.number-steps').innerHTML=`${moves}`;
}

function resetStars () {
  stars=3;
  document.querySelector('.number-stars').innerHTML=`${stars}`;
}

function resetTime () {
    clearInterval(time);
    secondsTime=0;
    const visualClock=document.querySelector('.visual-clock');
    visualClock.textContent='0:00';
}

function resetAll() {
  resetCards();
  resetMoves();
  resetStars();
  resetTime();
  time=setInterval(timer,1000);
}

function replayReset() {
  if(!document.querySelector('.end-window-popup').classList.contains('closed')) {
     bringScorecard();
  }
  resetAll();
}

document.querySelector('.reset').addEventListener('click',replayReset);
document.querySelector('.close').addEventListener('click',bringScorecard);
document.querySelector('.reload').addEventListener('click',replayReset);
const reloadButton=document.querySelector(".reload");
reloadButton.addEventListener('click', event => {
  replayReset();
});
