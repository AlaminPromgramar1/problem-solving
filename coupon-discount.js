function applyDiscount(pricesArray, couponCode){
    if(!Array.isArray(pricesArray) || pricesArray.length === 0 || typeof couponCode !== "string"){
        return "Invalid input. Please provide a valid array of prices and a coupon code.";
    };
    let discountRate = 0;
    if(couponCode === "SAVE10"){
        discountRate = 0.1;
    } else if(couponCode === "HALFPRICE"){
        discountRate = 0.5;
    } else {
        return `Invalid coupon code. Please use either "SAVE10" or "HALFPRICE".`;
    }

    let discountPrice = [];
    for(const price of pricesArray){
        if(typeof price !== "number" || price <0){
            return "Invalid price in the array. Please provide valid positive numbers.";
        }
        let discount = price * discountRate;
        let disPrice = price - discount;
        // console.log(disPrice)
        discountPrice.push(disPrice)
    }
    return discountPrice;
}

const result = applyDiscount([10, 20, 100], "HALFPRICE");
console.log(result)
  
const result2 = applyDiscount([10, 20, 100], "SAVE10");
console.log(result2)