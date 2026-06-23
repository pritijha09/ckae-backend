const { default: mongoose } = require("mongoose");

const SubscriptionPlanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    monthlyPrice: {
        type: Number,
        required: true,
    },
    yearlyprice: {
        type: Number,
        default: 0
    },
    maxProducts: {
        type: Number,
        default: 0
    },
    maxOrders: {
        type: Number,
        default: 0
    },
    maxUser: {
        type: Number,
        default: 1
    },
    features: [{
        type: String
    }],
    isActive: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true
});

module.exports =  mongoose.model('SubscriptionPlan', SubscriptionPlanSchema)
