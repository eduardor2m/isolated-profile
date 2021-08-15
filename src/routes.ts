import express from 'express';
import { UserController } from './controllers/userController';

const router = express();

router.get('/users', UserController.findAll);
router.get('/users/:email', UserController.findOne);
router.get('/users/stealth/:email/:viewport', UserController.stealth);
router.post('/users', UserController.create);

export default router;
