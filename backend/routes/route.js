// routes/route.js
import express from 'express';
import { userSignup } from '../controller/user-controller.js';

const router = express.Router();

router.post('/signup', userSignup);

export default router;
