let router = require('express').Router()
//const morgan = require('morgan')
//const { Router } = require('express')
//const router =Router()
const Artesano = require('../models/artesano')

router.get('/',async (req, res, next)=>{
    try {
        const artesanos = await Artesano.find()
        res.status(200).json(artesanos)
    } catch (error) {
        res.status(400)
        next(error)
    }
    
})
router.get('/:id',async (req, res, next)=>{
    
    const {id} = req.params
    
    try {
        const artesano = await Artesano.findById(id)
        res.status(200).json(artesano)
    } catch (error) {
        res.status(400)
        next(error)
    }  
})
router.post('/', async (req, res, next)=>{
    const artesano = new Artesano(req.body)
    try {
        const savedartesano = await artesano.save()
        res.status(201).json(savedartesano)
    } catch (error){
        res.status(400)
        next(error)
    }

})
router.put('/:id', async (req, res)=>{
    const {id} = req.params
    try {
        const madifiedartesanos = await Artesano.findByIdAndUpdate(id, req.body)
        res.status(200).json(madifiedartesanos)
    } catch (error) {
        res.status(400)
        next(error)
    }  
  
})
router.delete('/:id', async (req, res, next)=>{
    const {id} = req.params
    try {
        const deleteartesanos = await Artesano.findByIdAndDelete(id)
        res.status(200).json(deleteartesanos)
    } catch (error) {
        res.status(400)
        next(erros)        
    }
})

module.exports = router
