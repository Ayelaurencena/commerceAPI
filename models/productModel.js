const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: false
    },
    categoria: {
        type: String,
        required: true
    },
    cantidad_en_stock: {
        type: Number,
        required: true
    },
    entrega_gratis: {
        type: Boolean,
        required: true
    },

    discount: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Product", productSchema);