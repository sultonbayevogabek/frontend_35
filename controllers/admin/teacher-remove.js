const fs = require('fs/promises')
const readFile = require('../../modules/read-file')
const editFile = require('../../modules/edit-file')
const path = require('path')

module.exports = async (req, res) => {
    const { id } = req.body
    await fs.unlink(path.join(__dirname, '..', '..', 'public', 'img', 'teachers', `${id}.jpeg`))
    const teachers = await readFile('teachers.json')
    const idx = teachers.findIndex(item => item.id === req.body.id)
    teachers.splice(idx, 1)
    await editFile('teachers.json', teachers)
    res.json({
        ok: true,
        message: 'deleted'
    })
}