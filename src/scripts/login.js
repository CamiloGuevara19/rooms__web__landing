import { db, auth} from "../scripts/app";
import { createUser, loginUser, addUserToDataBase } from "./functions/auth";

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



