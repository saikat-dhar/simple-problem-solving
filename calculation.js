
const shopingCart = [ 
    { type: 'shirt', price: 1000, qantity: 3},
    { type: 'Tshirt', price: 1200, qantity: 4},
    { type: 'pant', price: 900, qantity: 5},
    { type: 'shoes', price: 2000, qantity: 2},
    { type: 'belt', price: 500, qantity: 3},
];

function shopingItem (products) {
    let sum = 0;
    for ( let i = 0; i < products.length ; i++) {
        let product = products[i];
        const totalItemPrice = product.price * product.qantity ;
        sum = sum + totalItemPrice;
    }
    return sum ;
}

const totalCost = shopingItem(shopingCart);
console.log(totalCost);
