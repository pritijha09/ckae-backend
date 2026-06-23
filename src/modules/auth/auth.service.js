const User = require('../../models/User');
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

    async createSuperAdmin(data) {

    const existingSuperAdmin =
        await User.findOne({
            role: 'SUPER_ADMIN'
        });

    if (existingSuperAdmin) {
        throw new Error(
            'Super Admin already exists'
        );
    }

    const existingEmail =
        await User.findOne({
            email: data.email
        });

    if (existingEmail) {
        throw new Error(
            'Email already exists'
        );
    }

    const hashedPassword =
        await bcrypt.hash(
            data.password,
            10
        );

    const user =
        await User.create({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: hashedPassword,
            role: 'SUPER_ADMIN'
        });

    return {
        success: true,
        message:
            'Super Admin Created Successfully'
    };
}

    async login(email, password) {
        const user = await User.findOne({email});
        console.log("Password", password)
        console.log("user.password", user.password)
       if (!user) {
            if (!user) {
                throw new Error('User not found');
            }
        }

        // const isMatch = await bcrypt.compare(
        //     password,
        //     user.password
        // )

        if (password !== user.password) {
            throw new Error('Invalid Password');
        }

       const token = jwt.sign(
      {
        userId: user._id,
        role: user.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1d'
      }
    );

    return {
        success: true,
        token,
        user: {
           id: user._id,
            email: user.email,
            role: user.role,
            tenantId: user.tenantId
        }
    };
        
    } 
}

module.exports = new AuthService();