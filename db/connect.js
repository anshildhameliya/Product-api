const mongoose = require('mongoose');


mongoose.set('strictQuery', false);

const connectDB = mongoose.connect("mongodb://localhost:27017/Product_api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
    .then(() => {
        console.log(`successfully connected to the database`);
    }).catch((e) => {
        console.log("Connection error", e);
    });





module.exports = connectDB;