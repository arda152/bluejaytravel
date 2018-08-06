// DOM elements to use in handlers
var burger = document.querySelector(".navbar-burger");
var hero = document.getElementById("intro");
var menu = document.querySelector(".navbar-menu");
var navbar = document.querySelector(".navbar")
var placeholderNav = document.querySelector("#placeholderNav");
var destinationTabs = document.querySelectorAll("#destinations .tabs li");
var destinationColumns = document.querySelectorAll("#destinations .column")

// Category will be used with interactive tabs
var activeCategory = "tab-all";

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
    Creating the illusion of sticky positioning
    Because height of hero is responsive, it has to be calculated every time*/
    if (window.pageYOffset >= hero.clientHeight) {
        navbar.classList.add("is-fixed-top");
        /* fixing the navbar removes it from the positioning flow
        This makes the page "skip",
        visible and disturbing when scrolling slowly
        To solve the problem, a placeholder div with the
        same heigth is added when navbar is fixed */
        placeholderNav.classList.remove("hide");
    } else {
        navbar.classList.remove("is-fixed-top");
        placeholderNav.classList.add("hide");
    }
});

// Interactive trip selector using hide class and tabs
for (var i = 0; i < destinationTabs.length; i++) {
    // Each destination tab sets a new category
    destinationTabs[i].addEventListener("click", function(e) {
        document.querySelector("#" + activeCategory).classList.remove("is-active");
        this.classList.add("is-active");
        activeCategory = this.id;
        // The "all" button displays every columns
        if (activeCategory == "tab-all") {
            showTrips();
        } else {
            hideCategories(this.id);
        }
    });
}

// Hides categories using the id from the active tab
// String operations change the tab id to correct class values for query
function hideCategories(tabId) {
    var selectedCategory = tabId.replace("tab", "trip");
    for (var i = 0; i < destinationColumns.length; i++) {
        // hide sets display to none
        destinationColumns[i].classList.add("hide");
    }
    var selectedTabs = document.querySelectorAll("#destinations " + "." + selectedCategory);
    for (var i = 0; i < selectedTabs.length; i++) {
        // hide sets display to none
        selectedTabs[i].classList.remove("hide");
    }
}

// Shows every trip when the "all" button is clicked
function showTrips() {
    var allTrips = document.querySelectorAll("#destinations .column");
    for (var i = 0; i < allTrips.length; i++) {
        allTrips[i].classList.remove("hide");
    }
}
