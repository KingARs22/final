const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productId: { type: String, unique: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
  visibility: { type: String, default: 'on' }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
