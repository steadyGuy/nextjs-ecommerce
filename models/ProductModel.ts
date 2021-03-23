import mongoose from 'mongoose';
import connection from '../utils/connection';

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  inStock: {
    type: Number,
    defualt: 0,
  },
  sold: {
    type: Number,
    defualt: 0,
  },
}, {
  timestamps: true,
});

export default connection.model('Product', productSchema);
