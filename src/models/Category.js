const { default: mongoose } = require("mongoose");

const CategorySchema = new mongoose.Schema({
    tenantid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tenant',
        required: true
    },
    name: {
        type: String,
        required:true
    },
    image: String,
    description: String,
    isActive: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true
});

CategorySchema.index({
    tenantId: 1,
    name: 1
});

module.exports = mongoose.model('Category', CategorySchema)