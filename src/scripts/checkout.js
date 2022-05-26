import { jsPDF } from "jspdf";

import { auth, db } from "./app";
import { onAuthStateChanged } from "firebase/auth";
import { getFirebaseCart, createFirebaseCart } from "./functions/cart";
import { addProductToCart, getMycart, currencyFormat } from "../utils/indexUtils";

const doc = new jsPDF();
const checkoutForm = document.getElementById("checkoutForm");

let cart = [];

function loadCart(){
    let total = 0;
    cart.forEach(product => {
        total += parseInt(product.price);

        checkoutForm.addEventListener("submit", async(e) => {
            e.preventDefault();
            console.log("finish");
        
            const name = checkoutForm.name.value;
            const cardnumber = checkoutForm.cardnumber.value;
            const csc = checkoutForm.csc.value;
            const date = checkoutForm.date.value;
            const email = checkoutForm.email.value;
        
            if(name !== "" && cardnumber !== "" && csc !== "" && date !== "" && email !== ""){
                alert(`Thank you for your purchase`);
                doc.text("Thanks " + name + " for your purchase of:" + "\n" +  product.name + "\n" + "for a total of: " + currencyFormat(total), 10, 10);
                doc.save("receipt.pdf");
            }else{
                alert(`Please fill every input`);
        
            }
        });
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

    loadCart();

    });