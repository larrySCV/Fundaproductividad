let router = require('express').Router()

const productRouter = require('./galery')
const artRouter = require('./artesanos')

router.use('/galery', productRouter)
router.use('/artesanos', artRouter)

module.exports = router