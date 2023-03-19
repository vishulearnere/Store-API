const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
    },
    price: {
        type: Number,
        required: [true, 'provide price must be provided'],
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.5,

    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            mesaage: '{Value} is not supported'
        }
        // enum:['ikea','liddy','caressa','marcos'],

    },

})

module.exports = mongoose.model('Product', productSchema)