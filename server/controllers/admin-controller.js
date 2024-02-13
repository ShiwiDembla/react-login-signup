

const Admin = async (req, res) => {
    try {
        res.send('Admin');
    }
    catch {
        res.send('Error');
    }
}
module.exports = {
    Admin
}
