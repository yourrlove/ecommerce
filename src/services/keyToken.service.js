'use strict';

const keytokenModel = require("../models/keytoken.model");

class KeyTokenService {
    static createKeyToken = async ({ userId, publicKey, privateKey }) => {
        try {
            const tokens = await keytokenModel.create({
                user: userId,
                publicKey,
                privateKey,
            })

            return tokens ? publicKey : null
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = KeyTokenService;