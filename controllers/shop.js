const Product = require('../models/products');

  exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
      res.render('shop/product-list', {
        prods: products, 
        docTitle: 'Shop ', 
        path: '/', 
        hasProducts: products.length > 0, 
        activeShop: true,
        productCSS: true
      });
    });
    
  };

  exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
      res.render('shop/index', {
        prods: products, 
        docTitle: 'Shop ', 
        path: '/index'
      });
    });
  };

  exports.getCart = (req, res, next) => {
    Product.fetchAll((products) => {
      res.render('shop/cart', {
        prods: products, 
        docTitle: 'Shop ', 
        path: '/cart'
      });
    });
  };

  exports.getOrders = (req, res, next) => {
    Product.fetchAll((products) => {
      res.render('shop/orders', {
        prods: products, 
        docTitle: 'Your Orders ', 
        path: '/orders'
      });
    });
  };

  exports.getCheckout = (req, res, next) => {
    Product.fetchAll((products) => {
      res.render('shop/checkout', {
        prods: products, 
        docTitle: 'Shop ', 
        path: '/checkout',
        docTitle: 'Checkout'
      });
    });
  };
