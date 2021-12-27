let upButton = document.querySelector(".up-button");

window.onscroll = function () {
  if (pageYOffset > 950) {
    upButton.classList.add("up-button-show");
  } else {
    upButton.classList.remove("up-button-show");
  }
};

upButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
