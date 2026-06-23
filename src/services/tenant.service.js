const Tenant = require('../models/Tenant');

class TenantService {

    async createTenant(data) {

        const existingTenant =
            await Tenant.findOne({
                email: data.email
            });

        if (existingTenant) {
            throw new Error(
                'Tenant already exists'
            );
        }

        return await Tenant.create(data);
    }

    async getAllTenants() {

        return await Tenant.find()
            .populate(
                'subscriptionPlanId'
            );
    }
}

module.exports = new TenantService();