// import {z} from 'zod';

const validate = (schema) => async (req, res, next) => {
    try {
         const parsedBody = await schema.parseAsync(req.body);
        req.body = parsedBody;
        next();
    } catch (error) {

        const message = error.errors[0].message;
        res.status(400).send(message);
    }
}

module.exports = validate;

