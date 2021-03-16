'use strict';

/**
 * Variables for Modal
 */

const showModal = document.querySelector('.show-modal');
const modal = document.querySelector('.modal-tutorial');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');


/**
 * Variables for buttons
 */

const btnNew = document.querySelector('.btn-play');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');

/**
 * Variable for starting game
 */

const player0El = document.querySelector('.player-0');
const player1El = document.querySelector('.player-1');
const score0Player = document.getElementById('score-0');
const score1Player = document.getElementById('score-1');
const current0El = document.getElementById('current-0');
const current1El = document.getElementById('current-1');
const diceImg = document.querySelector('.dice');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

score0Player.textContent = 0;
score1Player.textContent = 0;
diceImg.classList.add('none');

/**
 * Tutorial
 */
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    console.log('click');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    console.log('click');
};

showModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);

/**
 * Roll the dice
 */

btnRoll.addEventListener('click', function(){

    // generate a random roll from 1 to 6
    const dice = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

    // display the roll

    diceImg.classList.remove('none');

    const diceRolled = document.getElementById('dice-rolled');
    switch (dice) {
        case 1: 
        diceRolled.className = 'fas fa-dice-one';
        break;
        case 2: 
        diceRolled.className = 'fas fa-dice-two';
        break;
        case 3: 
        diceRolled.className = 'fas fa-dice-three';
        break;
        case 4: 
        diceRolled.className = 'fas fa-dice-four';
        break;
        case 5: 
        diceRolled.className = 'fas fa-dice-five';
        break;
        case 6: 
        diceRolled.className = 'fas fa-dice-six';
        break;
    }
    console.log(diceRolled);
    
    // check if rolled 1: if true, go to next player and delete score

    if(dice !== 1){
        //Add dice to current score
        currentScore +=  dice;
        document.getElementById(`current-${activePlayer}`).textContent = currentScore;
    }else{
        // switch to other player
        document.getElementById(`current-${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        player0El.classList.toggle('player-active');
        player1El.classList.toggle('player-active');
    }
})