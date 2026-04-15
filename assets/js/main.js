// Navigation
const nav = document.querySelector("#navigation");
nav.innerHTML += `
    <a href="" class="nav-logo-link">
        <img src="./assets/images/Logo.png" alt="Logo" class="nav-logo" />
    </a>
    <ul class="nav-left">
        <li>
            <a href="./about.html" class="nav-link rounded-none">About Me</a>
        </li>
        <li>
            <a href="./services.html" class="nav-link rounded-none">Services</a>
        </li>
        <li>
            <a href="./projects.html" class="nav-link rounded-none">Projects</a>
        </li>
        <li><a href="#" class="nav-link rounded-none">Blog</a></li>
        <li id="nav-button">
            <a href="" class="button button-primary rounded-none">Get in Touch</a>
        </li>
    </ul>
    <div class="ham-menu">
        <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            />
            >
        </svg>
    </div>
`;

// Hamburger Menu
const ham_menu = document.querySelector(".ham-menu");
const nav_links = document.querySelector(".nav-left");

ham_menu.addEventListener("click", () => {
    ham_menu.classList.toggle("active");
    nav_links.classList.toggle("active");    
})


