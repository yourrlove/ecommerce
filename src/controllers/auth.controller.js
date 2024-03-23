'use strict'
const AuthService = require('../services/auth.service')


class AuthController {

    signUp = async (req, res, next) => {
        try {
            console.log(`[P]::signUp:`, req.body)
            /*
                200: Ok
                201: Created
            */

            return res.status(201).json( await AuthService.signUp(req.body) )
        } catch(err) {
            console.log(err);
        }
    }
}

module.exports = new AuthController()