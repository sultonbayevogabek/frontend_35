const readFile = require('../../modules/read-file')

module.exports = async (req, res) => {
    res.render('teachers', {
        title: `O'quvchilar`,
        teachers: await readFile('teachers.json'),
        courses: await readFile('courses.json')
    })
}