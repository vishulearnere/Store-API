require('dotenv').config()

const express = require('express')
const app = express()

const productdata = require('./products.json')
const productSchema = require('./models/product')
const connectDB = require('./db/connect')

//Middleware
// app.use()
app.use(express.json())



const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        
        console.log('database is connected')
        await productSchema.deleteMany()
        await productSchema.create(productdata)
        console.log('sucess')
        app.listen('3000', () => {
            console.log('server is listening at port 5000. ')
        })
    } catch (error) {
        console.log(error)
    }

}
start()



//connectDB
// then create par poulate js ko daal do