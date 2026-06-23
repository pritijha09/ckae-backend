const OrderSchema = new mongoose.Schema({
    tenantId: mongoose.Schema.Types.ObjectId,

    customerId: mongoose.Schema.Types.ObjectId,

    orderNumber: String,

    items: [],

    subtotal: Number,

    deliveryCharge: Number,

    totalAmount: Number,

    paymentStatus: String,

    orderStatus: String
}, {
    timestamps: true
});

OrderSchema.index({
    customerId: 1
});

OrderSchema.index({
    orderNumber: 1
}, {
    unique: true
});

OrderSchema.index({
    tenantId: 1,
    createdAt: -1
});

module.exports = mongoose.model('Order', OrderSchema)

// PLACED
// CONFIRMED
// PREPARING
// OUT_FOR_DELIVERY
// DELIVERED
// CANCELLED