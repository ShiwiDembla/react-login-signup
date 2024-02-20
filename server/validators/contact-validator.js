const validateContact = (req, res, next) => {
    const reqBody = req.body;
    if (!reqBody.name || !reqBody.email || !reqBody.message) {
        return res.status(400).send('Please fill all the fields');
    }
    next();
}
module.exports = validateContact;