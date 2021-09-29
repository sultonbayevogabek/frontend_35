const path = require('path')
const fs = require('fs/promises')

module.exports = async (fileName) => {
    const data = await fs.readFile(path.join(__dirname, '..', 'data', fileName), { encoding: 'utf-8' })
    return JSON.parse(data)
}