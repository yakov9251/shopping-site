const productContainer = document.getElementById("products-container");
debugger;
const product = {
    name: 'Black Tea',
    amount: 33,
    price: 20
}

//create main element
const productDIV = document.createElement("div");
productDIV.classList.add("product");

//create name container
const productNameDIV = document.createElement("div");
productNameDIV.innerHTML = product.name;
productDIV.appendChild(productNameDIV);

//create amount container
const productAmountDIV = document.createElement("div");
productAmountDIV.innerHTML = "Amount: " + product.amount;
productDIV.appendChild(productAmountDIV);


productContainer.appendChild(productDIV);





// const productsList  = ["Black Tea", "Coffee", "Green Tea", "Milk"];

// for (let i=0;i<productsList.length;i++) {
//     const product = document.createElement("div");
//     product.innerHTML = productsList[i];
//     product.classList.add("product");
//     productContainer.appendChild(product);
// }

// console.log('done');

