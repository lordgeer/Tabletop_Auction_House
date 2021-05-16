const router = require('express').Router();
const { Product } = require('../models');
const withAuth = require('../utils/auth');

// shows login page unless signed in, then shows shop page
router.get('/', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/shop');
    return;
  }

  res.render('login');
});

// shop route that requires sign-in
router.get('/shop', withAuth, async (req, res) => {
  try {
    // Get all products and JOIN with user data
    const productData = await Product.findAll({});
    // Serialize data so the template can read it
    const products = productData.map((product) => product.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('shop', {
      products,
      logged_in: true
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// working signup route
router.get('/signup', async (req, res) => {
  try {
    const { name, password } = req.body;
  
    res.render('signup', {
        logged_in: req.session.logged_in
      });
    } catch(err) {
      console.log(err);
      res.status(400).json(err);
    }
  });

  // product route
  router.get('/product', withAuth, async (req, res) => {
    try {
      // Get all products and JOIN with user data
      const productData = await Product.findAll({});
      // Serialize data so the template can read it
      const products = productData.map((product) => product.get({ plain: true }));
      // Pass serialized data and session flag into template
      res.render('product', {
        products,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });

  // view item route
  router.get('/view-item/:id', withAuth, async (req, res) => {
    try {
      const productData = await Product.findByPk(req.params.id, {});
      const product = productData.get({ plain: true });
  
      res.render('view-item', {
        ...product,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  module.exports = router;
