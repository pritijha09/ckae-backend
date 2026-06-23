const tenantService =
require('../../services/tenant.service');

class TenantController {

    async createTenant(req, res) {

        try {

            const result =
                await tenantService.createTenant(
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

    async getAllTenants(req, res) {

        const tenants =
            await tenantService.getAllTenants();

        return res.json({
            success: true,
            data: tenants
        });
    }
}

module.exports = new TenantController();