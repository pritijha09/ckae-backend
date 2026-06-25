const { default: mongoose } = require("mongoose");

const ProductSchema = new mongoose.Schema({
    tenantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tenant',
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    name: {
        type: String,
        required: true
    },

    slug: {
        type: String,
        unique: true
    },

    description: {
        type: String
    },
    flavor: {
        type: String
    },

    eggType: {
        type: String,
        enum: [
            'EGG',
            'EGGLESS'
        ]
    },

    images: [
    {
        url: {
            type: String
        },

        publicId: {
            type: String
        }
    }
],

    tags: [{
        type: String
    }],

    isActive: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true
});

ProductSchema.index({tenantId: 1});
ProductSchema.index({categoryId: 1});
ProductSchema.index({tenantId: 1, categoryId: 1});
ProductSchema.index({name: 'text'});

module.exports = mongoose.model('Product', ProductSchema)