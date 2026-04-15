// Data Structure
const projects_cards = [{
    image: `./assets/images/temporary img.jpg`,
    name: `Company Profile Website`,
    text: `ME Company`,
    tool1: `JavaScript`,
    tool2: `CSS`,
    tool3: `HTML`,
},{
    image: `./assets/images/temporary img.jpg`,
    name: `Personal Portfolio`,
    text: `Responsive website`,
    tool1: `JavaScript`,
    tool2: `CSS`,
    tool3: `HTML`,
},{
    image: `./assets/images/temporary img.jpg`,
    name: `Lorem Ipsum`,
    text: `Lorem Ipsum`,
    tool1: `Tool`,
    tool2: `Tool`,
}]


// loop through data array
let project_card_html = '';
projects_cards.forEach((card) => {
    project_card_html += `
        <article class="project-card  rounded-corner">
            <a href="" class="project-link flex-column">
                <img src="${card.image}" alt="" class="project-img  rounded-corner" />
                <div class="project-description flex-column">
                    <div class="project-text-body">
                        <h4 class="project-name">${card.name}</h4>
                        <p class="project-text">ME Company</p>
                        <div class="tags-container">
                            <span class="tag tool-tag rounded-none">${card.tool1}</span>
                            <span class="tag tool-tag rounded-none">${card.tool2}</span>
                            <span class="tag tool-tag rounded-none">${card.tool3}</span>
                        </div>
                    </div>
                    <span href="" class="button-link">View project
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 256 256"
                            >
                            <path
                            fill="currentColor"
                            d="M128 26a102 102 0 1 0 102 102 102.2 102.2 0 0 0-102-102Zm0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90Zm34-118v48a6 6 0 0 1-12 0v-33.5l-45.8 45.7a5.9 5.9 0 0 1-8.4-8.4l45.7-45.8H108a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6Z"
                            />
                        </svg>
                    </span>
                </div>
            </a>
        </article>
`})
    
const project_cards = document.querySelector(".js-project-cards-container");
project_cards.innerHTML += project_card_html;