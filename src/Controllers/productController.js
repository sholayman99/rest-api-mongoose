//functions for product 
const productModel = require("../Models/productModel")


exports.readProduct=async(req,res)=>{
 try {
    const result = await productModel.find({});
    res.status(201).json({
        status:"success", data: result });
 } catch (error) {
    res.status(400).json({ status:"Failed",
   data: error.toStringify()});
 }
};

 
exports.createProduct=async(req,res)=>{
try {
    const reqBody = req.body;
    const result = await productModel.create(reqBody);
    res.status(201).json({ status:"success",data: result });
} catch (error) {
   res.status(400).json({ status:"Failed", data: error.toStringify()});
}
 };

 exports.readProductById=async(req,res)=>{
   try {
    const id = req.params.id;
    const result = await productModel.findOne({_id:id});
    res.status(201).json({status:"success",data: result });
   } catch (error) {
    res.status(400).json({ status:"Failed", data: error.toStringify() });
   }
 };

 exports.updateProduct=async(req,res)=>{
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await productModel.updateOne({_id:id},data);
    res.status(201).json({status:"success",data: result });
  } catch (error) {
    res.status(400).json({ status:"Failed", data: error.toStringify() });
  }
 };

 exports.removeProductById=async(req,res)=>{
    try {
      const id = req.params.id;
      const result = await productModel.deleteOne({_id:id});
      res.status(201).json({status:"success", data:result });
    } catch (error) {
      res.status(400).json({ status:"Failed", data: error.toStringify()});
    }
   };