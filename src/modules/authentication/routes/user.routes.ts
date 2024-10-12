import { Router } from 'express';
import UserController from '../controllers/user.controller';
import AuthMiddleware from '../../../middlewares/auth.middleware';
const authMiddleware = new AuthMiddleware();
const userController = new UserController();

const router = Router();

router.post('/signup-user', authMiddleware.checkLoginStatus, userController.signUpUser);
router.post('/login-user', authMiddleware.checkLoginStatus, userController.loginUser);
router.get('/current-user', authMiddleware.checkLoginStatus, userController.getCurrentUser);
export default router;
