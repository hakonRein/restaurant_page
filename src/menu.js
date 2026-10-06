export { renderMenuPage };

function renderMenuPage() {
    const main = document.createElement("main");
    const title = document.createElement("h1");
    title.textContent = "Menu";
    main.appendChild(title);
    
    return main;
};