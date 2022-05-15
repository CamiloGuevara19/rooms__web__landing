// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { createUser, loginUser, addUserToDataBase } from "../scripts/functions/auth"

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

const createUserForm = document.getElementById("createUserForm");
const loginUserForm = document.getElementById("loginUserForm");

createUserForm.addEventListener("submit", async(e) => {
    e.preventDefault();
    console.log("New User");

    const name = createUserForm.name.value;
    const lastName = createUserForm.lastName.value;
    const cellphone = createUserForm.cellphone.value;
    const email = createUserForm.email.value;
    const password = createUserForm.password.value;

    const newUser = {
        name,
        lastName,
        cellphone,
        email,
        password,
        isAdmin: false
    }

    if(name !== "" && lastName !== "" && cellphone !== "" && email !== "" && password !== ""){
        const userCreated = await createUser(auth, newUser);
        await addUserToDataBase(db, userCreated.uid, newUser);
        console.log(userCreated);
        alert(`Welcome, ${newUser.name}`);

    }else{
        alert(`Please fill every form`);

    }
});

loginUserForm.addEventListener("submit", e =>{
    e.preventDefault();

    const email = loginUserForm.email.value;
    const password = loginUserForm.password.value;

    loginUser(auth, email, password);

    if(user.isAdmin) {
        //location.href = "./"
    }else {
        //
    }
    console.log("User Login")
});



