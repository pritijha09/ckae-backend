const categoryService = require('../../services/category.service');

class CategoryController {
    
    async create(req, res) {
        try {
            const result = await categoryService.create(
                req.body,
                req.user.tenantId
            );

            return res.status(201).json({
                success: true,
                data: result
            });
        } catch(error) {
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }

    async getAll(req, res) {
        try {
            const result = await categoryService.getAll(
                req.user.tenantId
            );

        return res.json({
            success: true,
            data: result
        });
        } catch(error) {
            return res.status(500), json({
                success: false,
                message: error.message
            });
        }
    }

    async getById(req, res) {
        try {
            const result = await categoryService.getById(
                req.params.id,
                req.user.tenantId
            );

            if(!result) {
                return res.status(404).json({
                    success: false,
                    message: 'Category not found'
                });
            }

            return res.status(200).json({
                success: true,
                data: result
            });

        } catch(error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }

    async update(req, res) {
        try {
            const result = await categoryService.update(
                req.params.id,
                req.user.tenantId,
                req.body
            );

            if(!result) {
                return res.status(404).json({
                    success: false,
                    message: 'Category not found'
                })
            }

            return res.status(200).json({
                success: true,
                message:
                'Category updated successfully',
                data: result
            })

        } catch(error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }

    async delete(req, res) {
        try {
            const result =
                await categoryService.delete(
                    req.params.id,
                    req.user.tenantId
                );

            if (!result) {
                return res.status(404).json({
                    success: false,
                    message:
                    'Category not found'
                });
            }

            return res.status(200).json({
                success: true,
                message:
                'Category deleted successfully'
            });
        } catch(error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}

module.exports = new CategoryController();