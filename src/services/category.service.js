const Category = require('../models/Category');

class CategoryService {
    async create(data, tenantId) {
        return await Category.create({
            ...data,
            tenantId
        });
    }

    async getAll(tenantid) {
        return await Category.find({
            tenantid
        });
    }

    async getById(id, tenantid) {
        return await Category.findOne({
            _id: id,
            tenantid
        });
    }

    async update(id,tenantId, data) {
        return await Category.findByIdAndUpdate(
            {
                _id: id,
                tenantId
            },
            data,
            {new: true}
        );
    }

    async delete(id, tenantId) {
        return await Category.findByIdAndDelete({
            _id: id,
            tenantId
        });
    }
}

module.exports = new CategoryService();