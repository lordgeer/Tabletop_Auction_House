const router = require('express').Router();
const { Product } = require('../models');
const withAuth = require('../utils/auth');




router.get('/shop', withAuth, async (req, res) => {
  try {
    const productData = await User.findAll({
      attributes: { },
      order: [['name', 'ASC']],
    });

    const users = productData.map((project) => project.get({ plain: true }));

    res.render('shop', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('*', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/shop');
    return;
  }

  res.render('login');
});

module.exports = router;
