
const express = require('express');
const contactController = require('../controllers/contact')

const router = express.Router();



router.get('/contact-us',contactController.getContact);

router.post('/success',contactController.postContact);

module.exports = router
