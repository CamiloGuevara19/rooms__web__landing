// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcvsGAqg13kR5a0LjoSmi5C5KJDqHTl9s",
    authDomain: "rooms-a324a.firebaseapp.com",
    projectId: "rooms-a324a",
    storageBucket: "rooms-a324a.appspot.com",
    messagingSenderId: "133747960043",
    appId: "1:133747960043:web:fd5801a61cd9c4b98636ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage(app);

export {
    app,
    auth,
    db,
    storage
}

