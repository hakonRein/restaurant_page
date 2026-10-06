import "./style.css";
import { renderHomePage } from "./home.js";
import { renderMenuPage } from "./menu.js";
import { renderAboutPage } from "./about.js";

const content = document.querySelector("#content");

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

/* Listens for menu-selections and renders the corresponding page */
homeBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(renderHomePage());
});
menuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(renderMenuPage());
})
aboutBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(renderAboutPage());
})

/* Home page is the startup page, rendered when loading */
content.appendChild(renderHomePage());
