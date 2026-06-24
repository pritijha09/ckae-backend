const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth.routes');
const tenantRoutes = require('./routes/super-admin/tenant.routes');
const subscriptionRoutes = require('./routes/super-admin/subscription.routes');
const shopAdmin = require('./routes/super-admin/shop-admin.routes');
const categoryRoutes = require('./routes/shop-admin/category.routes');
const productRoutes = require('./routes/shop-admin/product.routes');

//const dashboardRoutes = require('./routes/super-admin/dashboard.routes');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    '/api/auth',
    authRoutes
);

app.use(
 '/uploads',
 express.static('uploads')
);

app.use(
 '/api/shop-admin/products',
 productRoutes
);

app.use(
    '/api/shop-admin/categories',
    categoryRoutes
);

app.use(
    '/api/super-admin/tenants',
   tenantRoutes
);

app.use(
    '/api/super-admin/shop-admin',
    shopAdmin
)

app.use(
    '/api/super-admin/plans',
    subscriptionRoutes
);

const cloudinary = require('./config/cloudinary');

app.get('/cloudinary-test', async (req, res) => {

    try {

        const result =
            await cloudinary.api.ping();

        return res.json(result);

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            message: error.message
        });
    }
});

// app.use(
//     '/api/super-admin/dashboard',
//     require('./routes/super-admin/dashboard.routes')
// );
app.use((err, req, res, next) => {

    console.error('GLOBAL ERROR');
    console.error(err);

    return res.status(500).json({
        success: false,
        message: err.message,
        stack: err.stack
    });
});

module.exports = app;