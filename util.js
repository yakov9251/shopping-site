

//must have product.title
function createProduct(product) {
    //TODO: add logic to create product function;
    //stub

    const productHTML = document.createElement('div');
    productHTML.innerHTML = product.title;

    return productHTML;
}