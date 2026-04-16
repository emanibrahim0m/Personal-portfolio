// Navigation
const nav = document.querySelector("#navigation");
nav.innerHTML += `
    <a href="./index.html" class="nav-logo-link">
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
            <a href="./contact.html" class="button button-primary rounded-none">Get in Touch</a>
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

// Logos Section 
const logos = document.querySelector(".logo-componant");
if (logos) {
logos.innerHTML += `
  <h6 class="logo-componant-header">Tools I work with</h6>
  <div class="logos-icons">
    <img
      class="tool-logo"
      src="./assets/images/logos/html-css-logo.jpg"
      alt="Html css logo"
    />
    <img
      class="tool-logo"
      src="./assets/images/logos/sql-server-logo.jpg"
      alt="sql server logo"
    />
    <img
      class="tool-logo"
      src="./assets/images/logos/react-logo.jpg"
      alt="react logo"
    />
    <img
      class="tool-logo"
      src="./assets/images/logos/javascript-logo.jpg"
      alt="javascript logo"
    />
    <img
      class="tool-logo"
      src="./assets/images/logos/c logo.jpg"
      alt="C# logo"
    />
  </div>`}

// Get In Touch Section
const contact = document.querySelector(".getintouch-section")
if (contact) {
contact.innerHTML = `
<section class="a-s-hero  contact-extra rounded-corner">
  <div class="a-s-hero-left flex-column">
    <span class="tag text-tag rounded-none">Get in touch</span>
    <h2 class="a-s-hero-head">
      Lets work together
    </h2>
    <p class="getintouch-body">
      Ready to transform your brand's digital presence and unlock the 
      full potential of social media marketing? Reach out today, and 
      let's start crafting your success story together.
    </p>
    <div class="a-s-hero-buttons">
      <button class="button button-primary rounded-none">
        Get in Touch
      </button>
      <button class="button button-secondary rounded-black">
        Book a call
      </button>
    </div>
  </div>
  <img
    src="./assets/images/Diff section imgs/Get it touch image.png"
    alt=""
    class="getintouch-img rounded-corner"
  />
</section>
`}

// Footer
const footer = document.querySelector(".footer-container");
footer.innerHTML = `
      <footer>
        <div class="footer-right flex-column">
          <a href="./index.html" class="footer-logo-link">
            <img src="./assets/images/Logo.png" alt="Logo" class="footer-logo" />
          </a>
          <div class="footer-newsletter flex-column rounded-corner">
            <label for="newsletter-email" class="footer-form-heading"
              >Get Technical Updates
            </label>
            <form action="" class="footer-form">
              <input
                id="newsletter-email"
                type="email"
                name="email"
                class="footer-input rounded-black"
                placeholder="Enter your email"
                maxlength="256"
                requiredf
              />
              <button type="submit" class="button button-primary rounded-none">
                Subscribe
              </button>
            </form>
            <p class="footer-text">
              Subscribe for deep dives into .NET architecture, C# development
              tips, and my latest full-stack project builds.
            </p>
          </div>
        </div>
        <div class="footer-left">
          <div class="footer-link-list flex-column">
            <h6 class="footer-heading">Quick Links</h6>
            <a href="./about.html" class="footer-link">About Me</a>
            <a href="./services.html" class="footer-link">Services</a>
            <a href="./projects.html" class="footer-link">Projects</a>
            <a href="./contact.html" class="footer-link">Contact Me</a>
          </div>
          <div class="footer-link-list flex-column">
            <h6 class="footer-heading">Contact</h6>
            <a href="tel: +201069771169" class="footer-link">0106 9771 169</a>
            <a href="mailto:emanibrahim0m@gmail.com" class="footer-link">emanibrahim0m<br />@gmail.com</a>
            <a href="https://maps.app.goo.gl/CawL6iEPhDVqs5SQ9" class="footer-link">Cairo, Egypt</a>
          </div>
          <div class="footer-link-list flex-column">
            <h6 class="footer-heading">Follow Me</h6>
            <a href="https://www.linkedin.com/in/emanibrahim0m" class="social-link">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.339 18.338V9.17H5.337v9.168h3.002zM7.003 8.01a1.745 1.745 0 1 0 0-3.49 1.745 1.745 0 0 0 0 3.49zM18.338 18.338V12.89c0-2.673-.574-4.731-3.703-4.731-1.503 0-2.511.825-2.922 1.606h-.043V8.342h-2.885v9.996h3.004v-4.795c0-1.263.239-2.485 1.806-2.485 1.544 0 1.566 1.444 1.566 2.566v4.714h3.001z"
                  fill="currentColor"
                />
              </svg>
              LinkedIn
            </a>
            <a href="https://github.com/emanibrahim0m" class="social-link"
              ><svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://w3.org"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"
                  fill="currentColor"
                />
              </svg>
              GitHub</a
            >
          </div>
        </div>
      </footer>
      <div id="end">
        <hr style="margin-top: 3rem" />
        <p>© 2026 EI - Licensing</p>
        <p>Designed by Influx® </p>
      </div>
`
