const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth.middleware');
const authorize = require('../../middleware/role.middleware');
const controller = require('../../controllers/super-admin/subscription.controller');


router.post(
    '/',
    auth,
    authorize('SUPER_ADMIN'),
    controller.create
);

router.get(
    '/',
    auth,
    authorize('SUPER_ADMIN'),
    controller.getAll
);

router.get(
    '/:id',
    auth,
    authorize('SUPER_ADMIN'),
    controller.getById
);

router.put(
    '/:id',
    auth,
    authorize('SUPER_ADMIN'),
    controller.update
);

router.delete(
    '/:id',
    auth,
    authorize('SUPER_ADMIN'),
    controller.delete
);

module.exports = router;