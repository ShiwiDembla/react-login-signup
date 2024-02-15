const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth-controller');

// to get body params, we need to use post request
router.route('/login').post(authControllers.Login);
router.route('/signup').get(authControllers.Signup);

// chaining of requests
// router.route('/signup').get((req, res) => {
//     res.send('Signup');
// });



module.exports = router;