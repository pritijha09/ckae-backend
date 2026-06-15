const express = require('express');

const authMiddleware = require('../../middleware/auth.middleware');

const router = express.Router();

router.get(
    '/',
    authMiddleware,
    (req, res) => {
        res.json({
            message: 'Profile Data',
            user: req.user
        });
    }
);

module.exports = router;