const productContainer = document.getElementById("products-container");
const blackTea = document.createElement("div");
const greenTea = document.createElement("div");

blackTea.innerHTML = "Black Tea";
greenTea.innerHTML = "Green Tea";

blackTea.classList.add("product");
greenTea.classList.add("product");

productContainer.appendChild(blackTea);
productContainer.appendChild(greenTea);