const express = require('express');
const router = express.Router();

const authController = require('../modules/auth/auth.controller');

router.post(
    '/register',
    authController.register
);

router.post(
    '/login',
    authController.login
)

router.post(
    '/super-admin/register',
    authController.createSuperAdmin
);

module.exports = router;