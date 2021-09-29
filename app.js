const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const adminMiddleware = require('./middlewares/admin-middleware')
const cookieParser = require('cookie-parser')

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())
app.use(adminMiddleware)
const routesPath =  path.join(__dirname, 'routes')
fs.readdir(routesPath, (err, files) => {
    files.forEach(file => {
        const router = require(path.join(routesPath, file))
        app.use(router.route, router.router)
    })
})

module.exports = app