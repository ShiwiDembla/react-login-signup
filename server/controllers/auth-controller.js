
// Require the user model
const express = require('express');
const userModel = require('../model/user-model');
const bcrypt = require('bcrypt');

//  const home = (req, res) => {
//     res.send('Hello World');
// }

const Login = async (req, res) => {
    try{
        res.status(200).send({ message: 'Login' , data: req.body})
    }
    catch{
        res.send('Error');
    
    }
}
const Signup = async (req, res) => {
    try{
        const {username, email, phone, password} = req.body;
        const userExists = await userModel.findOne({email});
        const phoneExists = await userModel.findOne({phone});
        if(userExists || phoneExists){
            return res.status(400).send({message: 'User already exists with this email or phone number'});
        }
        const saltRounds = 10;
        // const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = await userModel.create({username, email, phone, password, isAdmin: false});

        res.status(201).send({message: 'User created successfully', data: user});

    }
    catch{
        res.send('Error');
    
    }
}


module.exports = {
    Login,
    Signup
   
}
