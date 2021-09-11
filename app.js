const hamburgerContainer = document.querySelector(".nav__content");
const hamburger = document.querySelector(".hamburger__content");
const links = document.querySelectorAll(".nav__item");

hamburger.addEventListener("click", () => {
  hamburgerContainer.classList.toggle("nav__content_clicked");

  links.forEach((link) => {
    link.classList.toggle("nav__item_fade");
  });
});
