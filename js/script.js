// ======================================================
// -- Preloader Functionalities
// ======================================================

$(window).on("load", function () {
  "use strict";

  // Preloader Fadeout
  $("#preloader").delay(350).fadeOut("slow");
});


// =======================================================
// -- Nav Menu Functionality
// =======================================================

const nav = document.querySelector("nav");

window.onscroll = function() {
  if(document.documentElement.scrollTop > 20) {
    nav.style.padding = "10px 0";
  } else {
    nav.style.padding = "20px 0";
  }
}


// =======================================================
// -- Mobile Nav Menu Functionality
// =======================================================

const navMenu = document.querySelector(".mobile-nav-menu");
const navMenuBtn = document.querySelector(".nav-menu-btn");
const closeMenuBtn = document.querySelector(".nav-close-btn");

// Nav Toggle Function
const navToggleFunc = () => {
    navMenu.classList.toggle("active");
};


// =======================================================
// -- Hero Section Typing Functionality
// =======================================================

var pauseTyping = "^3000";

var typed = new Typed(".typing", {
  strings: [`Web Expert${pauseTyping}`, `Coder${pauseTyping}`, `Programmer${pauseTyping}`],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});


// =======================================================
// -- Theme Button Functionality
// =======================================================

const themeBtn = document.querySelectorAll(".theme-btn");

for(let i = 0; i < themeBtn.length; i++) {
    themeBtn[i].addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      document.body.classList.toggle('dark-theme');

      for(let i = 0; i < themeBtn.length; i++) {
          themeBtn[i].classList.toggle("light");
          themeBtn[i].classList.toggle("dark");
          // localStorage.setItem("theme-btn", themeBtn[i].classList.value.slice(27));
      }

      // localStorage.setItem("theme-name", document.body.classList.value);
    })
}


// document.body.classList.add(localStorage.getItem("theme-name"));


// =======================================================
// -- Load More Button Functionality
// =======================================================

const loadMoreBtn = document.querySelector(".load-btn");
const seeLessBtn = document.querySelector(".less-btn");
const loadBlogs = document.querySelector(".load-blogs");
const newsletterDiv = document.querySelector(".newsletter");

loadMoreBtn.addEventListener('click', (e) => {
  e.target.style.display = "none"
  loadBlogs.style.display = "block"
  seeLessBtn.style.display = "block"
  // newsletterDiv.style.marginBottom = "48px"
})

seeLessBtn.addEventListener('click', (e) => {
  e.target.style.display = "none"
  loadBlogs.style.display = "none"
  loadMoreBtn.style.display = "block"
})


// ==========================================================
// -- Get Year
// ==========================================================

const date = new Date();
const yearText = document.getElementById("year");

let year = date.getFullYear();
yearText.innerHTML = year;