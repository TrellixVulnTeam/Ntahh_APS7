let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix,ย text,ย command, args }) => {
	let ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 9999999,
    status: 404,
    surface : 404,
    message: `โ? TIKTOK DOWNLOADER`, 
    orderTitle: `โฎMenu โธ`,
    thumbnail: await (await fetch('https://telegra.ph/file/c2c7057129ff6f42095b8.jpg')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    let res = await fetch(`https://botcahx-rest-api.herokuapp.com/api/dowloader/tikok?url=${args[0]}`)
    let json = await res.json()
    if (!json.status) return conn.sendButtonLoc(m.chat, 'Masukin Linknya Bang..\n\nContoh:${usedPrefix+command} https://vt.tiktok.com/ZSdpHWxxG/?k=1`, wm, 'Sip', 'Ok', m)
    let data = json.result
    let video = data.video
    let thumb = await (await fetch(data.thumb)).buffer()
    let tag = `@${m.sender.split('@')[0]}`
    conn.reply(m.chat, '*WAIT! | Mohon Tunggu Sebentar...*', m, {quoted: m, thumbnail: await (await fetch('https://telegra.ph/file/b9a32ee41970d7a71b476.jpg')).buffer(), contextInfo: { externalAdReply: {title: 'Lagi Memuat Data', sourceUrl: 'https://vm.tiktok.com/ZSR5W9UQH', body: 'ยฉ ๐ท๐๐๐๐๐๐๐๐ฃ ๐ฑ๐ข ๐๐๐๐๐๐๐', thumbnail: await (await fetch('https://i.pinimg.com/736x/0f/c7/17/0fc71790359f0a2bbda728e70e6ace0c.jpg')).buffer(),}}})
let txt = `Hai Kak ${tag}, Videonya Udah Jadi Nih, Kalau Mau Versi Ekstensi Lain, Pilih Dibawah Ya` 
    await conn.sendButtonVid(m.chat, video, txt, 'Mau Ganti Ke Versi Music Klik Dibawah', `Audio`, `.tiktokaudio ${args[0]}`, 0, { quoted: ftroli,
    contextInfo: { forwardingScore: 99999, isForwarded: true,
        externalAdReply: {
        	sourceUrl:ย 'https://vt.tiktok.com/ZSRRmS8vh/',
            title: 'Tiktok Downloader ๐ฅ',
            body: wm2,
          thumbnail: thumb
        }
     }
    })
 } 
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^((tt|tiktok)?(dl)?)$/i

module.exports = handler
