const express = require('express');
const routers = express.Router();

const {getAllProducts, getAllProductsTesting} = require("../controllers/products")

routers.route("/").get(getAllProducts);
routers.route("/testing").get(getAllProductsTesting);


module.exports = routers;