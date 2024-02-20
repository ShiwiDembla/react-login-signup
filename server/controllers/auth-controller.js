
// Require the user model
const express = require('express');
const userModel = require('../model/user-model');
const bcrypt = require('bcrypt');
const errorMiddleware = require('../middleware/error-middleware');


//  const home = (req, res) => {
//     res.send('Hello World');
// }

const Login = async (req, res, next) => {
    const {email, password} = req.body;
    try{
        //returns entire row of the user, not just the email
       const userExists = await userModel.findOne({email})

       // if user doesn't exist it just returns null, and the code will break.
       if(!userExists){
           return res.status(400).send({message: 'User does not exist'});
         }

         // create a new async function in model to store the result of the comparison

        //  const isMatch = await bcrypt.compare(password, userExists.password);
        const isMatch = await userExists.comparePassword(password);

            if(!isMatch){
                // 401 is for unauthorized access
                return res.status(401).send({message: 'Invalid credentials'});
            }
            // const token = await userExists.generateToken();
            res.status(200).send({
                message: 'Login successful',
                data: userExists,
                token: await userExists.generateToken(),
                userId: userExists._id.toString(),
            });
    }
    catch(error){
        // res.send('Error');
        const status = 400;
        const message = error.message;
        const err = {
            status,
            message,
        }
        console.log('Error in success: ', error.message)
        next(err);
    
    }
}
const Signup = async (req, res, next) => {
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

        res.status(201).send({
        message: 'User created successfully', 
        data: user, 
        token: await user.generateToken(),
        //converting to string as the _id is an object
        userId: user._id.toString(),
    });

    }
    catch(error){
        const status = 400;
        const message = error.message;
        const err = {
            status,
            message,
        }
        console.log('Error in success: ', error.message)
        next(err);

    
    }
}


module.exports = {
    Login,
    Signup
   
}
