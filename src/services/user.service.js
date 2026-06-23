const User = require('../models/User');
const bcrypt = require('bcryptjs');

class UserService {

    async createShopAdmin(data) {

        const userExists =
            await User.findOne({
                email: data.email
            });

        if (userExists) {
            throw new Error(
                'Email already exists'
            );
        }

        const password =
            await bcrypt.hash(
                data.password,
                10
            );

        return await User.create({
            tenantId: data.tenantId,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            mobileNumber: data.mobileNumber,
            password: data.password,
            role: 'SHOP_ADMIN'
        });
    }
}

module.exports = new UserService();