import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
  let cap = `Nurutomo:
https://github.com/Nurutomo
Istikmal:
https://github.com/BochilGaming
Ariffb:
https://github.com/Ariffb25
Keluarga Agus:
https://github.com/FokusDotId
Amelia Lisa:
https://github.com/Ameliascrf
Aniq12:
https://github.com/aniq12
Ilman:
https://github.com/ilmanhdyt
Amirul:
https://github.com/amiruldev20
Irwan:
https://github.com/irwanx
Rasel:
https://github.com/raselcomel
.𝚂𝚊𝚍.𝙱𝚘𝚢𝟶𝟷:
https://github.com/Kangsad01
Kannachann:
https://github.com/Kannachann
Zukashika:
https://github.com/BaraXD
Xtreshe:
https://github.com/Xtreshebot
tiang:
https://github.com/PilarV2
Fahri Adison:
https://github.com/FahriAdison
Buat Gan:
https://github.com/Madexyz
`
  let buttonMessage= {
'document':{'url':sgc},
'mimetype':global.ddocx,
'fileName':global.wm,
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'previewType':'pdf',
'title':global.titlebot,
'body':global.titlebot,
'thumbnail':await(await fetch('https://telegra.ph/file/e86be58bc09dfba470cbc.jpg')).buffer(),
'sourceUrl':sgc}},
'caption':cap,
'footer':botdate,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'ᴍᴇɴᴜ'},'type':1},
{'buttonId':'.donasi','buttonText':{'displayText':'ᴅᴏɴᴀsɪ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.help = ['tqtq', 'tqto', '?']
handler.tags = ['main']
handler.command = /^(tqtq|tqto|thanksto|thanks|\?)$/i

export default handler