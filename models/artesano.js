const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')

const artesanoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

artesanoSchema.methods.encryPassword = async password => {
    const salt = await bcryptjs.genSalt(10)
    return await bcryptjs.hash(password, salt)
 }
 artesanoSchema.methods.matchPassword = async function(password)  {
    return await bcryptjs.compare(password, this.password)
 }

const Artesano = mongoose.model('Artesano', artesanoSchema)
module.exports = Artesano


