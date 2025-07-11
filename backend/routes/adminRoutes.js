const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/users', adminController.getAllUsers);
router.post('/blacklist/:userId', adminController.blacklistUser);

module.exports = router;
