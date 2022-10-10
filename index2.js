fetch("/items.json")
.then(function(response){ 
    return response.json()})
.then(function(sale){
    let placeholder = document.querySelector(".selling");
    let out = "";
    for (let product of sale){
        out +=  
        `<div class="product-item">
            
            <video loop autoplay preload="auto">
            <source src="${product.video}">
            </video>
        
                <div class="product-content"

                    <div class="product-name">
                        <h1>${product.name}</h1>
                    </div>

                    <div class="product-age">
                        <p>${product.price}</p>
                    </div>
                    <div class="icon">
                    <button type="submit">
                        Order Now
                        </button>
                                </div>
            
       </div> `
    }
    placeholder.innerHTML = out;
});

fetch("/produce.json")
.then(function(response){ 
    return response.json()})
.then(function(sale){
    let placeholder = document.querySelector(".side-content");
    let out = "";
    for (let product of sale){
        out +=  
        `<div class="produce-item">
            
            <video loop autoplay preload="auto">
            <source src="${product.video}">
            </video>
        
                <div class="produce-content"

                    <div class="product-name">
                        <h1>${product.name}</h1>
                    </div>

                    <div class="product-age">
                        <p>${product.price}</p>
                    </div>
                    <div class="icon">
                    <button type="submit">
                        Buy Now
                        </button>
                                </div>
            
       </div> `
    }
    placeholder.innerHTML = out;
});
fetch("/produce2.json")
.then(function(response){ 
    return response.json()})
.then(function(sale){
    let placeholder = document.querySelector(".side-content2");
    let out = "";
    for (let product of sale){
        out +=  
        `<div class="produce-item">
            
            <video loop autoplay preload="auto">
            <source src="${product.video}">
            </video>
        
                <div class="produce-content"

                    <div class="product-name">
                        <h1>${product.name}</h1>
                    </div>

                    <div class="product-age">
                        <p>${product.price}</p>
                    </div>
                    <div class="icon">
                    <button type="submit">
                        Buy Now
                        </button>
                </div>
            
       </div> `
    }
    placeholder.innerHTML = out;
});