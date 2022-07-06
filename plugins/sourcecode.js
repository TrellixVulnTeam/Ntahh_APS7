let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'SCRIPT')).buffer(), `
SCRIPT BOT
`.trim(), 'Masih Dalam Tahap Pengembangan', 'Back To Menu', '#? All')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|script)$/i

module.exports = handler
