'use strict';

const JWT = require('jsonwebtoken');

const createTokenPair = async ( payload, publicKey, privateKey ) => {
    try {
        //access token
        const accessToken = JWT.sign( payload, publicKey, {
            expiresIn: '2 days',
        })

        //refresh token
        const refreshToken = JWT.sign( payload, privateKey, {
            expiresIn: '7 days',
        })
        
        JWT.verify( accessToken, publicKey, (err, decode) => {
            if(err) {
                console.error('error verifying access token', err)
            } else {
                console.log('decode verified access token', decode)
            }
        })

        return { accessToken, refreshToken }
    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    createTokenPair,
}