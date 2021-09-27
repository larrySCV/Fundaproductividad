const notFound = (req, res, next) => {
    res.status(404)
    const error = new Error(`Not Found - ${req.originalUrl}`)
    next(error)    
} 

const errorHandler = (req, res, next) => {
    const statusCode = res.statusCode != 200 ? res.statusCode : 500
    res.statusCode(statusCode)
    res.json({
        menssage: err.mensaage,
        stack: process.env.NODE_ENV = 'production' ? ':': error.stack
    })
}
module.exports = {
    notFound,
    errorHandler
}
