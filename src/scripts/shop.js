import { db } from "../scripts/app"
import { getProducts } from "./functions/porducts";

const productSection = document.getElementById("products");
const categoryFilter = document.getElementById("category");
const priceFilter = document.getElementById("order");

let products = [];
let cart = getMycart();
console.log(cart);

async function loadProducts() {
    const firebaseProducts = await getProducts(db);
    firebaseProducts.forEach( product => {
        renderProduct(product);
    });

    //console.log(firebaseProducts);

    products = firebaseProducts;
}

function renderProduct(item) {
    const product = document.createElement("a")
    product.className = "products";
    product.className = "products__box";
    product.className = "products__img";
    product.className = "products__detail";
    product.className = "products__title";
    product.className = "products__price";
    product.className = "products__more";

    product.setAttribute("href", `./product.html?id=${item.id}`);

    const coverImage = item.images ? item.images[0] : "https://latarta.com.co/wp-content/uploads/2018/06/default-placeholder-300x300.png"; 

    const validateProduct = cart.some((productCart) => productCart.id === item.id);

    const productButtonCart = validateProduct ? '<button class="products__btn" disabled>Added to cart</button>' : '<button class="products__btn">Add to Cart</button>'

    product.innerHTML = `
    <article class="products__box">
    <img src="${coverImage}" alt="" class="products__img">
    
    <div class="products__details">

        <h4 class="products__title">${item.name}</h4>
        <h3 class="products__price">$${item.price}</h3>
        ${productButtonCart}
    </div>
    </article>
    `;

    productSection.appendChild(product);

    const addProductButton  = product.querySelector(".products__btn");

    addProductButton.addEventListener("click", async (e) => {
        e.preventDefault();

        addProductToCart();
        cart.push(item);

        //addProductButton.setAttribute("disabled", true);
        addProductButton.innerText = "Product added!"
    });
}

function addProductToCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
}

function getMycart(){
    const myCart = localStorage.getItem("cart");
    return myCart ? JSON.parse(myCart) : [];
}

function filterBy() {
    const newCategory = categoryFilter.value;
    const newOrder = priceFilter.value;

    let filteredProduct = [];

    if (newCategory !== ""){

        filteredProduct = products.filter((product) => product.category === newCategory);
        //console.log(filteredProduct);

    }else {
        filteredProduct = products;
    }

    if (newOrder === "upward") {
        filteredProduct = filteredProduct.sort((a, b) => a.price - b.price);
    }

    if (newOrder === "downward") {
        filteredProduct = filteredProduct.sort((a ,b) => b.price - a.price);
    }


    productSection.innerHTML="";
    filteredProduct.forEach( product => {
        renderProduct(product);
    });

}

categoryFilter.addEventListener("change", e => {
    filterBy();
});

priceFilter.addEventListener("change", e => {
    filterBy();
});

loadProducts();