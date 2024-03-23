'use strict';

const express = require('express')
const router = express.Router()
const { apikey, permission } = require('../auth/checkAuth')

// check apikey
router.use(apikey)

// check permission
router.use(permission('0000'))

router.use('/v1/api',)

module.exports = router