/**
 * Author: Md Sholayman
 * Date:11-9-2023
 * Description: This file is for the implementation of routes
 */

const express = require('express');
const { createProduct } = require('../Controllers/productController');
const router = express.Router();


router.post("/product" , createProduct )



module.exports = router;