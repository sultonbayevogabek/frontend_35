const dontEnterNotAuthorized = async (req, res, next) => {
    if (!req.admin) {
        return res.redirect('/auth')
    }
    next()
}

const dontEnterAuthorized = async (req, res, next) => {
    if (req.admin) {
        return res.redirect('/admin')
    }
    next()
}

module.exports = {
    dontEnterAuthorized, dontEnterNotAuthorized
}