const ham_menu = document.querySelector(".ham-menu");
const nav_links = document.querySelector(".nav-left");

ham_menu.addEventListener("click", () => {
    ham_menu.classList.toggle("active");
    nav_links.classList.toggle("active");    
})