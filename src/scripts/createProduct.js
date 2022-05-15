

const createProductForm = document.getElementById("createProductForm");

createProductForm.addEventListener("submit", e =>{
    e.preventDefault();
    console.log("product created");

    const name = createProductForm.name.value;
    const description = createProductForm.description.value;
    const price = createProductForm.price.value;
    const category = createProductForm.category.value;
    const images = createProductForm.images.files;

    const newProduct = {
        name,
        description,
        price,
        category,
        images

    };
    
    console.log(newProduct);

});