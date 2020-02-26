const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');

module.exports = class Product {
    static addProduct(id){
        // Fetch the previous Cart
        fs.readFile(p, (err, data) => {
            let cart = { products: [], totalPrice: 0 };
            if(!err) {
                cart = JSON.parse(data);
            } else {
                
            }
                
            
            
        })
        // Analyze the Cart => Find the existing product
        // Add new product or increase quantity
    }


}