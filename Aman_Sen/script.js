let product_container=document.querySelector(".products_container");

document.addEventListener("DOMContentLoaded",()=>{
    products.forEach(product => {
        let product_card=document.createElement("div");
        product_card.classList.add("product_card")
        


         product_card.innerHTML=`<img src="./assets//${product.image}" alt="" />
         <span class="sponsered">sponsered</span>
         <span class="product_name">${product.title}</span>
         <span class="color">${product.color}</span>
         <div >
           <span class="rating"
             >${product.rating}<i class="fa fa-star" aria-hidden="true"></i
           ></span>
           
           <img src=${"./assets/flipcartassured.png"} style="display:${product.flipkartAssured? "unset":"none"}"/>
         </div>
         <div>
           <span class="special_price">₹${product.specialPrice}</span>
           <span class="original_price">₹${product.price}</span>
           <span class="discount">${Math.round((product.discountPrice/product.price)*100)}% off</span>
         </div>
         <div class="delivery">free delivery</div>
         <div class="offers">Bank offer</div>`;


         
        //  product_card.appendChild(product_image);
        //  product_card.appendChild(product_name)

         product_container.appendChild(product_card);
        
    });
})