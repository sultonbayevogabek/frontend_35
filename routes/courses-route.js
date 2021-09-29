const router = require('express').Router()

router.get('/', require('../controllers/courses/courses-get'))

router.get('/:id', require('../controllers/courses/details-get'))

module.exports = {
    route: '/courses',
    router
}