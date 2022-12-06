const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = true //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['6283171710709'] //ur owner number
global.ownername = "Om David" //ur owner name
global.developer = "Tante David" //nama lu
global.ytname = "G Ada" //ur yt chanel name
global.socialm = "https://instagram.com/davidpangrib001" //ur github or insta name
global.sgc = "https://chat.whatsapp.com/D6BZVRSymWaFU28t2lxaO0"
global.location = "Pluto" //ur location

//bot bomdy 
global.owner = ['6283171710709'] //ur number
global.ownernomer = "6283171710709" //ur number
global.ownertag = '6283171710709' //ur tag number
global.premium = ['6283171710709'] //ur premium number
global.botname = 'Onee-MD' //ur bot name
global.ownername = "Paman David"
global.linkz = "https://youtube.com/@MicrosoftWindows" //your theme url which will be displayed on whatsapp
global.dana = "082128475388"
global.pulsa = "083171710709"
global.websitex = "https://web.dapitt.repl.co" //ur website to be displayed
global.websitex1 = "https://github.com/david0l1"
global.botscript = 'https://youtube.com/channel/UCW7iXlE7TgvJMIXQck4NYBQ' //script link
global.themeemoji = "🌟" //ur theme emoji
global.packname = "Bot Stiker" //ur sticker watermark packname
global.author = "Kunjungi :\n> web.dapitt.repl.co/wabot" //ur sticker watermark author
global.wm = "WhatsApp Bot" //ur watermark

// Other
global.sessionName = 'Onee'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: '*SELESAI*',
    admin: 'Hanya *ADMIN* Yang Bisa Memakai Fitur Ini',
    botAdmin: 'Jadikan Bot *SEBAGAI ADMIN* Agar Bisa Memakai Fitur Ini',
    premime: 'Hanya *USER PREMUIM* Yang Bisa Memakai Fitur Ini'',
    owner: 'Hanya *OWNER* Yang Bisa Memakai Fitur Ini'',
    group: 'Gunakan Ini *DI GRUP*',
    private: 'Gunakan Ini Di *Private Chat*'',
    bot: 'Mau Ngapain?',
    wait: '𝘞𝘢𝘪𝘵\n𝘚𝘦𝘥𝘢𝘯𝘨 𝘋𝘪 𝘗𝘳𝘰𝘴𝘦𝘴....',    
    linkm: 'Where is the link?',
    endLimit: '𝘓𝘪𝘮𝘪𝘵 𝘈𝘬𝘢𝘯 𝘋𝘪 𝘳𝘦𝘴𝘦𝘵 12 𝘏𝘢𝘳𝘪',
    nsfw: '𝘍𝘪𝘵𝘶𝘳 𝘕𝘴𝘧𝘸 𝘉𝘦𝘭𝘶𝘮 𝘋𝘪 𝘢𝘬𝘵𝘪𝘧𝘬𝘢𝘯 𝘖𝘭𝘦𝘩 𝘈𝘥𝘮𝘪𝘯',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thum = fs.readFileSync("./Media/theme/jarot.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./Media/theme/jarot.jpg") //ur logo pic
global.err4r = fs.readFileSync("./Media/theme/jarot.jpg") //ur error pic
global.thumb = fs.readFileSync("./Media/theme/jarot.jpg") //ur thumb pic
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//module api
module.exports = {
api:{
     removebg: ['zNKnayDFH1nugtA81fkPMzXn','5CyygkXiT5vrki2Z6ZsUCE8u','Mz4yJkagrCLotdgsr4Ms39ud','vEeWnzQws9kJoYNMYKhbT1s6','2arViktax9HUdMqy9U7wFLKT','sfZpRHNwVPAG57nZVHijYZ9v','oqVVyQ2rBDYdUrxThg4GdjhA','rGp4axHpQ56Y5tRLX7J789QC','NfPx6NgTkpVYLnKUZHCAM1P3'],//https://remove.bg/api
     unscreen: ['N6J4Bjbyh2V4eqhAPTWYtFER','fcKJkPstNXp4pjntYt3bR38E'],
     upscaling: '1255173112',
     imgsuper: ['198f69d4b2msh0021bb0690669a6p1f3a80jsn9cab1ae485cc','85731a45bbmshf7bd86f09b300c2p14e544jsncd18a8d5dba2'],//https://super-image1.p.rapidapi.com/
     speechtotext: ['897beebb3ac74ceeaa6f8d0903b2297a']
   }
   }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
