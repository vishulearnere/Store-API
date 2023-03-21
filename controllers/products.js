const Product = require('../models/product')

// SORT - '/api/v1/products?sort=-price,name'
// 3:32
// const getAllProductsStatic = async (req, res) => {
//     throw new Error('testing async errors')
//     // whenever there is error in aync wrapper then it will throw the error to error-handler function 

//     res.status(200).send('ALL THE PRODUCTS TESTING')
// }

const getAllProductsStatic = async (req, res) => {
    // throw new Error('testing async errors')
    const {fields} = req.query
    const products = await Product.find({}).sort('name').select(fields.split(',').join(' ')).limit(10).skip(0)

    res.status(200).json({products, nbHits:products.length})
}


const getAllProducts = async (req, res) => {

    const {featured, name, price, company,sort, fields } = req. query
    queryObject = {}
    console.log(typeof(featured))
    if(featured) {
        queryObject.featured = featured === 'true' ? true :false
    }
    // const values = ['ikea', 'liddy', 'caressa', 'marcos']
    // if (company && (company.find(values.forEach(value => {
    //     value ===
        
    // });(compani)=>{
    //     compani in value

    // })){

    if(company){
        queryObject.company = company
    }
    if(name){
        queryObject.name = {$regex:name, $options:'i'} // i for Upperase or lowercase
    }

    console.log(typeof(queryObject.featured))
    console.log(queryObject.company)

//According to documantation, the sort is linked with quey like this Product.find(queryObject).sort('name -price')
// But we can't do like this const products = await Product.find(queryObject).sort('name -price')
// since we don't know whether  sort parameter is passed in query or chaining it like this will cause error so
//like this
// const products = await Product.find(queryObject)
// if (sort){ 
//     products.sort(sort)  }
// it will cause problem too since  .sort() func is not chained to query parameter that is returned from find  but it is chained 
// with the list of products
// so below is the solution 
    let result =  Product.find(queryObject) // since result is modified later so we will use const instead of let
    if (sort){
        sortList = sort.split(',').join(' ') //  to bring sort in proper format 
        result = result.sort(sortList)
    }
    else{                              // else if no sort parameter is passed in query
        result = result.sort('createdAt')
    }

    if(fields){
        fieldList = fields.split(',').join(' ')
        result.select(fieldList)
    }
    const products = await result
    res.status(200).json({ products,nbHits:products.length})
}


module.exports = {
    getAllProducts,
    getAllProductsStatic
}