const { default: mongoose } = require("mongoose");

const CategorySchema = new mongoose.Schema({
    tenantid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tenant'
    },
    name: String,
    image: String,
    description: String,
    isActive: Boolean
},{
    timestamps: true
});

CategorySchema.index({
    tenantId: 1
});

CategorySchema.index({
    tenantId: 1,
    name: 1
});

module.exports = mongoose.model('Category', CategorySchema)