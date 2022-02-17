'use strict';
// Selecting element from HTML & CSS
let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');
let score0El = document.getElementById('score--0');
let score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const newBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
let current0El = document.getElementById('current--0')
let current1El = document.getElementById('current--1')

// Modify element with DOM
let playing,currentScore,activePlayer,scores

const init = function(){
scores= [0,0]
currentScore = 0;
activePlayer = 0;
playing = true

score0El.textContent = 0
score1El.textContent = 0
current0El.textContent = 0
current1El.textContent = 0


diceEl.classList.add('hidden');
player0El.classList.remove('player--winner')
player1El.classList.remove('player--winner')
player0El.classList.add('player--active')
player1El.classList.remove('player--active')
}
init()



const secondPlayer = function(){
  document.getElementById(`current--${activePlayer}`).textContent =0;
  currentScore = 0
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active')
  player1El.classList.toggle('player--active')

}

const currentToZero = function(){
  document.getElementById(`current--${activePlayer}`).textContent = 0
  activePlayer = activePlayer === 0 ?1:0;
  document.getElementById(`current--${activePlayer}`).textContent = 0
}

////Creating Function and block of codes to be executed

// Roll dice function
rollBtn.addEventListener('click', function () {
  if(playing){
  let dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !==1) {
    
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
    else {
    
      secondPlayer()
  }
}
});

holdBtn.addEventListener('click', function () {
  if(playing){ 
  scores[activePlayer] +=currentScore
    console.log(scores[activePlayer])
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]


    if(scores[activePlayer]>=20){
      playing = false
      diceEl.classList.toggle('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    }


   secondPlayer()
  }
})

newBtn.addEventListener('click',init)




