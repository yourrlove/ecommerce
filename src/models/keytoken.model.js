'use strict';

const { Schema, model } = require('mongoose');

const DOCUMENT_NAME = 'Key'
const COLLECTION_NAME = 'Keys'

const keyTokenSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
    },
    privateKey:{
        type: String,
        required: true,
    },
    publicKey:{
        type: String,
        required: true,
    },
    refreshToken:{
        type: Array, default: [],
    }
}, {
    collection: COLLECTION_NAME,
    timestamps: true,
});

//Export the model
module.exports = model(DOCUMENT_NAME, keyTokenSchema);