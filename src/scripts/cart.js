import { auth, db } from "./app";
import { onAuthStateChanged } from "firebase/auth";
import { getFirebaseCart, createFirebaseCart } from "./functions/cart";
import { addProductToCart, getMycart, currencyFormat } from "../utils/indexUtils";

const cartSection = document.getElementById("cart");
const totalSection = document.getElementById("total");
let cart = [];

function loadCart(){
    let total = 0;
    cart.forEach(product => {
        renderProduct(product);
        total += parseInt(product.price);
    });

    totalSection.innerText = currencyFormat(total);
}

async function removeProduct(productId) {
    const newCart = cart.filter(product => product.id !== productId);
    
    cart = newCart;

    if (userLogged) {
        await createFirebaseCart(db, userLogged.uid, newCart);
    }

    addProductToCart(newCart);

    cartSection.innerHTML = "";

    loadCart(newCart);

}

function renderProduct(product){
    const productCart = document.createElement("li");
    productCart.className = "cart__product";

    productCart.innerHTML = `
    <img class="cart__img" src="${product.images[0]}" alt="">
    <h2 class="cart__name">${product.name}</h2>
    <h3 class="cart__price">${currencyFormat(product.price)}</h3>
    <button class="cart__button">Delete product</button>
    `;
    
    cartSection.appendChild(productCart);

    productCart.addEventListener("click", e => {
        if (e.target.tagName === "BUTTON") {
            console.log("remove it!");
            removeProduct(product.id);
        }
    })
};

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

    loadCart();

    });