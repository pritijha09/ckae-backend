const SubscriptionPlan = require('../models/SubscriptionPlan');

class SubscriptionPlanService {
    async create(data) {

        const existingPlan =
            await SubscriptionPlan.findOne({
                name: data.name
            });

        if (existingPlan) {
            throw new Error(
                'Subscription Plan already exists'
            );
        }

        return await SubscriptionPlan.create(data);
    }

    async getAll() {

        return await SubscriptionPlan.find()
            .sort({
                createdAt: -1
            });
    }

    async getById(id) {

        const plan =
            await SubscriptionPlan.findById(id);

        if (!plan) {
            throw new Error(
                'Plan not found'
            );
        }

        return plan;
    }

    async update(id, data) {

        const plan =
            await SubscriptionPlan.findByIdAndUpdate(
                id,
                data,
                {
                    new: true
                }
            );

        if (!plan) {
            throw new Error(
                'Plan not found'
            );
        }

        return plan;
    }

    async delete(id) {

        const plan =
            await SubscriptionPlan.findByIdAndDelete(
                id
            );

        if (!plan) {
            throw new Error(
                'Plan not found'
            );
        }

        return true;
    }
}

module.exports = new SubscriptionPlanService();