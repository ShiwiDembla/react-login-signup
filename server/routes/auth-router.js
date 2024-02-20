const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth-controller');

const registerValidator = require('../validators/auth-validator');
const validate = require('../middleware/validate-middleware');

// to get body params, we need to use post request
router.route('/login').post(authControllers.Login);
router.route('/signup').post(validate(registerValidator),authControllers.Signup);

// chaining of requests
// router.route('/signup').get((req, res) => {
//     res.send('Signup');
// });



module.exports = router;