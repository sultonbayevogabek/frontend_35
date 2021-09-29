const readFile = require('../../modules/read-file')

module.exports = async (req, res) => {
    res.render('contact', {
        title: `Bog'lanish`,
        courses: await readFile('courses.json'),
    })
}