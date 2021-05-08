const router = require('express').Router();
const { Product } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const productData = await User.findAll({
      attributes: { },
      order: [['name', 'ASC']],
    });

    const users = productData.map((project) => project.get({ plain: true }));

    res.render('shop', {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('landing');
});

module.exports = router;
