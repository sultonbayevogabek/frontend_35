const { verifyToken } = require('../modules/jwt')
module.exports = async (req, res, next) => {
    const token = req.cookies.admin
    if (token) {
        const isValid = verifyToken(token)

        if (isValid) {
            req.admin = true
        } else {
            res.clearCookie('admin')
        }
    }
    next()
}