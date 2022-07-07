let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Proses...')
  let res = `https://rimurubotz-api.herokuapp.com/api/sadboy?text=${response[0]}`
  conn.sendFile(m.chat, res, 'sadboy.png', `Sudah Jadi`, m, false)
}
handler.help = ['logosadboy'].map(v => v + ' <text>')
handler.tags = ['nulis', 'anime']
handler.command = /^(logokaneki)$/i
handler.register = true

handler.limit = true

module.exports = handler
