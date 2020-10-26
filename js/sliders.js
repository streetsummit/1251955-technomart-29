/* Offers-slider */

var slides = document.querySelectorAll(".slider-slide");
var currentSlide = 0;
var next = document.querySelector(".slider-button--next");
var previous = document.querySelector(".slider-button--prev");

var dotButtons = document.querySelectorAll(".slider-button--dot");
var currentDotButton = currentSlide;

function goToSlide(n) {
    slides[currentSlide].className = "slider-slide";
    dotButtons[currentSlide].className = "slider-button--dot";

    currentSlide = (n+slides.length)%slides.length;

    slides[currentSlide].className =  "slider-slide slide-current";
    dotButtons[currentSlide].className = "slider-button--dot dot-current";
}

next.onclick = function() {
    goToSlide(currentSlide+1);
}

previous.onclick = function() {
    goToSlide(currentSlide-1);
}

/* Services slider */

var services = document.querySelector(".services");
var servicesContent = services.querySelectorAll(".services-tab-content");
var servicesTabs = services.querySelectorAll(".services-tab");


servicesTabs.forEach((item, i) => {
  item.addEventListener("click", (evt) => {
    evt.preventDefault();

    servicesTabs.forEach(item => {
      item.classList.remove("services-tab--current");

      servicesContent.forEach(item => {
        item.classList.remove("services-tab-content--current");
      });
    });

    item.classList.add("services-tab--current");
    servicesContent[i].classList.add("services-tab-content--current");
  });
});