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
const loadBlogs = document.querySelector(".load-blogs");
const newsletterDiv = document.querySelector(".newsletter");

loadMoreBtn.addEventListener('click', (e) => {
  e.target.style.display = "none"
  loadBlogs.style.display = "block"
  newsletterDiv.style.marginBottom = "48px"
})