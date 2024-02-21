
const z = require ('zod');

 const registerValidator = z.object({
    username: z.string({required_error:'Username is required'})
    .trim()
    .min(3, {message: 'Username must be at least 3 characters long'})
    .max(255),
    email: z.string({required_error:'Email is required'}).trim().email().min(12,{message: 'Email must be at least 12 characters long'}),
    phone: z.string({required_error:'Phone is required'}).trim().min(10, {message: 'Phone number must be 10 characters long'}),
    password: z.string({required_error:'Password is required'}).min(8, {message: 'Password must be at least 8 characters long'}  ).max(255)
});

const loginValidator = z.object({
    email: z.string({required_error:'Email is required'}).trim().email().min(12,{message: 'Email must be at least 12 characters long'}),
    password: z.string({required_error:'Password is required'}).min(8, {message: 'Password must be at least 8 characters long'}  ).max(255)
});


module.exports = {registerValidator, loginValidator};
