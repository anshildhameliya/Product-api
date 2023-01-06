const mongoose = require("mongoose");
const productschema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: [true, "price must be provided"]
    },
    feature: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.9
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: Number,
        enum: {
            values: ["apples", "mi", "samsung"], message: `{values} is not supported`
        }
    },

})

module.exports = mongoose.model("Product", productschema);