const path = require('path')
const fs = require('fs/promises')

module.exports = async (fileName, content) => {
    await fs.writeFile(path.join(__dirname, '..', 'data', fileName), JSON.stringify(content))
}