const readFile = require('../../modules/read-file')
const editFile = require('../../modules/edit-file')
const path = require('path')
const { v4: uuidv4 } = require('uuid')

module.exports = async (req, res) => {
    const { big_poster, small_poster } = req.files
    const id = uuidv4()
    let {
        author_img,
        author,
        title,
        description,
        duration,
        lectures,
        students,
        level,
        language,
        old_price,
        new_price,
        list
    } = req.body
    list = JSON.parse(list)
    await big_poster.mv(path.join(__dirname, '..', '..', 'public', 'img', 'course-posters', id + 'big' + '.jpeg'))
    await small_poster.mv(path.join(__dirname, '..', '..', 'public', 'img', 'course-posters', id + 'small' + '.jpeg'))
    const courses = await readFile('courses.json')
    courses.push({
        id,
        big_poster: `/img/course-posters/${id}big.jpeg`,
        small_poster: `/img/course-posters/${id}small.jpeg`,
        author_img: `/img/teachers/${author_img}.jpeg`,
        author,
        title,
        description,
        list,
        duration,
        lectures,
        students,
        level,
        language,
        old_price,
        new_price
    })
    await editFile('courses.json', courses)
    res.json({
        ok: true
    })
}