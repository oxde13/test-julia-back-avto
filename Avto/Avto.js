import mongoose from 'mongoose';

const Avto = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String },
  year: { type: Number },
  price: { type: Number },
});
export default mongoose.model('Avto', Avto);
