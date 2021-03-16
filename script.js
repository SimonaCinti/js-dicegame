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

const score0Player = document.getElementById('score-0');
const score1Player = document.getElementById('score-1');
const diceImg = document.querySelector('.dice');

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
    console.log(dice);

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
})