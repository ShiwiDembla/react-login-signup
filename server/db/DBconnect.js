const mongoose = require('mongoose');

const URL = "mongodb+srv://sukkuribastudent1:Sumit3245@cluster0.fcd5fsf.mongodb.net/"

const DBConnect = async () => {
    try {
        await mongoose.connect(URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error while connecting to MongoDB', error);
        process.exit(0);
    }
}

module.exports = DBConnect;