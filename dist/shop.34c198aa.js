var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},a={},c=t.parcelRequire014c;null==c&&((c=function(t){if(t in e)return e[t].exports;if(t in a){var c=a[t];delete a[t];var n={id:t,exports:{}};return e[t]=n,c.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){a[t]=e},t.parcelRequire014c=c);var n=c("li1Mx"),r=c("etBjH");var o=c("hMt9z"),d=c("1tHc5"),s=c("jKvpL");const i=document.getElementById("products"),l=document.getElementById("category"),u=document.getElementById("order");let p,_=[],m=[];async function f(){const t=await async function(t){const e=r.collection(t,"products");try{const{docs:t}=await r.getDocs(e);return t.map((t=>({...t.data(),id:t.id})))}catch(t){console.log(t)}}(n.db);t.forEach((t=>{g(t)})),_=t}function g(t){const e=document.createElement("a");e.className="products",e.className="products__box",e.className="products__img",e.className="products__detail",e.className="products__title",e.className="products__price",e.className="products__more",e.setAttribute("href",`./productPage.html?id=${t.id}`);const a=t.images?t.images[0]:"https://latarta.com.co/wp-content/uploads/2018/06/default-placeholder-300x300.png",c=m.some((e=>e.id===t.id))?'<button class="products__btn" disabled>Added to cart</button>':'<button class="products__btn">Add to Cart</button>';e.innerHTML=`\n    <article class="products__box">\n    <img src="${a}" alt="" class="products__img">\n    \n    <div class="products__details">\n\n        <h4 class="products__title">${t.name}</h4>\n        <h3 class="products__price">${s.currencyFormat(t.price)}</h3>\n        ${c}\n    </div>\n    </article>\n    `,i.appendChild(e);const r=e.querySelector(".products__btn");r.addEventListener("click",(async e=>{e.preventDefault(),m.push(t),s.addProductToCart(m),p&&await o.createFirebaseCart(n.db,p.uid,m),r.innerText="Product added!"}))}function h(){const t=l.value,e=u.value;let a=[];a=""!==t?_.filter((e=>e.category===t)):_,"upward"===e&&(a=a.sort(((t,e)=>t.price-e.price))),"downward"===e&&(a=a.sort(((t,e)=>e.price-t.price))),i.innerHTML="",a.forEach((t=>{g(t)}))}l.addEventListener("change",(t=>{h()})),u.addEventListener("change",(t=>{h()})),d.onAuthStateChanged(n.auth,(async t=>{t?(p=t,m=await o.getFirebaseCart(n.db,p.uid)):m=s.getMycart(),f()}));
//# sourceMappingURL=shop.34c198aa.js.map
