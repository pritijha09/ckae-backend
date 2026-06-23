const { default: mongoose } = require("mongoose");

const TenantSchema = new mongoose.Schema({
    shopName: String,
    email: String,
    phone: String,
    logo: String,
    address: String,
    subscriptionPlan: String,
    status: {
        type: String,
        default: 'Active'
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Tenant', TenantSchema)