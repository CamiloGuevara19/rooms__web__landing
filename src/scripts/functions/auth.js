import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

async function createUser(auth, { email, password }){
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        return user;

        //console.log(user);

    }catch(e) {
        console.log(e);

        if(e.code === "auth/wear-password"){
            alert("Password must be at least 6 characters long");
        }
        
        if(e.code === "auth/email-already-in-use"){
            alert("This email is already registered");
        }
    }

}

async function loginUser(auth, email, password){
    try{
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);
        alert(`Successful login, ${user.uid}`);

    }catch(e){
        console.log(e);

        if(e.code === "auth/wrong-password"){
            alert("Inavalid email or password");
        }

        if(e.code === "auth/user-not-found"){
            alert("Inavalid email or password");
        }
    }
}

async function addUserToDataBase(db, userId, userInfo) {
    try {
        await setDoc(doc(db, "users", userId), userInfo);
    } catch(e){
        console.log(e);
    }
}

export {
    createUser,
    loginUser,
    addUserToDataBase
}