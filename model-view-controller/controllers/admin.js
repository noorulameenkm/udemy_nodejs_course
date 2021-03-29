const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false
    });
}


exports.postAddProduct = (req, res, next) => {
    const {
        title,
        imageUrl,
        price,
        description
    } = req.body;
    const product = new Product(null, title, description, imageUrl, price);
    product.save()
        .then(result => {
            console.log(result,"=================");
            res.redirect('/');
        })
        .catch(err => {
            console.log(err,"^^^^^^^^^^^^^^^^^^^^^^^^^");
        })
}


exports.getEditProduct = (req, res, next) => {
    let editMode = req.query.edit;
    if(!editMode) {
        return res.redirect('/');
    }

    let prodId = req.params.productId;
    Product.findById(prodId, product => {
        if(!product) {
            return res.redirect('/');
        }

        res.render('admin/edit-product', {
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',
            editing: editMode,
            product: product
        });  
    })
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products'
        });
    });
}


exports.postEditProduct = (req,res,next) => {
    const {
        title,
        imageUrl,
        price,
        description,
        productId
    } = req.body;
    const product = new Product(productId, title, description, imageUrl, price);
    product.save();
    res.redirect('/admin/products');
}


exports.deleteProduct = (req, res, next) => {
    const { productId } = req.body;
    Product.delete(productId);
    res.redirect('/admin/products');
}