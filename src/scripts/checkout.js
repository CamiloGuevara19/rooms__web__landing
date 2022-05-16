const checkoutForm = document.getElementById("checkoutForm");

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

    }else{
        alert(`Please fill every input`);

    }
});