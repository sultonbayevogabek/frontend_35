const router = require('express').Router()

router.get('/', require('../controllers/courses/courses-get'))

module.exports = {
    route: '/courses',
    router
}