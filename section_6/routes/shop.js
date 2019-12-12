const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const admin = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = admin.products;
  res.render('shop', { 
                        products, 
                        pageTitle: 'Shop', 
                        path: '/', 
                        hasProducts: products.length > 0,
                        activeShop: true,
                        productCSS: true  
                      }
            )
});

module.exports = router;
