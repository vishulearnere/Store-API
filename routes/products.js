const express = require('express')
const {
    getAllProducts,
    getAllProductsStatic
} = require('../controllers/products')
const router = express.Router()


router.route('/').get(getAllProducts) // Two Different Ways
router.get('/static', getAllProductsStatic)

module.exports = router