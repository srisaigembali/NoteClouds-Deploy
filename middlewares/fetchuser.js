const jwt = require('jsonwebtoken');
const JWT_SECRET = 'iagsoasdoahoiho1293192!&@&@&';

const fetchuser = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    res.status(401).send({ error: 'Please authenticate using a valid token' });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({
      error: 'Please authenticate using a valid token',
      message: error.message,
    });
  }
};

module.exports = fetchuser;