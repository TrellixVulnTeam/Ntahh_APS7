const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let owner = 447578881250
let wa = '0'
let handler = async (m) => {
let jarot = `
*Hai kak @${m.sender.split('@')[0]} 👋*
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya5)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: jarot,
                imageMessage: message.imageMessage, 
           hydratedFooterText: 'Menu Gak Kelihatan?\nWhatsApp Sekarang Udah Ga Support Pesan Yang Ada Button ( tombolnya )',
           hydratedButtons: [{
             urlButton: {
               displayText: 'My Web',
               url: 'https://api-oneebotz.herokuapp.com'
             }

           },
                {
               urlButton: {
               displayText: 'Grup Bot',
               url: 'undefined'
             }

           },
               {
             quickReplyButton: {
               displayText: 'RULES',
               id: '.snk',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'SCRIPT',
               id: '.sc',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'LIST COMMAND',
               id: '.? all',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'info']
handler.customPrefix = /^(menu|help|.menu|.help)$/i
handler.help = ['.menu']
handler.command = new RegExp

module.exports = handler
