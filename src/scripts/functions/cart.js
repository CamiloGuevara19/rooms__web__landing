import { setDoc, doc } from "firebase/firestore";

async function createFirebaseCart(db, userId, cart) {
    try {
        await setDoc(doc(db, "cart", userId), {cart});
    }catch(e){
        console.log(e)
    }
}

async function getFirebaseCart(){

}

export {
    createFirebaseCart,
    getFirebaseCart
}