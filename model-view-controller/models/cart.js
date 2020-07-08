const fs = require('fs');
const path = require('path');
const { json } = require('body-parser');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');

module.exports = class Cart {
    static addProduct(id, productPrice){
        // Fetch the previous Cart
        fs.readFile(p, (err, data) => {
            let cart = { products: [], totalPrice: 0 };
            if(!err) {
                cart = JSON.parse(data);
            }  

            // Analyze the Cart => Find the existing product
            const existingProduct = cart.products.find(prod => prod.id === id);
            let updatedProduct;
            if(existingProduct) {
                updatedProduct = { ...existingProduct };
                updatedProduct.qty += 1;
                let index = cart.products.findIndex(prod => prod.id === id);
                cart.products = [...cart.products];
                cart.products[index] = updatedProduct;
            } else {
                updatedProduct = { id: id,  qty: 1 };
                cart.products = [...cart.products, updatedProduct]
            }

            cart.totalPrice += +productPrice;

            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            })
            // Add new product or increase quantity
        })
        
    }

    static deleteProduct(id, price) {
        fs.readFile(p, (err, data) => {
            
            if(err) {
                return; 
            }

            const updatedCart = { ...JSON.parse(data) };
            const productIndex = updatedCart.products.findIndex(prod => prod.id === id);

            if(productIndex < 0) {
                return;
            }

            updatedCart.totalPrice = updatedCart.totalPrice - (price * updatedCart.products[productIndex].qty);
            updatedCart.products.splice(productIndex, 1);

            fs.writeFile(p, JSON.stringify(updatedCart), (err) => {
                console.log(err);
            })
        })
    }


    static getCart(cb) {
        fs.readFile(p, (err, data) => {
            if(err) {
                cb(err);
            }

            let cart = JSON.parse(data);

            cb(null, cart);
        })
    }


}
