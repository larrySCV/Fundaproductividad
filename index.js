require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const bodyParser = require('body-parser')

require('./db')

const middlewares = require('./middlewares')
const api = require('./controlador')

const app = express()
app.use(helmet())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use('/controlador', api)


app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

const PORT = process.env.PORT || 8080
app.listen(PORT, () =>{
    console.log(`App escucha en ${PORT}`)
})
