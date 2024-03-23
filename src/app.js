require('dotenv').config()
const compression = require("compression")
const express = require("express")
const morgan = require("morgan")
const app = express()


// init middlewares
app.use(morgan("dev"))
app.use(compression())

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// init db
require('./dbs/init.mongo.db')

//  init routes
app.use('/', require('./routes'))

//  handling error

module.exports = app