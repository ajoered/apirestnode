'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const ProductController = require('./controllers/product')

app.use(bodyParser.urlencoded( {extended: false}));
app.use(bodyParser.json());

app.get('/api/product', ProductController.getProducts)
app.get('/api/product/:productId', ProductController.getProduct)
app.post('/api/product', ProductController.saveProduct)
app.put('/api/product/:productId', ProductController.saveProduct)
app.delete('/api/product/:productId', ProductController.deleteProduct);

module.exports = app
