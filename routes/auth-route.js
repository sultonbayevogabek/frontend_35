const router = require('express').Router()
const { dontEnterAuthorized } = require('../middlewares/auth-middleware')

router.get('/', dontEnterAuthorized, require('../controllers/auth/auth-get'))

router.post('/', require('../controllers/auth/auth-post'))


module.exports = {
    route: '/auth',
    router
}