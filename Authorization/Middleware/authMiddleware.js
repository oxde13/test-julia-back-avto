import jwt from 'jsonwebtoken';
import config from '../config.js';

// eslint-disable-next-line func-names
const authMiddleware = function (req, res, next) {
  if (req.method === 'OPTIONS') {
    next();
  }

  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(403).json({ message: 'Пользователь не авторизован' });
    }
    const decodedData = jwt.verify(token, config.secret);
    req.user = decodedData;
    next();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    return res.status(403).json({ message: 'Пользователь не авторизован' });
  }
};
export default authMiddleware;
