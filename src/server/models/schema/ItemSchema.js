import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  title: String,
  isCompleted: Boolean,
});

export default ItemSchema;
