const router = require('express').Router()

router.get('/', require('../controllers/teachers/teachers-get'))

module.exports = {
    route: '/teachers',
    router
}