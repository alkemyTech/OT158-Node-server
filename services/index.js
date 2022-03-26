'use strict'

const jwt = requiere('jwt-simple')
const moment = require('moment')
const confif = require('../bin/www')

function createToken (users) {
    const payload = {
        sub: users._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix(), 
    }

    return jwt.encode(payload, config.SECRET_TOKEN)
}

module.exports = createToken