import restaurant from "./images/McDonalds.avif";

export { renderHomePage };

function renderHomePage() {
    const main = document.createElement("main");

    const title = document.createElement("h1");
    title.textContent = "McDonald's Konnerud";

    const mainImage = document.createElement("img");
    mainImage.setAttribute("src", restaurant);
    mainImage.setAttribute("alt", "A McDonald's restaurant");
    mainImage.classList.add("main-image");

    main.appendChild(title);
    main.appendChild(mainImage);
    
    return main;
};