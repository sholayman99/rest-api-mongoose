//functions for product 
const productModel = require("../Models/productModel")
exports.readAdmin=(req,res)=>{
  
 };

 
exports.createProduct=async(req,res)=>{
try {
    const reqBody = req.body;
    const result = await productModel.create(reqBody);
    res.status(201).json({
        status:"success",
        data: result
     });
} catch (error) {
    console.log(error)
}
 };

 exports.updateAdmin=(req,res)=>{
 
 };

 exports.deleteAdmin=(req,res)=>{
  
 };