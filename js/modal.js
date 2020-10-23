/*Modal map*/

const mapButton = document.querySelector(".contacts-map");
const mapModal = document.querySelector(".modal-map");
const mapClose = mapModal.querySelector(".modal-close");

mapButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapModal.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapModal.classList.contains("modal-show")) {
        evt.preventDefault();
        mapModal.classList.remove("modal-show");        
      }
    }
  });


/*Modal feedback*/
const feedbackButton = document.querySelector(".contacts-button");
const feedbackModal = document.querySelector(".modal-feedback");
const feedbackClose = feedbackModal.querySelector(".modal-close");
const feedbackUsername = feedbackModal.querySelector("[name=username]");
const feedbackForm = feedbackModal.querySelector(".feedback-form");
const feedbackEmail = feedbackModal.querySelector("[name=email]");
const feedbackMessage = feedbackModal.querySelector("[name=message]");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("username");
} catch (err) {
  isStorageSupport = false;
}


feedbackButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackModal.classList.add("modal-show");
    
    if (storage) {
        feedbackUsername.value = storage;
        feedbackEmail.focus();
    } else {
        feedbackUsername.focus();
        }
});

feedbackClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedbackModal.classList.remove("modal-show");
    feedbackModal.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function(evt) {
    if (!feedbackUsername.value || !feedbackEmail.value || !feedbackMessage.value) {
    evt.preventDefault();
    feedbackModal.classList.remove("modal-error");
    feedbackModal.offsetWidth = feedbackModal.offsetWidth;
    feedbackModal.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
        localStorage.setItem("username", feedbackUsername.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (feedbackModal.classList.contains("modal-show")) {
        evt.preventDefault();
        feedbackModal.classList.remove("modal-show");
        feedbackModal.classList.remove("modal-error");
      }
    }
  });