// Import the functions you need from the SDKs you need
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

const createUserForm = document.getElementById("createUserForm");
const loginUserForm = document.getElementById("loginUserForm");

createUserForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log("New User");

    const name = createUserForm.name.value;
    const email = createUserForm.email.value;
    const password = createUserForm.password.value;

    createUser(name, email, password);
});

loginUserForm.addEventListener("submit", e =>{
    e.preventDefault();

    const email = loginUserForm.email.value;
    const password = loginUserForm.password.value;

    loginUser(email, password);
    console.log("User Login")
});

async function createUser(name, email, password){
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user);
        alert(`Welcome, ${user.uid}`);

    }catch(e) {
        console.log(e);

        if(e.code === "auth/wear-password"){
            alert("Password must be at least 6 characters long")
        };
        
        if(e.code === "auth/email-already-in-use"){
            alert("This email is already registered")
        };
    }

};

async function loginUser(email, password){
    try{
         const { user } = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);
        alert(`Successful login, ${user.uid}`);
    }catch(e){
        console.log(e);

        if(e.code === "auth/wrong-password"){
            alert("Inavalid email or password")
        };

        if(e.code === "auth/user-not-found"){
            alert("Inavalid email or password")
        };
    }
};

