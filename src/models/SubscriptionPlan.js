const { default: mongoose } = require("mongoose");

const SubscriptionPlanSchema = new mongoose.Schema({
    name: String,
    monthlyPrice: Number,
    maxProducts: Number,
    features: [String],
    isActive: Boolean
},{
    timestamps: true
});

module.exports =  mongoose.model('SubscriptionPlan', SubscriptionPlanSchema)
