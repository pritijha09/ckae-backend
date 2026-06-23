const subscriptionPlanService = require('../../services/subscription-plan.survice');

class SubscriptionPlanController {

    async create(req, res) {

        try {

            const result =
                await subscriptionPlanService.create(
                    req.body
                );

            return res.status(201).json({
                success: true,
                data: result
            });

        } catch (error) {

            return res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }

    async getAll(req, res) {

        try {

            const result =
                await subscriptionPlanService.getAll();

            return res.status(200).json({
                success: true,
                data: result
            });

        } catch (error) {

            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }

    async getById(req, res) {

        try {

            const result =
                await subscriptionPlanService.getById(
                    req.params.id
                );

            return res.status(200).json({
                success: true,
                data: result
            });

        } catch (error) {

            return res.status(404).json({
                success: false,
                message: error.message
            });
        }
    }

    async update(req, res) {

        try {

            const result =
                await subscriptionPlanService.update(
                    req.params.id,
                    req.body
                );

            return res.status(200).json({
                success: true,
                data: result
            });

        } catch (error) {

            return res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }

    async delete(req, res) {

        try {

            await subscriptionPlanService.delete(
                req.params.id
            );

            return res.status(200).json({
                success: true,
                message:
                    'Subscription Plan deleted successfully'
            });

        } catch (error) {

            return res.status(404).json({
                success: false,
                message: error.message
            });
        }
    }
}

module.exports = new SubscriptionPlanController();