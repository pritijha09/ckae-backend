const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth.middleware');

const authorize = require('../../middleware/role.middleware');

const controller =
require('../../controllers/shop-admin/category.controller');

router.post(
    '/',
    auth,
    authorize('SHOP_ADMIN'),
    controller.create
);

router.get(
    '/',
    auth,
    authorize('SHOP_ADMIN'),
    controller.getAll
);

router.get(
    '/:id',
    auth,
    authorize('SHOP_ADMIN'),
    controller.getById
);

router.put(
    '/:id',
    auth,
    authorize('SHOP_ADMIN'),
    controller.update
);

router.delete(
    '/:id',
    auth,
    authorize('SHOP_ADMIN'),
    controller.delete
);

module.exports = router;

