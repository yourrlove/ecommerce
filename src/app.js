require('dotenv').config()
const compression = require("compression")
const express = require("express")
const morgan = require("morgan")
const app = express()


// init middlewares
app.use(morgan("dev"))
app.use(compression())

// init db
require('./dbs/init.mongo.db')

//  init routes
app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: "Welcome ecommerce api!"
    })
})

//  handling error

module.exports = app