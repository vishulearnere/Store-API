require('dotenv').config()

//  Package - wrapper for aync error
require('express-async-errors')

const express = require('express')
const app = express()
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')
const productRouter = require('./routes/products')


const connectDB = require('./db/connect')


// middleware
app.use(express.json())

//routes
app.get('/', (req, res) => {

    res.status(200).send('Products')

})

app.use('/api/v1/products', productRouter)
app.use(errorMiddleware) // It has error as parameter so it will  only  excecute 
// when next(error,req, res, next) is callled with error as parameter . 
app.use(notFoundMiddleware)


const port = process.env.PORT || 3000
const start = async () => {
    try {
        connectDB(process.env.MONGO_URI)
        console.log('connected to DB')
        app.listen(port, () => {
            console.log(`Server is listening at PORT NO ${port}... `)

        })

    } catch (error) {
        console.log(error)
    }

}
start()

// console.log(Date.now())







//Router  
// Controllers - all functions
// Model - Task schema, validation 
// db - connect t0database
// dot env - secrect credentials
// middleware - json, async func, not found and error-handler
// populate.js- to insert mock data
// populate.js - run file to poulate js
// filter data - search by name, contains name, sort by price or name,
// POST- create the data  
// GET - (Allproducts) - All the products are displayed except description
// GET- single product is displyed
// DELETED - some specific 
// PUT/PATCH - edit or update the data
//  
// filter data - search by name, contains name, sort by price or name,