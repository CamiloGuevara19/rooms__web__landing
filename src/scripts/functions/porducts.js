import { collection, getDocs } from "firebase/firestore";

async function getProducts(db){
    const collectionRef = collection(db, "products");

    try {
        const { docs } = await getDocs(collectionRef);

        const products = docs.map((doc) =>{
            return {
                ...doc.data(),
            };
        });

        return products;
        
    } catch(e){
        console.log(e);

    }

    //console.log(products);
}

export{
    getProducts,
}