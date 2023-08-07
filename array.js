
const mobiles = [ 
    { brand: 'oppo', camera: '20mp', storage: '64gb', price: 19000, instok: 'yes'},
    { brand: 'redmi', camera: '28mp', storage: '64gb', price: 22000, instok: 'yes'},
    { brand: 'apple', camera: '12mp', storage: '64gb', price: 79000, instok: 'yes'},
    { brand: 'vivo', camera: '30mp', storage: '128gb', price: 30000, instok: 'no'},
    { brand: 'realme', camera: '48mp', storage: '128gb', price: 29000, instok: 'yes'},
    { brand: 'nokia', camera: '40mp', storage: '64gb', price: 39000, instok: 'yes'},
    { brand: 'samsung', camera: '30mp', storage: '128gb', price: 49000, instok: 'yes'},
    { brand: 'lenovo', camera: '60mp', storage: '256gb', price: 69000, instok: 'yes'},
    { brand: 'one plus', camera: '64mp', storage: '256gb', price: 89000, instok: 'yes'}
]

// console.log(mobiles);

function isCheapest (mobiles) {
    let highCamera = mobiles[0];
    for ( let i= 0 ; i < mobiles.length ; i++) {
        const mobile = mobiles[i];
        if ( mobile.camera > highCamera.camera ){
            highCamera = mobile;
        }
        
    }
    return highCamera;
}

const isMobile = isCheapest(mobiles);
console.log(isMobile);