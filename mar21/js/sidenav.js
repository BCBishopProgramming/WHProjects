var navBtn = document.getElementById("navBtn");
var nav = document.getElementById("nav");

navBtn.addEventListener("click", showNav);

function showNav() {
    navBtn.classList.toggle("active");
    nav.classList.toggle("viewNav");
}

navBtn.addEventListener("");