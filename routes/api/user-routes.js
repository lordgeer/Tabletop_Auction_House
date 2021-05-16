const router = require('express').Router();
const { User } = require('../../models');
// const seedUsers = require('../../seeds/user-seeds');

// post login route
router.post('/login', async (req, res) => {
  console.log('route-hit');
  try {
    // Find the user who matches the posted user name
    const userData = await User.findOne({ where: { name: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect User Name or Password, please try again' });
      return;
    }
    // Verify the posted password with the password store in the database
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect User Name or Password, please try again' });
      return;
    }
    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'Welcome back to the Auction House!' });
    });
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
    
  }
});

// post route for signup
router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// post route for logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
