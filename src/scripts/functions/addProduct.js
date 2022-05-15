import { addDoc, collection } from "firebase/firestore";

async function addProduct(db, product) {

    try {
        await addDoc(collection(db, "products"), product);
        console.log("product created");
        
    } catch(e) {
        console.log(e);

    }

}

async function uploadImages(images = []){
    console.log(images);
}

export {
    addProduct,
    uploadImages,
}