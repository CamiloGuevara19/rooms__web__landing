let user = {

    name: "Nicolas Guevara",
    email: "nicolasg1234@gmail.com",
    gender: "Male",
    age: 24,
};

let products = [

    {
        name: "X100PRE",
        type: "Vinyl",
        price: 90000,
        stock: 3,
        img: "disco1.jpg"
    },

    {
        name: "DNA",
        type: "Vinyl",
        price: 80000,
        stock: 0,
        img: "disco3.jpg"
    },

    {
        name: "Pro-Ject EVA",
        type: "Player",
        price: 40000,
        stock: 2,
        img: "player2.jpg"
    },

    {
        name: "Pro-Ject III",
        type: "Player",
        price: 50000,
        stock: 0,
        img: "player1.jpg"
    },

    {
        name: "Man on the moon",
        type: "Vinyl",
        price: 45000,
        stock: 1,
        img: "disco2.jpg"
    },

];

function stockCheck(){
    products.forEach((product)=>{
        if(product.price > 50000 || product.stock >= 1){
            console.log(product.name);
        }
    });
}

function drawProducts(){

    let productdiv = document.createElement("div");

    products.forEach(product =>{

        productdiv.innerHTML = `

        <h1>${product.name}</h1>
        <img src="./data/${product.img}">
        <h4>${product.type}</h4>
        <p>${product.price}</p>
        <p>${product.stock}</p>

        `
    });

    document.body.appendChild(productdiv);
}

stockCheck();
drawProducts();


