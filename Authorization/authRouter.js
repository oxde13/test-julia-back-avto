import Router from 'express';
import { check } from 'express-validator';
import controller from './authController.js';
import roleMiddleware from './Middleware/roleMiddleware.js';

const router = new Router();

router.post('/registration', [
  check('username', 'Имя пользователя не может быть пустым').notEmpty(),
  check('password', 'Пароль должен быть больше 4 и меньше 10 символов').isLength({ min: 4, max: 10 }),
], controller.registration);
router.post('/login', controller.login);
router.get('/users', roleMiddleware(['USER']), controller.getUsers);

export default router;
