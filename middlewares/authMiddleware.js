const jwt = require('jsonwebtoken');

const { TokenExpiredError } = jwt;

const catchError = (err, res) => {
  if (err instanceof TokenExpiredError) {
    return res
      .status(401) //unauthorized request
      .send({ message: 'Unauthorized! Access Token was expired!' });
  }

  return res.sendStatus(401).json({ status: false, message: 'Unauthorized!' });
};

exports.verifyToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['Authorization'];
  if (!token)
    return res
      .status(403) //forbidden request
      .json({ status: false, message: 'No token provided for authorisation!' });

  jwt.verify(token, process.env.JWT_SECRETE, (err, decoded) => {
    if (err) {
      return catchError(err, res);
    }
    req.userId = decoded.id;
    next();
  });
};

exports.validateRegister = (req, res, next) => {
  // username min length 3
  if (!req.body.username || req.body.username.length < 3) {
    return res.status(400).json({
      success: false,
      error: 'Please enter a username with min. 3 chars',
    });
  }
  //validate email
  let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!req.body.username || !reg.test(req.body.email)) {
    return res.status(400).json({
      success: false,
      error: 'Please enter a valid email address',
    });
  }
  // password min 6 chars
  if (!req.body.password || req.body.password.length < 6) {
    return res.status(400).json({
      success: false,
      error: 'Please enter a password with min. 6 chars',
    });
  }
  // password (repeat) does not match
  if (
    !req.body.confirmPassword ||
    req.body.password !== req.body.confirmPassword
  ) {
    return res.status(400).json({
      success: false,
      error: 'Both passwords must match',
    });
  }
  next();
};
