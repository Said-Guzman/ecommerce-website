const dropdown = document.querySelector(".dropdown") // looks for the dropdown class
const navMenu = document.querySelector(".nav-menu") // looks for the nav-menu

dropdown.addEventListener("click",() =>{
    dropdown.classList.toggle("active")
    navMenu.classList.toggle("active");
}) // onclick it'll toggle the active portion of the menu, activating the dropdown and navmmenu

const swiper = new swiper('.swiper', {
    // Optional parameters
    loop: false, //slider will loop
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination', // page indicator
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }); // no explanation for this  it's self explanitory..... Buttons 






