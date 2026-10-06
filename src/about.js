export { renderAboutPage };

function renderAboutPage() {
    const main = document.createElement("main");
    const title = document.createElement("h1");
    title.textContent = "About us";
    const contact = document.createElement("h3");
    contact.textContent = "E-mail: mcdonalds@konnerud.no";
    main.appendChild(title);
    main.appendChild(contact);
    
    return main;
};