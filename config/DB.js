const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://Ayala:y4wcdPRV34qwMUB@cluster0.07fmr.mongodb.net/MyStor?retryWrites=true&w=majority')
//     .then(() => {
//         console.log("success");

//     })
//     .catch((err) => {
//         console.log("err to connect the mongo");
//     })

module.exports = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/myShoesStore');
        console.log('successfully connected to mongo');
    } catch (error) {
        console.log(`error to connect to db ${error.message}`);
    }
}
