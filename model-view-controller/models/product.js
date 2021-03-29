const Cart = require('./cart'),
      db = require('../util/db');


module.exports = class Product {
    constructor(id, title, description, imageUrl, price) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        return db.execute(
            'INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)',
            [this.title, this.price, this.imageUrl, this.description]
        )
    }


    static delete(id) {
        
    }

    static fetchAll() {
        return db.execute('SELECT * FROM products');   
    }

    static findById(id) {
    
    }
}