function setupAccordion(headerSelector, contentSelector) {
    const headers = document.querySelectorAll(headerSelector);
    const bodies = document.querySelectorAll(contentSelector);

    headers.forEach((header) => {
        header.addEventListener("click", () => {
            const parent = header.parentElement;
            const content = parent.querySelector(contentSelector);
            const isActive = content.classList.contains("active");

            bodies.forEach((body) => {
                body.classList.remove("active");
                body.parentElement.classList.replace("rounded-corner", "rounded-none");
            });

            if (!isActive) {
                content.classList.add("active");
                parent.classList.replace("rounded-none", "rounded-corner");
            }
        });
    });
}

setupAccordion(".process-card-head", ".process-card-body");
setupAccordion(".js-service-card-name", ".js-service-card-body");