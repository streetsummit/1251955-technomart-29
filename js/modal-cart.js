/*Modal add to cart*/

const addCartButton = document.querySelectorAll(".button-buy");
const addCartModal = document.querySelector(".modal-addcart");
const addCartClose = addCartModal.querySelector(".modal-close");
const modalContinue = addCartModal.querySelector(".modal-continue");

for (var index = 0, len = addCartButton.length; index < len; ++index) {
        addCartButton[index].addEventListener("click", function(evt) {
        evt.preventDefault();
        addCartModal.classList.add("modal-show");
    });
}

addCartClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    addCartModal.classList.remove("modal-show");
});

modalContinue.addEventListener("click", function(evt) {
    evt.preventDefault();
    addCartModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (addCartModal.classList.contains("modal-show")) {
        evt.preventDefault();
        addCartModal.classList.remove("modal-show");        
      }
    }
  });