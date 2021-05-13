const router = require('express').Router();
const { Product } = require('../models');
// const withAuth = require('../utils/auth');



router.get('/', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/shop');
    return;
  }

  res.render('login');
});

router.get('/shop', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const productData = await Product.findAll({
      // include: [
      //   {
      //     model: Product,
      //     attributes: ['name'],
      //   },
      // ],
    });
    console.log(productData);
    // Serialize data so the template can read it
    const products = productData.map((product) => product.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('shop', {
      products,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get('/signup', async (req, res) => {
  try {
    const { name, password} = req.body;
      if (users.find(user => user.name === name)) {

        res.render('signup', {
          message: 'User already registered.',
          messageClass: 'alert-danger'
        });

        return;
      }
      users.push({
        name,
        password
      });
      res.render('signup', {
        products,
        logged_in: req.session.logged_in
      });
    } catch(err) {
      console.log(err);
      res.status(400).json(err);
    }
  });

  // router.get('/product', async (req, res) => {
  //   try {
  //     const productData = await Product.findOne({
  //   } catch (error) {
      
  //   }
  // })


  module.exports = router;
