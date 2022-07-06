let handler = async (m, { conn, text, command }) => {
if (!text) throw m.reply('masukkan text')
let peoe = `https://api.lolhuman.xyz/api/ttp?apikey=Sad-Bot&text=${text}`
conn.sendImageAsSticker(m.chat, peoe, m, { packname: "sticker by", author: "hyzer" })
}
handler.help = ['ttp']
handler.command = /^(ttp)$/i

module.exports = handler
