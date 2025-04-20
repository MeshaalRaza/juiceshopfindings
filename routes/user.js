// Sample updated user route with input validation and password hashing
//input validation
const validator = require('validator');
if (!validator.isEmail(email)) {
  return res.status(400).send('Invalid email');
}
//password hashing
const bcrypt = require('bcrypt');
const hashedPassword = await bcrypt.hash(password, 10);
//jwt authentication
const jwt = require('jsonwebtoken');
const token = jwt.sign({ id: user._id }, 'secretkey');
res.send({ token });
//security headers
const helmet = require('helmet');
app.use(helmet());
