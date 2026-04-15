// Data Structure
const process_cards = [{
    heading: `Discovery & Architectural Planning`,
    text:  `We start by defining your business requirements. Much like an
            architectural blueprint, I map out the system requirements and
            choose the right tools within the Microsoft Stack to ensure a solid
            foundation.`
}, {
    heading: `Database & System Design`,
    text: `I design optimized SQL Server schemas and relational data structures.
           This stage ensures that your data is organized, secure, and ready for 
           high-performance querying.`
}, {
    heading: `Backend Logic & API Development`,
    text: `Using ASP.NET Core and C#, I build the "engine" of your application.
            This includes creating secure RESTful APIs that allow for seamless
            integration with other services.`
}, {
    heading: `Frontend Implementation`,
    text: `I bridge the gap between complex backend logic and the user. Using
            React and modern CSS, I create intuitive, responsive interfaces that
            make the application easy to navigate.`
}, {
    heading: `Testing, Deployment & Support`,
    text: `Before launch, I perform rigorous testing to ensure code efficiency
            and security. Once live, I provide the necessary support to ensure
            your application remains stable and scalable.`
}]

// loop through data array to add variables
let process_card_html = '';
process_cards.forEach((card) => {
process_card_html += `
    <article class="process-card rounded-none">
        <div class="process-card-head">
            <h5 class="process-card-heading">${card.heading}</h5>
            <span class="accordion-icon "
                ><svg class="rounded-none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M12 5V19M5 12H19"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                />
                </svg>
            </span>
        </div>
        <p class="process-card-body"> ${card.text} </p>
    </article>`
})

// 
const process = document.querySelector(".js-process-container");
process.innerHTML += process_card_html;