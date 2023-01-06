const express = require('express');
const connectDB = require('./db/connect');
const mongoose = require("mongoose")
const app = express();
const PORT = process.env.PORT || 8000;
const product_routes = require("./routes/products")


app.get('/', (req, res) => {
    res.status(200).send('<h1>home page</h1>');
})


app.use("/api/products", product_routes)

app.listen(PORT, () => {

    console.log(`Server has been started on port no. ${PORT}`);


})