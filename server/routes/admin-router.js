const express = require('express');
const router = express.Router();

const adminControllers = require('../controllers/admin-controller');

router.route('/admin').get(adminControllers.Admin);

module.exports = router;