export { renderAboutPage };

function renderAboutPage() {
    const main = document.createElement("main");
    const title = document.createElement("h1");
    title.textContent = "About";
    main.appendChild(title);
    
    return main;
};