const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contact-controller');

router.route('/').post(contactController.Contact);
router.route('/all').get(contactController.getContacts);

module.exports = router;
