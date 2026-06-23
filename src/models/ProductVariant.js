const { default: mongoose } = require("mongoose");

const ProductVariantSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    tenantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tenant',
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        default: 0
    },
    sku: {
        type: String,
        unique: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true
});

ProductVariantSchema.index({tenantId: 1});
ProductVariantSchema.index({productId: 1});
ProductVariantSchema.index({tenantId: 1, productId: 1});

module.exports = mongoose.model('ProductVariant', ProductVariantSchema)