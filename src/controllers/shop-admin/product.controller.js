const productService = require('../../services/product.service');

class ProductController {

    async create(req, res) {
        try {

        if (!req.body) {
            return res.status(400).json({
                success: false,
                message: 'req.body is undefined'
            });
        }
            const images = [];

            if (req.files) {

                req.files.forEach(
                    file => {

                    images.push(
                      file.path
                    );

                });
            }

            const product =
                await productService.create({

                    tenantId:req.user.tenantId,
                    categoryId:req.body.categoryId,
                    name:req.body.name,
                    description:req.body.description,
                    flavor:req.body.flavor,
                    eggType:req.body.eggType,
                    tags:req.body.tags,
                    images
                });

            return res.status(201).json({
                success: true,
                data: product
            });

        } catch(error) {

            return res.status(500).json({
                success: false,
                message:
                error.message
            });
        }
    }

    async getAll(req, res) {

        const products =
            await productService.getAll(
                req.user.tenantId
            );

        return res.json({
            success: true,
            data: products
        });
    }

    async getById(req, res) {

        const product =
            await productService.getById(
                req.params.id,
                req.user.tenantId
            );

        return res.json({
            success: true,
            data: product
        });
    }

    async update(req, res) {

        const product =
            await productService.update(
                req.params.id,
                req.user.tenantId,
                req.body
            );

        return res.json({
            success: true,
            data: product
        });
    }

    async delete(req, res) {

        await productService.delete(
            req.params.id,
            req.user.tenantId
        );

        return res.json({
            success: true,
            message:
            'Product Deleted'
        });
    }
}

module.exports = new ProductController();