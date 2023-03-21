require('dotenv').config()

const productData = require('./products.json') // Data in products.json is wrapped in array 
const productSchema = require('./models/product')
const connectDB = require('./db/connect')


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('database is connected')
        await productSchema.deleteMany()
        await productSchema.create(productData)
        console.log('Sucess')
        process.exit(0) // to exit the file automatically  when our data is successfully populated 

    } catch (error) {
        console.log(error)
        process.exit(1) // to exit the file automatically after consoling the error
    }

}
start()



//connectDB
// then create par poulate js ko daal do