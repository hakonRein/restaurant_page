export { renderHomePage };

function renderHomePage() {
    const main = document.createElement("main");
    const title = document.createElement("h1");
    title.textContent = "Home";
    main.appendChild(title);
    
    return main;
};