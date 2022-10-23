const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const authHeader =
    req.headers['authorization'] ||
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjA3MDAyZjZkYzY2OWE5ODE5YmE3OSIsInJvb2xpIjoiYWRtaW4iLCJuaW1pIjoiTWFyZWsgUHV1cnVuZW4iLCJpYXQiOjE2NjY0MjI5NzQsImV4cCI6MTY2NzAyNzc3NH0.ij5ha0VsI9K4yvK7A3SPP8k7gLixf0-kRJHbV5eGVzs';

  if (!authHeader)
    return res.status(401).json({ message: 'Ei kirjauduttu sisään' });

  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Virheellinen token' });
    req.userID = decoded.id;
    req.rooli = decoded.rooli;
    req.nimi = decoded.nimi;
    next();
  });
};

module.exports = requireAuth;
