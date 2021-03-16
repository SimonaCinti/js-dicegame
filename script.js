'use strict';

/**
 * Variables
 */

const showModal = document.querySelector('.show-modal');
const modal = document.querySelector('.modal-tutorial');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');


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
