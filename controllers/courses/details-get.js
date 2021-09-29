const readFile = require('../../modules/read-file')

module.exports = async (req, res) => {
    let courses = await readFile('courses.json')
    let course = courses.find(c => c.id === req.params.id)
    console.log(course)
    res.render('details', {
        title: `Kurs haqida`,
        courses,
        course
    })
}