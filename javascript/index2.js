//fetch the file
fetch("/JSON files/items.json")
.then(function(response){ //callback function
    return response.json()}) 
.then(function(sale){
    let placeholder = document.querySelector(".selling");// calls the div class
    let out = ""; //this will make sense later but essentially html in the quotations
    for (let product of sale){  //for loop
        out +=  // html under here
        `<div class="product-item">
            
            <video loop autoplay preload="auto">
            <source src="${product.video}">
            </video>
        
                <div class="product-content"

                    <div class="product-name">
                        <h1>${product.name}</h1>
                    </div>

                    <div class="product-price">
                        <p>${product.price}</p>
                    </div>
                    <div class="product.description">
                    <p>${product.description}</p>
                    </div>
                    <div class="icon">
                    <button type="submit">
                        Order Now
                        </button>
                                </div>
            
       </div> `
    }
    placeholder.innerHTML = out; //calls the div class and inserts text in it
});

fetch("/JSON files/produce.json")
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
                    <div class="product.description">
                    <p>${product.description}</p>
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
fetch("/JSON files/produce2.json")
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
                    <div class="product.description">
                    <p>${product.description}</p>
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
fetch("/JSON files/drip.json")
.then(function(response){ 
    return response.json()})
.then(function(sale){
    let placeholder = document.querySelector(".ice");
    let out = "";
    for (let product of sale){
        out +=  
        `<div class="produce-item">
            <img src="${product.image}">
            
        
                <div class="produce-content"

                    <div class="product-name">
                        <h1>${product.name}</h1>
                    </div>

                    <div class="product-age">
                        <p>${product.price}</p>
                    </div>
                    <div class="product.description">
                    <p>${product.description}</p>
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