const { generateToken } = require('../../modules/jwt')
const { PASSWORD } = require('../../config')
module.exports = async (req, res) => {
    const { password } = req.body
    console.log(PASSWORD)

    if (password === PASSWORD) {
        const token = generateToken(PASSWORD)
        res.cookie('admin', token).redirect('/admin')
    } else {
        res.redirect('/auth')
    }
}