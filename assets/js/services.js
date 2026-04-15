
// Data Structure
const services_cards = [{
    image: './assets/images/service imgs/admin-website.jpg',
    head: 'Custom Web Applications',
    description: `I design and build robust web applications from the ground up
                  using ASP.NET Core and C#. By focusing on clean architecture and
                  maintainable code, I ensure your digital product has a solid
                  foundation that can grow alongside your business.`

}, {
    image: './assets/images/service imgs/cloud computing.webp',
    head: 'API Development & Integration',
    description: `Modern businesses rely on connected systems. I specialize in
                  building secure RESTful APIs that allow your applications to
                  communicate effortlessly with third-party services. From payment
                  gateway integrations to internal data synchronization, I ensure
                  your software ecosystem is unified and efficient.`
}, {
    image: './assets/images/service imgs/DB tables.png',
    head: 'Database Design',
    description: `Customer interaction is the heartbeat of online presence. Our
                  innovative techniques foster an environment that keeps your
                  audience talking and engaging with your brand. We're in the
                  business of building relationships, not just follower counts.`
}]


// loop through data array
let service_card_html = '';
services_cards.forEach((card) => {
    service_card_html += `
        <article class="service-card rounded-corner-black">
            <div class="service-card-name js-service-card-name">
                <p class="service-name">${card.head}</p>
                <span class="accordion-icon">
                    <svg class="rounded-none"
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
            <div class="service-card-body js-service-card-body">
               <img
                src="${card.image}"
                alt=""
                class="service-img rounded-corner"
                />
                <div class="service-card-content flex-column">
                    <h4 class="service-head">${card.head}</h4>
                    <p class="service-description">${card.description}</p>
                    <button class="button button-primary rounded-none">Learn More</button>
                </div>
            </div>
        </article>`
})

const services_section = document.querySelector(".js-services");
services_section.innerHTML += service_card_html;