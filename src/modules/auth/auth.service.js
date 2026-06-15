const User = require('./auth.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class AuthService {
    async register(data) {
        const existingUser = 
            await User.findOne({
                email: data.email
            });

            if(existingUser) {
                throw new Error('User already exists');
            }

            const hashedPassword = await bcrypt.hash(data.password, 10);

            const user = await User.create({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                mobileNumber: data.mobileNumber,
                password: hashedPassword,

                // Temporary
                confirmPassword: hashedPassword
            });

        return user;
    }

    async login(email, password) {
        const user = await User.findOne({email});

        if(!user) {
            throw new Error('Invalid Credentials');
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        )

        if (!isMatch) {
            throw new Error('Invalid Credentials');
        }

        const token = 
            jwt.sign(
                {
                    userId: user._id,
                    role: user.role
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: process.env.JWT_EXPIRES_IN
                }
            );

        return {
            user,
            token
        };
    }
}

module.exports = new AuthService();