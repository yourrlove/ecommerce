'use strict';

const _ = require('lodash');

const getInfoData = ({filter = [], object = {} }) => {
    return _.pick(object,  filter)
}

module.exports = {
    getInfoData
}