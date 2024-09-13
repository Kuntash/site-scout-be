import { Router } from 'express';
import ExampleController from '../controllers/example.controller';
const router = Router();
const exampleController = new ExampleController();

router.get('/hello-world', exampleController.exampleMethod);

export default router;
