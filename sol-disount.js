function discount(price, fun){
    return price - fun(price)
}

const discountedPrice = discount(120, function(p){
    return p*0.05
});

console.log(discountedPrice)