const getProducts = () => {
    const url = "http://fs1.co.il/bus/shop.php";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            renderProducts(data);
        })
}

const renderProducts = (productsArray) => {
    let productsHTML = "";
    for (let i = 0; i < productsArray.length; i++) {
        productsHTML += `
        <div class="col">
            <div class="card">
                <img src="${productsArray[i].image}" alt="${productsArray[i].name}" class="card-img-top">
                <div class="card-body">
                <div class="badge">
                 ${productsArray[i].cat}
                </div>
                    <h3>${productsArray[i].name}</h3>
                    <p>${productsArray[i].price} ₪</p>
                </div>
            </div>
        </div>
        `
    }
    document.getElementById('products').innerHTML = productsHTML;
}

getProducts();