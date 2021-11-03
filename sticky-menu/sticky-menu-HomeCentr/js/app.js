let header = document.querySelector(".header");

window.onscroll = function () {
  if (pageYOffset > 1) {
    header.classList.add("header-sticky");
  } else {
      header.classList.remove("header-sticky");
  }
};
