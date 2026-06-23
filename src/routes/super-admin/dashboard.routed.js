const router =
    require('express').Router();

const auth =
    require('../../middleware/auth.middleware');

const authorize =
    require('../../middleware/role.middleware');

const dashboardController =
require('../../controllers/super-admin/dashboard.controller');

router.get(
    '/',
    auth,
    authorize('SUPER_ADMIN'),
    dashboardController.getDashboard
);

module.exports = router;