// after sched generated, and saved to db

import Schedule from '../models/Schedule.js';

export async function getAllSchedules(req, res) {
    try {
        const schedules = await Schedule.find({}, { classes: 0 }).sort({ generated_at: -1 }).lean(); // get latest sched 
        res.status(200).json(schedules);
    } catch (error) {
        console.error("Error fetching all schedules:", error);
        res.status(500).json({ message: "Internal server error while fetching schedules." });
    }
}

export async function getScheduleById(req, res) {
    try {
        const { id } = req.params;
        const schedule = await Schedule.findById(id).lean();

        if (!schedule) {
            return res.status(404).json({ message: 'Schedule not found with the provided ID.' });
        }

        res.status(200).json(schedule);
    } catch (error) {
        console.error(`Error fetching schedule by ID (${req.params.id}):`, error);
        res.status(500).json({ message: 'Internal server error while fetching schedule details.' });
    }
}

