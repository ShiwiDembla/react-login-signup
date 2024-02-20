const contactModal = require('../model/contact-model')
const errorMiddleware = require('../middleware/error-middleware')
const Contact = async (req, res, next) =>{
    try{
        const reqBody = req.body;
        // , the first approach provides more flexibility if you need to perform additional operations on the instance before saving it
        // const contact = new contactModal(reqBody);
        // await contact.save();
        
        const contact = await contactModal.create(reqBody);

        res.status(201).send({
            message: 'Contact added successfully',
            data: contact,
        });
    }
    catch(error){
        const status = 400;
        const message = error.message;
        const err = {
            status,
            message,
        }
        // console.log('Error in success: ', error.message)
        next(err);
    }
}

const getContacts = async (req, res, next) =>{
    try{
        const contacts = await contactModal.find({});
        res.status(200).send({
            message: 'Contacts fetched successfully',
            data: contacts,
        });
    }
    catch(error){
        const status = 400;
        const message = error.message;
        const err = {
            status,
            message,
        }
        // console.log('Error in success: ', error.message)
        next(err);
    }
}


module.exports = {
    Contact,
    getContacts,
};
