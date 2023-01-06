const product = require("../models/product");

const getAllProducts = async (req, res) => {


    const { company, name, feature, sort, select } = req.query;

    const queryObject = {};

    if (company) {
        queryObject.company = company;

    }

    if (name) {
        queryObject.name = { $regex: name, $options: "i" };

    }

    if (feature) {
        queryObject.feature = feature;

    }

    let apiData = product.find(queryObject);

    if (sort) {
        let sortFix = sort.replace(",", " ");
        apiData = apiData.sort(sortFix);
    }

    if (select) {
        let selectFix = select.replace(",", " ");
        apiData = apiData.select(selectFix);
    }
    // Add pagination it wil display only 3 records in 1 page
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;

    let skip = (page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit);

    const product_details = await apiData.sort(sort);
    res.status(200).json({ product_details, Record_found: product_details.length });
};



const getAllProductsTesting = async (req, res) => {
    const product_details = await product.find(req.query);
    res.status(200).json({ product_details });
};


module.exports = { getAllProducts, getAllProductsTesting };