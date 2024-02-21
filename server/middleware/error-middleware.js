// express js error forwarding middleware

const errorMiddleware = (error, req, res, next) => {
    const status =  400;
    const message = error.message || 'Validation error';
    console.log('Error in error middleware: ', error);
    const extraDetails = error.extraDetails || 'Backend Error';
    console.log('in between Error: ', error);
    return res.status(status).json({message, extraDetails});
}

module.exports = errorMiddleware;