const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
    tenantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tenant'
    },
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    role: {
        type: String,
        enum: [
            'SUPER_ADMIN',
            'SHOP_ADMIN',
            'CUSTOMER'
        ]
    },
    phone: String,
    isActive: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true
});

UserSchema.index({
    email: 1
}, {
    unique: true
});

UserSchema.index({
    tenantId: 1,
    role: 1
});

module.exports = mongoose.model('User', UserSchema)