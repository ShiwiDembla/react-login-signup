
// Require the user model
const express = require('express');

//  const home = (req, res) => {
//     res.send('Hello World');
// }

const Login = async (req, res) => {
    try{
        res.send('Login');
    }
    catch{
        res.send('Error');
    
    }
}
const Signup = async (req, res) => {
    try{
        res.send('Signup');
    }
    catch{
        res.send('Error');
    
    }
}


module.exports = {
    Login,
    Signup
   
}
