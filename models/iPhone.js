const mongoose = require('mongoose');

const iphoneSchema = new mongoose.Schema({
  modelName: { type: String, required: true },
  storageCapacity: { type: String, required: true },
  color: { type: String, required: true },
  price: { type: Number, required: true },
  inStock: { type: Boolean, default: false }
});

const iPhone = mongoose.model('iPhone', iphoneSchema);

module.exports = iPhone;
