// DOM elements to use in handlers
var burger = document.querySelector(".navbar-burger");
var hero = document.getElementById("intro");
var menu = document.querySelector(".navbar-menu");
var navbar = document.querySelector(".navbar")

// Burger menu expands the hidden navbar items
burger.addEventListener("click", function() {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
});

// Sticky navbar using Bulma classes
window.addEventListener("scroll", function() {

    /* Sticky positioning didn't work well with Bulma
    This event listener solved the problem
    Navbar is always under the first hero
    If user scrolls past the hero, navbar becomes fixed
    Creating the illusion of sticky positioning */
    if (window.pageYOffset >= hero.clientHeight) {
        navbar.classList.add("is-fixed-top");
    } else {
        navbar.classList.remove("is-fixed-top");
    }
});