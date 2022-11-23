

//must have product.title
function createProduct(product) {
    //TODO: add logic to create product function;
    //stub

    const productHTML = document.createElement('div');
    productHTML.innerHTML = product.title;

    return productHTML;
}

function createProductList(productList) {
    //TODO: add logic
    //stub

    const productListElement = document.createElement('div');
    productListElement.innerHTML = 'PRODUCTS LIST HERE';
    return productListElement;
}

function createHeader(headerObject) {
    //TODO: add logic

    //stub
    const headerElement = document.createElement('div');
    headerElement.innerHTML = 'HEADER HERE';
    return headerElement;
}