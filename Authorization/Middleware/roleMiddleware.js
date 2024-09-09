import jwt from 'jsonwebtoken';
import config from '../config.js';

// eslint-disable-next-line func-names
const roleMiddleware = function (roles) {
  // eslint-disable-next-line func-names
  return function (req, res, next) {
    if (req.method === 'OPTIONS') {
      next();
    }

    try {
      const token = req.headers.authorization.split(' ')[1];
      if (!token) {
        return res.status(403).json({ message: 'Пользователь не авторизован' });
      }
      const { roles: userRoles } = jwt.verify(token, config.secret);
      let hasRole = false;
      userRoles.forEach((role) => {
        if (roles.includes(role)) {
          hasRole = true;
        }
      });
      if (!hasRole) {
        return res.status(403).json({ message: 'У вас нет доступа' });
      }
      next();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      return res.status(403).json({ message: 'Пользователь не авторизован' });
    }
  };
};
export default roleMiddleware;
