const router = require('express').Router()
const { dontEnterNotAuthorized } = require('../middlewares/auth-middleware')
const fileUpload = require('express-fileupload')

router.get('/', dontEnterNotAuthorized, require('../controllers/admin/admin-get'))

router.post('/teacher', fileUpload(), require('../controllers/admin/teacher-create'))

router.post('/teacher-remove', require('../controllers/admin/teacher-remove'))

router.post('/course-create', fileUpload(), require('../controllers/admin/course-create'))

router.get('/course-remove/:id', require('../controllers/admin/course-remove'))

router.post('/edit-count', require('../controllers/admin/edit-count'))

module.exports = {
    route: '/admin',
    router
}