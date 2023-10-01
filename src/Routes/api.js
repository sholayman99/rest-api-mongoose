/**
 * Author: Md Sholayman
 * Date:11-9-2023
 * Description: This file is for the implementation of routes
 */

const express = require('express');
const { createProduct, readProduct, readProductById, updateProduct, removeProductById } = require('../Controllers/productController');
const router = express.Router();

router.get("/product",readProduct);
router.get("/product/:id",readProductById);
router.post("/product" , createProduct );
router.put("/product/:id" , updateProduct);
router.delete("/product/:id" , removeProductById);




module.exports = router;