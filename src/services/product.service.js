const Product =
require('../models/Product');

class ProductService {

    async create(data) {
        return await Product.create(
            data
        );
    }

    async getAll(tenantId) {

        return await Product.find({
            tenantId
        })
        .populate('categoryId');
    }

    async getById(
        id,
        tenantId
    ) {

        return await Product.findOne({
            _id: id,
            tenantId
        });
    }

    async update(
        id,
        tenantId,
        data
    ) {

        return await Product.findOneAndUpdate(
            {
                _id: id,
                tenantId
            },
            data,
            {
                new: true
            }
        );
    }

    async delete(
        id,
        tenantId
    ) {

        return await Product.findOneAndDelete({
            _id: id,
            tenantId
        });
    }
}

module.exports =
new ProductService();