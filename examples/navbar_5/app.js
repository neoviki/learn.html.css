const toggle = document.querySelector(".toggle");
const navLinks = document.querySelector(".nav-links");

function toggelMenu(){
    if(navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        toggle.querySelector("a").innerHTML = "<img src='./menu.png' alt='Menu' width='20' height='20'>"
    } else {
        navLinks.classList.add("active");
        toggle.querySelector("a").innerHTML = "<img src='./close-button.png' alt='Close' width='20' height='20'>"
    }
}

toggle.addEventListener('click', toggelMenu, false);