const mongoose = require("mongoose")
const Detail = new mongoose.Schema({
    brandname: String,
    brandIconUrl: String,
    links: [
        {
            label: String,
            url: String
        },
    ],

});

module.exports = mongoose.model("detail", Detail)