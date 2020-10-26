/*Modal add to cart*/

var addCartButton = document.querySelectorAll(".button-buy");
var addCartModal = document.querySelector(".modal-addcart");
var addCartClose = addCartModal.querySelector(".modal-close");
var modalContinue = addCartModal.querySelector(".modal-continue");

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