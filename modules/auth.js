const jwt = require('jsonwebtoken');
const { secretToken } = require('../config/config').development;

const createToken = (userInfo) => {
    const payload = {
        userId: userInfo.id,
        roleId: userInfo.roleId
    }
    const options = {
        expiresIn:'24h'
    }

    return jwt.sign(payload, secretToken, options)
}

const verifyToken = (token) => {
    const decodedToken = jwt.verify(token, secretToken)
    return decodedToken
}

module.exports = { createToken, verifyToken }
