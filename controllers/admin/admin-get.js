const readFile = require('../../modules/read-file')

module.exports = async (req, res) => {
    res.render('admin', {
        title: 'Admin',
        courses: await readFile('courses.json'),
        teachers: await readFile('teachers.json')
    })
}