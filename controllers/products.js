// 3:32
// const getAllProductsStatic = async (req, res) => {
//     throw new Error('testing async errors')
//     // whenever there is error in aync wrapper then it will throw the error to error-handler function 

//     res.status(200).send('ALL THE PRODUCTS TESTING')
// }

const getAllProductsStatic = async (req, res) => {
    // throw new Error('testing async errors')


    res.status(200).send('ALL THE PRODUCTS TESTING')
}


const getAllProducts = async (req, res) => {

    res.status(200).json({
        msg: 'ALL THE PRODUCTS'
    })
}


module.exports = {
    getAllProducts,
    getAllProductsStatic
}