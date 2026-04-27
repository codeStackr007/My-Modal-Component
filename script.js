"use strict";

// ====================================
// PROJECT #2: Modal Window
// Started: 25/04/26 | 23:06
// Completed: 27/04/26 | 01:00
// ====================================

// 1. DOM CACHING (SELECTING ELEMENTS)
// I grab the modal, overlay, close button, title, and text once and store them.
// I do this so I don’t have to keep searching the DOM every time — it’s faster.
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".modal__btn-close");
const modalTitle = document.querySelector(".modal__title");
const modalText = document.querySelector(".modal__text");

// I use querySelectorAll for the open buttons because there are multiple.
// That gives me a NodeList (like an array) so I can loop through them easily.
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

// 2. HELPER FUNCTIONS
// I keep the open/close logic in small reusable functions.
// openModal shows the modal by removing the 'hidden' class.
// closeModal hides it by adding the 'hidden' class back.
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// 3. THE ENGINE (LOOPING)
// I loop through each button in the NodeList.
// For each one, I add a click listener so it can open the modal with its own content.
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", function () {
    // DATA GRAB: I pull the custom data attributes from the clicked button.
    // These come from HTML like data-title="About Me" and data-text="I am..."
    const titleFromHTML = btnsOpenModal[i].dataset.title;
    const textFromHTML = btnsOpenModal[i].dataset.text;

    // INJECTION: I put those values into the modal’s title and text.
    // I use textContent for plain text, innerHTML for text with tags (<b>, <i>) to actually render, not just show up as raw text. That way bold and italics work.
    modalTitle.textContent = titleFromHTML;
    modalText.innerHTML = textFromHTML;

    // Finally, I call openModal() to display the modal.
    openModal();
  });
}

// 4. CLOSING LISTENERS
// I hook up the close button (the “X”) and the overlay itself to closeModal.
// That way, clicking either of them will hide the modal.
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// 5. GLOBAL KEYBOARD LISTENER
// I add a global listener on the whole document for keydown events.
// If the user presses Escape AND the modal is currently visible, I close it.
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
