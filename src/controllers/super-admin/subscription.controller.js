const SubscriptionPlan = require('../../models/SubscriptionPlan');

exports.createPlan = async (req, res) => {
    const plan = await SubscriptionPlan.create(req.body);

    res.status(201).json(plan);
}

exports.getPlans = async (req, res) => {
    const plans = await SubscriptionPlan.find();

    res.json(plans);
};

exports.updatePlan = async (req, res) => {
    const plan = await SubscriptionPlan.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );

    res.json(plan);
};

exports.deletePlan = async (req, res) => {
    await SubscriptionPlan.findByIdAndDelete(
        req.params.id
    );

    res.json({
        message: 'Plan deleted'
    });
}