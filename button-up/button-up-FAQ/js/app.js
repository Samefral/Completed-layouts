let btnUp = document.querySelector(".button-up");

window.onscroll = function () {
  if (pageYOffset > 1000) {
    btnUp.classList.remove("hidden");
  } else {
    btnUp.classList.add("hidden");
  }
};

btnUp.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
