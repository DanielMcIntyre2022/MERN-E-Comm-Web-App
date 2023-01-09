const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        products: [
            { 
                productId: {
                type: String
            }, 
            quanity: {
                type: Number,
                default: 1
                },
            },
        ],
    },
);

module.exports = mongoose.model("Cart", CartSchema);