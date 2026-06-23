const { default: mongoose } = require("mongoose");

const TenantSchema = new mongoose.Schema({
    shopName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    logo: String,
    address: String,
    subscriptionPlanId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubscriptionPlan',
        required: true
    },
    status: {
        type: String,
        enum: [
            'ACTIVE',
            'INACTIVE',
            'SUSPENDED'
        ],
        default: 'ACTIVE'
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Tenant', TenantSchema)