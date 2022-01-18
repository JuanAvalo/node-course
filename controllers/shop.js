const Product = require('../models/products');
const Cart = require('../models/cart');

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

  exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
      res.render('shop/product-detail', {
        product: product, 
        docTitle: product.title,
        path: '/products'
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
    Cart.getCart(cart => {
      Product.fetchAll(products => {
        const cartProducts = [];
        for (product of products) {
          const cartProductData = cart.products.find(prod => prod.id === product.id);
          if (cart.products.find(prod => prod.id === product.id)) {
            cartProducts.push({productData: product, qty: cartProductData.qty});
          }
        }
        res.render('shop/cart', {
          prods: products, 
          docTitle: 'Shop ', 
          path: '/cart',
          products: cartProducts
        });
      })      
    })
  };

  exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, (product) => {
      Cart.addProduct(prodId, product.price);
    })
    res.redirect('/cart');
  };

  exports.postCartDeleteProduct = (req,res,next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, product => {
      Cart.deleteProduct(prodId, product.price);
      res.redirect('/cart');
    })
    
  }

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
