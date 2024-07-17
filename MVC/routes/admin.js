
const express = require('express');
const adminController = require('../controllers/products')

const router = express.Router();



router.get('/add-product',adminController.getAddProduct);

router.post('/add-product',adminController.postAddProduct);

module.exports = router
