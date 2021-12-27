let btnUp = document.querySelector(".button-up");

window.onscroll = function () {
  if (window.pageYOffset > 1000) {
    btnUp.classList.remove("hidden");
  } else {
    btnUp.classList.add("hidden");
  }
};

btnUp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
});
