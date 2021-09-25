module.exports = async (req, res) => {
    res.render('courses', {
        title: `Kurslar`,
        path: '/courses'
    })
}