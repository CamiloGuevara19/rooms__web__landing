var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire014c;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequire014c=r);var a=r("li1Mx"),o=r("1tHc5"),c=r("hMt9z"),i=r("jKvpL");const d=document.getElementById("cart"),l=document.getElementById("total");let s=[];function u(){let e=0;s.forEach((t=>{!function(e){const t=document.createElement("li");t.className="cart__product",t.innerHTML=`\n    <img class="cart__img" src="${e.images[0]}" alt="">\n    <h2 class="cart__name">${e.name}</h2>\n    <h3 class="cart__price">${i.currencyFormat(e.price)}</h3>\n    <button class="cart__button">Delete product</button>\n    `,d.appendChild(t),t.addEventListener("click",(t=>{"BUTTON"===t.target.tagName&&(console.log("remove it!"),async function(e){const t=s.filter((t=>t.id!==e));s=t,userLogged&&await c.createFirebaseCart(a.db,userLogged.uid,t);i.addProductToCart(t),d.innerHTML="",u()}(e.id))}))}(t),e+=parseInt(t.price)})),l.innerText=i.currencyFormat(e)}o.onAuthStateChanged(a.auth,(async e=>{e?(userLogged=e,s=await c.getFirebaseCart(a.db,userLogged.uid)):s=i.getMycart(),u()}));
//# sourceMappingURL=cart.d9e9710b.js.map