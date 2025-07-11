const express = require('express');
const router = express.Router();
const visitorController = require('../controllers/visitorController');

router.post('/register', visitorController.registerVisitor);
router.post('/checkin', visitorController.checkInVisitor);
router.post('/checkout', visitorController.checkOutVisitor);
router.post('/feedback', visitorController.submitFeedback);
router.post('/find', visitorController.findVisitorByFace);

module.exports = router;
