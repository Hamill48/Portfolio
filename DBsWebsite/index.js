const dropdownContainers = document.querySelectorAll('.faq-container-js');

dropdownContainers.forEach((dropdownContainer) => {
    dropdownContainer.addEventListener('click', () => {
        const id = dropdownContainer.getAttribute('data-id');
        const paragraphs = document.querySelectorAll(`.faq-paragraph-js[data-id="${id}"]`);
        const arrow = document.querySelector(`.arrow-js[data-id="${id}"]`);
        arrow.classList.toggle('arrow-up');
        paragraphs.forEach((paragraph) => {
            paragraph.classList.toggle('faq-paragraph-active');
        })
    });
});