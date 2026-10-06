import bigMacImg  from "./images/big-mac.jpeg";
import friesImg from "./images/fries.avif";
import colaImg from "./images/cola.jpeg";
import mcFlurryImg from "./images/McFlurry-Oreo.avif";

export { renderMenuPage };

function renderMenuPage() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    const main = document.createElement("main");

    const title = document.createElement("h1");
    title.textContent = "Our Menu";

    const menuItems = document.createElement("div");
    menuItems.classList.add("menu-items-list");

    for (const menuItem of menuItemsArr) {
        const menuItemDiv = document.createElement("div");
        menuItemDiv.classList.add("menu-item");        

        const menuImg = document.createElement("img");
        menuImg.setAttribute("src", menuItem.image);
        menuImg.setAttribute("alt", menuItem.name);

        const menuItemText = document.createElement("div");
        menuItemText.classList.add("menu-item-text");

        const orderButton = document.createElement("button");
        orderButton.textContent = "Order";
        orderButton.setAttribute("data-id", menuItem.id);
        orderButton.addEventListener("click", orderItem);

        menuItemText.appendChild(createMenuItemElement("", menuItem.name));
        menuItemText.appendChild(createMenuItemElement("Type:", menuItem.type));
        menuItemText.appendChild(createMenuItemElement("Price: ", `${menuItem.price.toFixed(2)} kr`));
        menuItemText.appendChild(orderButton);

        menuItemDiv.appendChild(menuImg);
        menuItemDiv.appendChild(menuItemText);

        menuItems.appendChild(menuItemDiv);
    }

    main.appendChild(title);
    main.appendChild(menuItems);

    const orderSummaryContainer = document.createElement("aside");
    const orderSummaryTitle = document.createElement("h2");
    orderSummaryTitle.textContent = "Order Summary";
    const orderSummary = document.createElement("div");
    orderSummary.setAttribute("id", "order-summary");
    orderSummaryContainer.appendChild(orderSummaryTitle);
    orderSummaryContainer.appendChild(orderSummary);

    menuContainer.appendChild(main);
    menuContainer.appendChild(orderSummaryContainer);
    
    return menuContainer;
};

function renderOrderSummary () {
    const orderSummary = document.querySelector("#order-summary");
    orderSummary.innerHTML = "";

    for (const itemId of basket) {
        const itemObj = menuItemsArr.find(item => item.id === Number(itemId));
        const orderItemElement = document.createElement("div");
        orderItemElement.classList.add("order-element");
        const orderItemText = document.createElement("p");
        const orderItemPrice = document.createElement("p");
        orderItemText.textContent = itemObj.name;
        orderItemPrice.textContent =  `${itemObj.price.toFixed(2)} kr`;
        orderItemElement.appendChild(orderItemText);
        orderItemElement.appendChild(orderItemPrice);
        orderSummary.appendChild(orderItemElement);
    }

    const orderTotalElement = document.createElement("div");
    orderTotalElement.classList.add("order-total");
    orderTotalElement.classList.add("order-element");
    const orderTotalText = document.createElement("p");
    orderTotalText.textContent = "Total:";
    const orderTotal = basket.reduce((total, basketItem) => {
        const price = menuItemsArr.find((menuItem) => menuItem.id === Number(basketItem)).price;
        return total + price;
    }, 0);
    const orderTotalPrice = document.createElement("p");
    orderTotalPrice.textContent = `${orderTotal.toFixed(2)} kr`; 
    orderTotalElement.appendChild(orderTotalText);
    orderTotalElement.appendChild(orderTotalPrice);

    const orderButtons = document.createElement("div");
    orderButtons.classList.add("order-element");
    const payButton = document.createElement("button");
    payButton.textContent = "Pay";
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";

    payButton.addEventListener("click", () => {
        /* Handle payment */
        emptyBasket();
    });
    cancelButton.addEventListener("click", () => {
        emptyBasket();
    })

    orderButtons.appendChild(payButton);
    orderButtons.appendChild(cancelButton);

    orderSummary.appendChild(orderTotalElement);
    orderSummary.appendChild(orderButtons);
}

function createMenuItemElement(label, text) {
    const menuItemElement = document.createElement("div");
    const menuItemLabel = document.createElement("p");
    const menuItemText = document.createElement("p");
    menuItemLabel.textContent = label;
    menuItemText.textContent = text;
    if (label != "") {
        menuItemElement.appendChild(menuItemLabel);
    }
    menuItemElement.appendChild(menuItemText);
    
    return menuItemElement;
}

function orderItem(event) {
    basket.push(event.target.dataset.id);
    renderOrderSummary();
}

function emptyBasket() {
    basket.length = 0;
    renderOrderSummary();
}

const basket = [];

const menuItemsArr = [
    {
        id: 1,
        name: "Big-Mac",
        type: "Burger",
        price: 50,
        image: bigMacImg,
    },
    {
        id: 2,
        name: "Fries",
        type: "Side",
        price: 30,
        image: friesImg,
    },
    {
        id: 3,
        name: "Cola",
        type: "Drink",
        price: 30,
        image: colaImg,
    },
    {
        id: 4,
        name: "McFlurry Oreo",
        type: "Dessert",
        price: 35,
        image: mcFlurryImg,
    },
];