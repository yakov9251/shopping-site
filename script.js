const productContainer = document.getElementById("products-container");

const productsList  = ["Black Tea", "Coffee", "Green Tea"];


const blackTea = document.createElement("div");
blackTea.innerHTML = productsList[0];
blackTea.classList.add("product");
productContainer.appendChild(blackTea);


const greenTea = document.createElement("div");
greenTea.innerHTML = productsList[1];
greenTea.classList.add("product");
productContainer.appendChild(greenTea);



console.log('done');