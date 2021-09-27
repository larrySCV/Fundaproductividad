const mongoose = require('mongoose')

const galeriaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    codigo:{
        type: String
    },
    descripcion:{
        type: String
    },
    creado: {
        type: Date,
        default: Date.now
    }
}) 

const Galeria = mongoose.model('Galeria', galeriaSchema)
module.exports = Galeria