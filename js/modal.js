/*Modal map*/

var mapButton = document.querySelector(".contacts-map");
var mapModal = document.querySelector(".modal-map");
var mapClose = mapModal.querySelector(".modal-close");

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
var feedbackButton = document.querySelector(".contacts-button");
var feedbackModal = document.querySelector(".modal-feedback");
var feedbackClose = feedbackModal.querySelector(".modal-close");
var feedbackUsername = feedbackModal.querySelector("[name=username]");
var feedbackForm = feedbackModal.querySelector(".feedback-form");
var feedbackEmail = feedbackModal.querySelector("[name=email]");
var feedbackMessage = feedbackModal.querySelector("[name=message]");

var isStorageSupport = true;
var storage = "";

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