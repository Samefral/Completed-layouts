let cookieNotice = document.querySelector(".cookie-notice");
let cookieCloseBtns = document.querySelectorAll(".cookie-button");
for (let btn of cookieCloseBtns) {
    btn.onclick = () => {
        cookieNotice.style.opacity = 0; 
        setTimeout(() => {
            if (cookieNotice.style.opacity == 0) cookieNotice.remove();
        }, 400);
    }
}