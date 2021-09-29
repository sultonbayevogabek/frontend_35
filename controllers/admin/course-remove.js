const fs = require('fs/promises')
const readFile = require('../../modules/read-file')
const editFile = require('../../modules/edit-file')
const path = require('path')

module.exports = async (req, res) => {
    const id = req.params.id
    await fs.unlink(path.join(__dirname, '..', '..', 'public', 'img', 'course-posters', `${id}big.jpeg`))
    await fs.unlink(path.join(__dirname, '..', '..', 'public', 'img', 'course-posters', `${id}small.jpeg`))
    const courses = await readFile('courses.json')
    const idx = courses.findIndex(item => item.id === id)
    courses.splice(idx, 1)
    await editFile('courses.json', courses)
    res.json({
        ok: true,
        message: 'deleted'
    })
}