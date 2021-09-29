const readFile = require('../../modules/read-file')
const editFile = require('../../modules/edit-file')

module.exports = async (req, res) => {
    const { id, count } = req.body
    const courses = await readFile('courses.json')
    const idx = courses.findIndex(c => c.id === id)
    courses[idx].students = count
    await editFile('courses.json', courses)
    res.redirect('/admin')
}