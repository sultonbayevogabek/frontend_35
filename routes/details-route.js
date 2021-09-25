const router = require('express').Router()

router.get('/', require('../controllers/courses/details-get'))

module.exports = {
    route: '/details',
    router
}