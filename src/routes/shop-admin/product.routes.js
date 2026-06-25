const express = require('express');

const router = express.Router();

const auth = require('../../middleware/auth.middleware');

const authorize = require('../../middleware/role.middleware');

const upload = require('../../middleware/upload.middleware');

const controller = require('../../controllers/shop-admin/product.controller');

router.post(
    '/',
    auth,
    authorize('SHOP_ADMIN'),
    upload.array('images', 10),
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