// import {z} from 'zod';

const validate = (schema) => async (req, res, next) => {
    try {
         const parsedBody = await schema.parseAsync(req.body);
        req.body = parsedBody;
        next();
    } catch (error) {
        const status = 400;
        const message = error.errors[0].message;
        const err = {
            status,
            message,
        }
        // res.status(400).send(message);
       
        next(err);
    }
}

module.exports = validate;

