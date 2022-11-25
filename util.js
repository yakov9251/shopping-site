

//must have product.title
function createProduct(product) {
    const productHTML = document.createElement("div");

    if (product && typeof product === "object") {
      productHTML.classList.add("product");
      //Create product name div
      const productNameDIV = document.createElement("div");
      productNameDIV.innerHTML = product.name;
      productHTML.appendChild(productNameDIV);
      
      const productAmountDIV = document.createElement("div");
      productAmountDIV.innerHTML = "Amount: " + product.amount;
      productHTML.appendChild(productAmountDIV);
      
      const productPriceDIV = document.createElement('div');
      productPriceDIV.innerHTML = product.price;
      productHTML.appendChild(productNameDIV);
      console.log(productHTML);
    } else {
      throw console.error("not object");
    }
    return productHTML;
}

function createProductList(productList) {
    const productListElement = document.createElement("div");
    if (productList && productList.length) {
      for (let i = 0; i < productList.length; i++) {
        const product = createProduct(productList[i]);
        productListElement.appendChild(product);
      }
    } else {
      productListElement.innerHTML = "No Items.";
    }
    return productListElement;
}

function createHeader(headerObject) {
    const headerElement = document.createElement("div");
    if (headerObject && typeof headerObject === "object") {
        const h2 = document.createElement('h2');
        h2.innerHTML =  headerObject.title;
        headerElement.appendChild(h2);
    }else{
        console.log('error')
    }
    return headerElement;
}
