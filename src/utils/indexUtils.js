

async function addProductToCart(cart){
    localStorage.setItem("cart", JSON.stringify(cart));
}

function getMycart(){
    const myCart = localStorage.getItem("cart");
    return myCart ? JSON.parse(myCart) : [];
}

export {
    addProductToCart,
    getMycart
}