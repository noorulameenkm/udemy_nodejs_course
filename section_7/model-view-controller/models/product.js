const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductsFromFile = (cb) =>{
    let products = [];

    fs.readFile(p, (err, fileContent) => {
        if(!err){
            products = JSON.parse(fileContent);
        }
        cb(products);
    });
}

module.exports = class Product {
    constructor(title) { 
        this.title = title
    }

    save(){
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            })
        })      
    }

    static fetchAll(cb){
        getProductsFromFile(cb);
    }
}