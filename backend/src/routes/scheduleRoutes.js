import express from 'express';
import { getAllSchedules, getScheduleById } from '../controllers/masterScheduleController.js';
import { generateSchedule } from '../controllers/scheduleController.js';

const router = express.Router();

router.get('/', getAllSchedules);
router.get('/:id', getScheduleById);
router.post('/generate', generateSchedule);

export default router;
