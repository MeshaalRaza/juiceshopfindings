const express = require('express');
const router = express.Router();
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Example user registration route
router.post('/register', async (req, res) => {
  const { email, password, _csrf } = req.body;

  // Input Validation
  if (!validator.isEmail(email)) {
    return res.status(400).send('Invalid email format');
  }
  if (!validator.isStrongPassword(password)) {
    return res.status(400).send('Password must be strong');
  }

  // Hash Password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Simulate user creation (DB insert)
  const user = {
    _id: '123456', // Dummy user ID
    email,
    password: hashedPassword
  };

  // JWT Authentication
  const token = jwt.sign({ id: user._id }, 'secretkey');

  res.cookie('csrfToken', req.csrfToken()); // Send CSRF token for client
  res.send({ token, message: 'User registered successfully' });
});

module.exports = router;
