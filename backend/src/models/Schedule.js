import mongoose from 'mongoose'; 

const scheduleSchema = new mongoose.Schema({
  curriculum_id: { type: String, required: true }, // "curriculum_24_25"
  academic_year: { type: String, required: true },
  semester: { type: Number, required: true },    
  status: { type: String, enum: ['Draft', 'Published'], default: 'Draft' },
  generated_at: { type: Date, default: Date.now },
  classes: { type: Array, required: true }
});

export default mongoose.model('Schedule', scheduleSchema);
