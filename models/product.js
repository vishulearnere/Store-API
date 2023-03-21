const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
    },
    price: {
        type: Number,
        required: [true, 'Product price must be provided'],
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
            mesaage: '{VALUE} is not supported' //change Value to VALUE
        }
        // enum:['ikea','liddy','caressa','marcos'],

    },

})

module.exports = mongoose.model('Product', productSchema)
// docum :- https://mongoosejs.com/docs/models.html