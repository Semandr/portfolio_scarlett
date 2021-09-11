const hamburgerContainer = document.querySelector(".nav__content");
const hamburger = document.querySelector(".hamburger__content");
const links = document.querySelectorAll(".nav__item");

hamburger.addEventListener("click", () => {
  hamburgerContainer.classList.toggle("clicked");
});
