const express = require('express');
const cors = require('cors');

const authRoutes = require('./modules/auth/auth.routes');

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
    require('./routes/super-admin/tenant.routes')
);

app.use(
    '/api/super-admin/plans',
    require('./routes/super-admin/subscription.routes')
);

app.use(
    '/api/super-admin/dashboard',
    require('./routes/super-admin/dashboard.routes')
);

module.exports = app;