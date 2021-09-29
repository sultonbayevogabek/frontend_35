const JWT = require('jsonwebtoken')
const { SECRET_WORD } = require('../config')

const generateToken = data => JWT.sign(data, SECRET_WORD)
const verifyToken = token => {
    try {
        return JWT.verify(token, SECRET_WORD)
    } catch (e) {
        return false
    }
}

module.exports = {
    generateToken, verifyToken
}