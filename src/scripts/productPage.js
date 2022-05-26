import { referProduct } from "./functions/getProduct";
import { onAuthStateChanged } from "firebase/auth";
import { addProductToCart, getMycart, currencyFormat } from "../utils/indexUtils";
import { db, auth } from "../scripts/app"
import { getFirebaseCart, createFirebaseCart } from "./functions/cart";

const productInfoSection = document.getElementById("productInfo");
const productAssetsSection = document.getElementById("productAssets");


let userLogged = undefined;
let cart = [];

function getParam(param){
    const url = window.location.search;
    const searchParams = new URLSearchParams(url);
    const productId = searchParams.get(param);

    return productId;
}

async function loadProduct(){
    const productId = getParam("id");

    const data = await referProduct(productId);

    const product = {
        ...data,
        id: productId, // docSnap.id,
    }

    renderProduct(product);

}

function renderProduct(product){

    const validateProduct = cart.some((productCart) => productCart.id === product.id);
    const newProductButtonCart = validateProduct ? '<button class="product__button" disabled>Added to cart</button>' : '<button class="product__button">Add to Cart</button>'

    productInfoSection.innerHTML = ` 

    <h1 class="product__name">${product.name}</h1>
    <p class="product__description">${product.description}</p>
    <h3 class="product__price">${currencyFormat(product.price)}</h3>
    <a href="./threes.html"<button class="product__button">Reproduce</button></a>
    ${newProductButtonCart}
    `;

    productAssetsSection.innerHTML = `
    <img src="${product.images[0]}" alt="" class="product__img" id="main__img">
    `;

    if (product.images.lenght > 1){
        createGallery(product.images);
    }

    const productPageCartButton = document.querySelector(".product__button");
    productPageCartButton.addEventListener("click", e =>{
        e.preventDefault;
        cart.push(product);

        addProductToCart(cart);

        if (userLogged) {
            createFirebaseCart(db, userLogged.uid, cart);
        }

        //productPageCartButton.setAttribute("disable", true); //this breaks my code for some reason
        productPageCartButton.innerText = "Product added!"
    });

}

function createGallery(images){
    const mainImage = document.getElementById("main__img");

    const gallery = document.createElement("div");
    gallery.className = "product__gallery";

    images.forEach(image => {
        gallery.innerHTML += `
        <img sre="${image}">
        `
    });

    productAssetsSection.appendChild(gallery);

    const galleryImages = document.querySelector(".product__gallery");

    galleryImages.addEventListener("click", e => {
        if (e.target.tagName === "IMG") {
            mainImage.setAttribute("src", e.target.currentSrc);
        }
    });
}

onAuthStateChanged(auth, async(user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
        userLogged = user;
        cart = await getFirebaseCart(db, userLogged.uid);
      // ...
    } else {
        cart = getMycart();
      // User is signed out
      // ...
    }

    loadProduct();

    });
