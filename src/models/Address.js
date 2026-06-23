const { default: mongoose } = require("mongoose");

const AddressSchema = new mongoose.Schema({
    customerId: mongoose.Schema.Types.ObjectId,

    fullName: String,

    mobile: String,

    addressLine1: String,

    city: String,

    state: String,

    pincode: String
});

module.exports = mongoose.model('Address', AddressSchema)