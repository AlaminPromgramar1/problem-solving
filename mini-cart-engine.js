const shopProducts = [
    { id: 101, name: "Laptop", price: 1000 },
    { id: 102, name: "Mouse", price: 25 },
    { id: 103, name: "Keyboard", price: 75 }
];


let shopProduct = [];

function addToCart(productId, qty){
    let productInShop = null;
    for(const item of shopProducts){
       if(item.id === productId){
        productInShop = item;
        break;
       }
    }
    if(!productInShop){
        return "Product not found in shop";
    }

    let shoppingCart = false;
    for(const item of shopProduct){
        if(item.id === productId){
            item.quantity = item.quantity+qty;
            shoppingCart = true;
            break;
        }
    }
    if(shoppingCart === false){
        const newShopCart = {
            id: productInShop.id,
            name: productInShop.name,
            price:productInShop.price,
            quantity: qty
        }
        shopProduct.push(newShopCart);
    }
   

  
}
function calculateCartTotal(){
    total = 0;
     for(const item of shopProduct){
       
         let price = item.price * item.quantity;
         total+=price;
        
                  
     }
     return total;
}

addToCart(101 , 2);
addToCart(101 , 2);
addToCart(103 , 2);


console.log(calculateCartTotal());

console.log(shopProduct);

