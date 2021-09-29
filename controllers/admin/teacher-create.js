const readFile = require('../../modules/read-file')
const editFile = require('../../modules/edit-file')
const path = require('path')
const { v4: uuidv4 } = require('uuid')

module.exports = async (req, res) => {
    const id = uuidv4()
    const { img } = req.files
    const extension = img.mimetype.split('/')[1]
    await img.mv(path.join(__dirname, '..', '..', 'public', 'img', 'teachers', id + '.' + extension))
    const teachers = await readFile('teachers.json')
    teachers.push({
        id,
        img: `/img/teachers/${id}.${extension}`,
        ...req.body,
    })
    await editFile('teachers.json', teachers)
    res.json({
        ok: true
    })
}