const fs = require('fs')
const fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
let tag = `https://wa.me/message/NGDV47WOF3FPC1`
  let mentionedJid = [m.sender]
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let suka = `Explore Your Galaxy`
global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': suka, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${suka},;;;\nFN:${suka},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}

let str = `*HELLO*`
let isi =`I'm OneBotz-MD Yang Di Buat Gak Niat Oleh David Karena Males Recode Jadi Pake Aja Apa Yang Ada Yah.\nKalau Ada Yg Error Bisa Langsung Report Ke Owner.\n${tag} (Owner)`
let wibu = `https://i.waifu.pics/WMTQpNf.jpg` 
let thumb = await(await fetch(wibu)).buffer()
conn.send3ButtonImg(m.chat, `https://telegra.ph/file/22d22d8c3d90931b07f54.jpg`, str, isi, 'Menu', '.command', 'Owner', '.owner', 'Credit', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://instagram.com/davidpangrib001',
    mediaType: 2, 
    description: urlnya,
    title: "Jangan Spam Tod",
    body: wm,
    thumbnail: thumb,
    sourceUrl: 'https://instagram.com/davidpangrib001'
     }}
  })
          }
handler.help = ['menu']
handler.tags = ['main']
handler.command =  /^(menu)$/i

handler.register = true

module.exports = handler