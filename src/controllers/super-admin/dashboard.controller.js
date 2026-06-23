const Tenant = require('../../models/Tenant');
const SubscriptionPlan = require('../../models/SubscriptionPlan');

exports.getDashboard = async (req, res) => {
    const totalTenants = await Tenant.countDocuments();

    const activeTenants = await Tenant.countDocuments({
        status: 'ACTIVE'
    });

    const totalPlans = await SubscriptionPlan.countDocuments();

    res.json({
        totalTenants,
        activeTenants,
        totalPlans
    });
};