'use strict';

// add event in element

let addEventOnElem = function(elem, type, callback){
    if (elem.length > 1){
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}



// Navbar toggle

let navbar = document.querySelector("[data-navbar]");
let navbarLinks = document.querySelectorAll("[data-nav-link]");
let navToggler = document.querySelector("[data-nav-toggler]");

let toggleNavbar = function () {
    navbar.classList.toggle("active");
    this.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

let closeNavbar = function () {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);


// Search Bar Toggle

let searchBar = document.querySelector("[data-search-bar]");
let searchTogglers = document.querySelectorAll("[data-search-toggler]");
let overlay = document.querySelector("[data-overlay]");

let toggleSearchBar = function () {
    searchBar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");
}

addEventOnElem(searchTogglers, "click", toggleSearchBar);