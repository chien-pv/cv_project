import { Router } from "express";
const router = Router();
import UserController from '../controllers/users_controller';

router.get('/', UserController.index)

export default router;

