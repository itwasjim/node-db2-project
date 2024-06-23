const express = require("express")
const carsRoute = require('./cars/cars-router')

const server = express()

server.use(express.json());

server.use('/api/cars', carsRoute)

server.use('*', (req, res, next) => {
    next({
        status: 404,
        message: 'Not Found'
    })
})

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = server