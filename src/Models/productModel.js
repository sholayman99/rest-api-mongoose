const mongoose = require('mongoose')


const DataSchema = mongoose.Schema({
    productName: {type: String},
    productCode: {type: Number},
    quantity: {type:Number},
    price:{type:Number},
    totalPrice: {type: Number}

},
{versionKey:false ,timestamps:true}
)

const productModel = mongoose.model("products",DataSchema);
module.exports = productModel;