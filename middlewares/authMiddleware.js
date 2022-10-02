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
