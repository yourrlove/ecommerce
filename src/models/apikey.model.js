'use strict';

const { Schema, model } = require('mongoose');

const DOCUMENT_NAME = 'Apikey'
const COLLECTION_NAME = 'Apikeys'

const apikeySchema = new Schema({
    key:{
        type: String,
        required: true,
        unique: true,
    },
    status:{
        type: Boolean,
        default: true,
    },
    permissions:{
        type: [String],
        required: true,
        enum: ['0000', '1111', '2222']
    }
}, {
    collection: COLLECTION_NAME,
    timestamps: true,
});

//Export the model
module.exports = model(DOCUMENT_NAME, apikeySchema);