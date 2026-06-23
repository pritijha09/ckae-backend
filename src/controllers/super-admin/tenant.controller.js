const Tenant = require('../../models/Tenant');

exports.createTenant = async (req, res) => {
    try {
        const tenant = await Tenant.create(req.body);
        res.status(201).json(tenant);
    } catch(err) {
        res.status(500).json({
            message: err.message
        });
    } 
};

exports.getAllTenants = async (req, res) => {
    const tenants = await Tenant.find().populate('subscriptionPlanId');

    res.json(tenants);
};

exports.getTenantById = async (req, res) => {
    const tenant = await Tenant.findById(req.params.id);

    res.json(tenant);
};

exports.updateTenant = async (req, res) => {
    const tenant = await Tenant.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );

    res.json(tenant);
};

exports.deleteTenant = async (req, res) => {
    await Tenant.findByIdAndDelete(
        req.params.id
    );

    res.json({
        message: 'Tenant deleted'
    })
}