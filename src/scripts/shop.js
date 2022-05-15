import { db } from "../scripts/app"
import { getProducts } from "./functions/porducts";

const productSection = document.getElementById("products");

async function loadProducts() {
    const firebaseProducts = await getProducts(db);
    firebaseProducts.forEach( product => {
        renderProduct(product);
    });

    console.log(firebaseProducts);
}

function renderProduct(item) {
    const product = document.createElement("div")
    product.className = "products";
    product.className = "products__box";
    product.className = "products__img";
    product.className = "products__detail";
    product.className = "products__title";
    product.className = "products__price";
    product.className = "products__more";

    const coverImage = item.images ? item.images[0] : "https://latarta.com.co/wp-content/uploads/2018/06/default-placeholder-300x300.png"; 

    product.innerHTML = `
    <article class="products__box">
    <img src="${coverImage}" alt="" class="products__img">
    
    <div class="products__details">

        <h4 class="products__title">${item.name}</h4>
        <h3 class="products__price">${item.price}</h3>
        <a href="#" class="products__more">See more</a>
    </div>
    </article>
    `;

    productSection.appendChild(product);
}

loadProducts();