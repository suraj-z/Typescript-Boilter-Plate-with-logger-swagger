import express from 'express';
import { helloController } from '../controllers/controller';

const router = express.Router();

router.get('/hello', helloController)


export default router;