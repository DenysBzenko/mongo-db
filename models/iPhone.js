const mongoose = require('mongoose');

const iphoneSchema = new mongoose.Schema({
  modelName: {
    type: String,
    required: [true, 'Model name is required'],
    trim: true
  },
  storageCapacity: {
    type: String,
    required: [true, 'Storage capacity is required'],
    enum: ['64GB', '128GB', '256GB', '512GB', '1TB']
  },
  color: {
    type: String,
    required: [true, 'Color is required'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: 0
  },
  inStock: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

const iPhone = mongoose.model('iPhone', iphoneSchema);

module.exports = iPhone;
