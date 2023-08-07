
const shopingCart = [ 
    { type: 'shirt', price: 1000, qantity: 3},
    { type: 'Tshirt', price: 1200, qantity: 4},
    { type: 'pant', price: 900, qantity: 5},
    { type: 'shoes', price: 2000, qantity: 2},
    { type: 'belt', price: 500, qantity: 3},
];

function shopingItem ( products) {
    let totalCost = 0;
    for ( let i = 0 ; i < products.length ; i++) {
        let product = products[i];
        totalCost = totalCost + product.price;
        
    }
    return totalCost;
}

const productPrice = shopingItem(shopingCart);
console.log(productPrice);