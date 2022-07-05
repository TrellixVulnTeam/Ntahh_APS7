let axios = require('axios');
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use Example:\n ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    let res = (await axios.get(API('males', '/tiktok', { url: args[0] } ))).data;
    if (res.status != 200) throw res.message;
    if (!res) throw res.message;
    conn.sendButtonVid(m.chat, res.video, `Hai, ${conn.getName(m.sender)}'\n' }`.trim(), '*Title:* ${res.title}\n*Creator:*\n${res.author}', 'menu', usedPrefix + 'menu', m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(dl)?)$/i

handler.limit = 1

module.exports = handler
