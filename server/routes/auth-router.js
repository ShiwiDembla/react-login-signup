const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth-controller');


router.route('/login').get(authControllers.Login);
router.route('/signup').get(authControllers.Signup);

// chaining of requests
// router.route('/signup').get((req, res) => {
//     res.send('Signup');
// });



module.exports = router;