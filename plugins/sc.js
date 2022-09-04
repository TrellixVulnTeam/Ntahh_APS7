let handler = async m => m.reply(`
𒅒 https://youtu.be/1-lDeLNkgk4
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^sc$/i

module.exports = handler