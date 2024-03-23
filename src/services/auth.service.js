'use strict'

const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const crypto = require('node:crypto')
const KeyTokenService = require('./keyToken.service')
const { createTokenPair } = require('../auth/authUtils')
const { getInfoData } = require('../utils/index')
const RoleShop = {
    USER: '001',
    ADMIN: '002', 
}

class AuthService {
    static signUp = async ({ name, email, password }) => {
        try {
            //step1: check email already exists?
          
            const user = await userModel.findOne({ email }).lean()
            if (user) {
                return {
                    message: 'Email already exists!',
                }
            }

            const passwordHash = await bcrypt.hash(password, 10)

            const newShop = await userModel.create({
                name, email, password: passwordHash, roles: [RoleShop.USER],
            })
            
            // create privatekey and publickey
            const privateKey = crypto.randomBytes(64).toString('hex')
            const publicKey = crypto.randomBytes(64).toString('hex')

            const keyStore = await KeyTokenService.createKeyToken({
                userId: newShop._id,
                publicKey,
                privateKey,
            })

            if(!keyStore){
                return {
                    code: 'xxxx',
                    message: 'keyStore error'
                }
            }

            const tokens = await createTokenPair({userId: newShop._id, email}, publicKey, privateKey)
            console.log('Create Token Success::', tokens)
            
            return {
                code: 201,
                metadata: {
                    user: getInfoData({ filter: ['_id', 'name', 'email'], object: newShop}),
                    tokens
                }
            }

        } catch(err) {
            console.log(err);
            return {
                code: 404,
                metadata: null
            }
        }
    }
}

module.exports = AuthService;