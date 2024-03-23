'use strict'

const express = require('express')
const authController = require('../../controllers/auth.controller')
const router = express.Router()

// signUp
router.post('/shop/signup', authController.signUp)

module.exports = router