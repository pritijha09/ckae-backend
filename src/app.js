const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');
const tenantRoutes = require('./routes/super-admin/tenant.routes');
const subscriptionRoutes = require('./routes/super-admin/subscription.routes');
const shopAdmin = require('./routes/super-admin/shop-admin.routes');

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
    '/api/super-admin/tenants',
   tenantRoutes
);

app.use(
    '/api/super-admin/shop-admin',
    shopAdmin
)

app.use(
    '/api/super-admin/plans',
    require('./routes/super-admin/subscription.routes')
);

// app.use(
//     '/api/super-admin/dashboard',
//     require('./routes/super-admin/dashboard.routes')
// );

module.exports = app;