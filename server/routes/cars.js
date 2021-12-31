import express from 'express';
import { getCars, addCar} from '../controllers/cars.js';

const router = express.Router();

router.get('/', getCars);
router.post('/', addCar)

export default router;