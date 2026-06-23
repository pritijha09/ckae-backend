const { default: mongoose } = require("mongoose");

const CartSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    items: [
        {
            productId: mongoose.Schema.Types.ObjectId,
            quantity: Number,
            variantId: mongoose.Schema.Types.ObjectId,
            price: Number
        }
    ]
})

module.exports = mongoose.model('Cart', CartSchema)