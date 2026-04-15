function setupAccordion(headerSelector, bodySelector, is_service = false) {
    const headers = document.querySelectorAll(headerSelector);

    headers.forEach((header) => {
        header.addEventListener("click", () => {
            const card = header.parentElement;
            const body = card.querySelector(bodySelector);
            const isActive = body.classList.contains("active");

            if (!is_service) {
                const container = header.closest('.accordion-container') || document.body;
                const relatedBodies = container.querySelectorAll(bodySelector);

                relatedBodies.forEach((body) => {
                    body.classList.remove("active");
                    if (body.parentElement.classList.contains("rounded-corner")) {
                        body.parentElement.classList.replace("rounded-corner", "rounded-none");
                    }
                });
            }

            if (isActive) {
                body.classList.remove("active");
                card.classList.replace("rounded-corner", "rounded-none");
            } else {
                body.classList.add("active");
                card.classList.replace("rounded-none", "rounded-corner");
            }
        });
    });
}

setupAccordion(".process-card-head", ".process-card-body", false);
setupAccordion(".js-service-card-name", ".js-service-card-body", true);