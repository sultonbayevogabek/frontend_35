const readFile = require('../../modules/read-file')
module.exports = async (req, res) => {
    res.render('courses', {
        title: `Kurslar`,
        courses: await readFile('courses.json')
    })
}