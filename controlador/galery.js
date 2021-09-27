let router = require('express').Router()

const { default: strictTransportSecurity } = require('helmet/dist/middlewares/strict-transport-security')
const Galeria = require('../models/galeria')

router.get('/', async (req, res, next)=>{
    try {
        const galeria = await Galeria.find()
        res.status(200).json(galeria)
    } catch (error) {
       res.status(400)
       next(error) 
    }    
})
router.get('/:id', async (req, res, next)=>{
    const {id} = req.params
    try {
        const galeria = await Galeria.findById(id)
        res.status(200).json(galeria)
    } catch (error) {
       res.status(400)
       next(error) 
    }    
})
router.post('/', async (req, res, next)=>{
    const galeria = new Galeria(req.body)
    try {
        const savedGaleria = await galeria.save()
        res.status(201).json(savedGaleria)          
    } catch (error) {
        res.status(400)
        next(error)   
    }
    
})
router.put('/:id', async (req, res, next)=>{
   const {id} = req.params
   try {
      const modifiedgaleria = await Galeria.findByIdAndUpdate(id, req.body)
      res.status(200).json(modifiedgaleria) 
   } catch (error) {
       res.status(400)
       next(error)
       
   }
})
router.delete('/:id', async (req, res, next)=>{
   const {id} = req.params
   try {
       const deletegaleria = await Galeria.findOneAndDelete(id)
       res.status(200).json(deletegaleria)
   } catch (error) {
       res.status(400)
       next(error)       
   }
})
module.exports = router
