function getData() {
  fetch("http://localhost:3000/products")
    .then((response) => response.json())
    .then((products) => {
      products.forEach((product) => {
        const container = document.createElement("div");
        container.classList.add("card");

        const list = document.getElementById("product-list");

        const productImage = document.createElement("div");
        productImage.classList.add("product-image");
        const image = document.createElement("img");
        image.setAttribute("src", "https://via.placeholder.com/150");
        productImage.append(image);
        container.append(productImage);

        const productData = document.createElement("div");
        productData.classList.add("product-data");
        const productTitle = document.createElement("h2");
        productTitle.innerText = product.title;
        const productSubtitle = document.createElement("h3");
        productSubtitle.innerText = product.manufacturer;
        const productDescription = document.createElement("p");
        productDescription.innerText = product.description;
        productData.append(productTitle, productSubtitle, productDescription);
        container.append(productData);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        const productNetPrice = document.createElement("p");
        productNetPrice.classList.add("net-price");
        productNetPrice.innerText = product.netPrice;
        const productGrossPrice = document.createElement("p");
        productGrossPrice.classList.add("gross-price");
        productGrossPrice.innerText = product.grossPrice;
        const addToCart = document.createElement("button");
        addToCart.innerText = "Add to cart";
        productInfo.append(productNetPrice, productGrossPrice, addToCart);
        container.append(productInfo);
        list.append(container);
      });
    });
}
getData();
