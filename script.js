const productContainer = document.getElementById("products-container");

const productsList  = ["Black Tea", "Coffee", "Green Tea", "Milk"];

for (let i=0;i<productsList.length;i++) {
    const product = document.createElement("div");
    product.innerHTML = productsList[i];
    product.classList.add("product");
    productContainer.appendChild(product);
}

console.log('done');

