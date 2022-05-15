// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { firebaseConfig } from "../utils/firebase"
import { addProduct, uploadImages } from "./functions/addProduct";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const createProductForm = document.getElementById("createProductForm");

createProductForm.addEventListener("submit", async (e) =>{
    e.preventDefault();

    const name = createProductForm.name.value;
    const description = createProductForm.description.value;
    const price = createProductForm.price.value;
    const category = createProductForm.category.value;
    const images = createProductForm.images.files;

    if (images.lenght){
        const uploadedImages = await uploadImages(storage, [...images]);

    }

    const newProduct = {
        name,
        description,
        price,
        category,
        // images

    };

    await addProduct(db, newProduct);
    
    console.log(newProduct);

});
