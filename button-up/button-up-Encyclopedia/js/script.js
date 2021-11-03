let upButton = document.querySelector(".up-button");

window.onscroll = function () {
  if (pageYOffset > 150) {
    upButton.classList.add("up-button-show");
  } else {
    upButton.classList.remove("up-button-show");
  }
};

upButton.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
