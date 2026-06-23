const express = require('express');

const router = express.Router();
const auth = require('../../middleware/auth.middleware');
const authorize = require('../../middleware/role.middleware');

const controller = require(
 '../../controllers/super-admin/tenant.controller'
);

router.post(
    '/',
    auth,
    authorize('SUPER_ADMIN'),
    controller.createTenant
);

router.get(
    '/',
    auth,
    authorize('SUPER_ADMIN'),
    controller.getAllTenants
);

// router.get(
//     '/:id',
//     auth,
//     authorize('SUPER_ADMIN'),
//     controller.getTenantById
// );

// router.put(
//     '/:id',
//     auth,
//     authorize('SUPER_ADMIN'),
//     controller.updateTenant
// );

// router.delete(
//     '/:id',
//     auth,
//     authorize('SUPER_ADMIN'),
//     controller.deleteTenant
// );

// console.log(typeof auth);
// console.log(typeof authorize);
// console.log(typeof controller.create);
// console.log(typeof controller.getAll);

module.exports = router;