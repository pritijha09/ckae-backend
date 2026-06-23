const express = require('express');

const router = express.Router();

const auth =
require('../../middleware/auth.middleware');

const authorize =
require('../../middleware/role.middleware');

const controller =
require('../../controllers/super-admin/shop-admin.controller');

router.post(
    '/',
    auth,
    authorize('SUPER_ADMIN'),
    controller.create
);

module.exports = router;