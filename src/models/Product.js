const { default: mongoose } = require("mongoose");

const ProductSchema = new mongoose.Schema({
    tenantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tenant'
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    name: String,
    description: String,
    images: [String],
    basePrice: Number,
    stock: Number,
    flavor: String,
    eggType: String,
    isActive: Boolean
},{
    timestamps: true
});

ProductSchema.index({tenantId: 1});
ProductSchema.index({categoryId: 1});
ProductSchema.index({tenantId: 1, categoryId: 1});
ProductSchema.index({name: 'text'});

module.exports = mongoose.model('Product', ProductSchema)