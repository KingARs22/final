const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: String,
  productsInCart: [{
    productId: String,
    quantity: { type: Number, required: true, default: 1 },
  }]
});

module.exports = mongoose.model('Cart', cartSchema);
