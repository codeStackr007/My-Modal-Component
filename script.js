"use strict";

// ====================================
// PROJECT #2: Modal Window
// Started: 25/04/26 | 23:06
// Completed: 27/04/26 | 01:00
// ====================================

// 1. DOM CACHING (SELECTING ELEMENTS)
// I grabbed the modal, overlay, and close button and stored them in variables.
// This is better than searching the document every time I need them.
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".modal__btn-close");
const modalTitle = document.querySelector(".modal__title");
const modalText = document.querySelector(".modal__text");

// querySelectorAll creates a NodeList (like an array) for all three buttons
// with the same class. I do this so I don't have to select them one by one.
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

// 2. HELPER FUNCTIONS
// These functions handle the "Action" of opening and closing.
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// 3. THE ENGINE (LOOPING)
// I use a for-loop to cycle through the NodeList.
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", function () {
    // DATA GRAB: I pull the specific 'title' and 'text' from the
    // HTML data-attributes of the button that was actually clicked.
    const titleFromHTML = btnsOpenModal[i].dataset.title; // reads data-title="About Me"
    const textFromHTML = btnsOpenModal[i].dataset.text; // reads data-text="I am a dedicated..."

    // INJECTION: I take the grabbed data and put it into the modal tags.
    modalTitle.textContent = titleFromHTML;

    // .innerHTML allows the <b> and <i> tags from the HTML to work perfectly.
    modalText.innerHTML = textFromHTML;

    // Once the text is swapped, I call the function to show the modal.
    openModal();
  });
}

// 4. CLOSING LISTENERS
// I attached the closeModal function to both the (X) button and the overlay.
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// 5. GLOBAL KEYBOARD LISTENER
// I told the document to listen for the 'Escape' key globally.
document.addEventListener("keydown", function (e) {
  // If 'Escape' is pressed and the modal is NOT hidden, close it.
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
