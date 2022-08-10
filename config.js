//SCRIPT RECODE BY FANGZ 💌
// JANGAN DI HAPUS📣

//BUY NO ENC? CHAT wa.me/6288215689772
//GITHUB: https://github.com/Fangzbotz2007
//KALAU GA ADA KASIH TANDA "-"


import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*⫘⫘⫘⫘ WAKTU ⫘⫘⫘⫘⫘*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      
    
/*⫘⫘⫘⫘⫘ MEDIA SOSIAL ⫘⫘⫘⫘*/
// Kalau gapunya di biarin aja!, atau ga di kasih tanda '-'

// kalo ga punya ketik "-" atau biarin aja biar ada creditsnya :v
global.sig = 'https://instagram.com/davidpangrib001' //Instagram mu
global.sgh = 'https://github.com/davidpangrib001' //Github mu
global.sgc = 'https://chat.whatsapp.com/HaCTmzTTcAeCMd2ETj4p2V' //Group WhatsApp mu
global.sdc = 'Nothing..' //Discord Mu
global.snh = 'Neraka' //Make ini aja gausah di ganti.

/*⫘⫘⫘⫘ALL PAYMENT⫘⫘⫘⫘⫘*/
global.pdana = '-' //Dana
global.povo = '-' //Ovo
global.pgopay = '-' //Gopay
global.ppulsa = '082128475388' //Pulsa 
global.ppulsa2 = '-' //Pulsa, Kalau nomor cuma 1, yg ini kasih tanda -
global.psaweria = 'Nothing..' //Saweria

/*⫘⫘⫘⫘ GLOBAL NOMOR ⫘⫘⫘⫘⫘*/
global.nomorbot = '6282128475388' //Nomor Bot mu
global.nomorown = '447578881250' //Nomormu
global.namebot = 'Onee' //Nama bot mu
global.nameown = 'David' //Nama mu


/*⫘⫘⫘⫘ STAFF ⫘⫘⫘⫘⫘*/
global.owner = [
  ['6282128475388'], //Owner1
  ['0'], //Owner2
  ['6281133399000'], //Owner3
  ['447578881250', 'LonT', true] //Ini buat kamu!
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user bukan disini nambahinnya, ketik .addprem @user 10


/*⫘⫘⫘⫘ APIKEY ⫘⫘⫘⫘⫘*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  bsbt: 'https://bsbt-api-rest.herokuapp.com', 
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'NezukoTachibana281207',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': '7047f08f5a0ea4bcdf55cd72',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'gedFijw7',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Fa2GhFnr',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}
// FREE APIKEY, WAJIB SUBSCRIBE:V
// kalau mau ganti apikey mu sendiri terserah

/*⫘⫘⫘⫘ WATERMAK ⫘⫘⫘⫘⫘*/
//GANTI JANGAN NGASAL.
global.wm = '                「 ら O N E E - BOT ⁩ 」' //Wm
global.wm2 = '本 O n e e  -  B o t z' //Name Wm
global.wm3 = '赤 O n e e'
global.botdate = `🗓️️ 𝗗𝗮𝘁𝗲: ${week} ${date}`
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${wktuwib}`
global.titlebot = ':)' //Ganti serah lu
global.author = '\n\n\n\n\n\n\n\n\n\n\n" Kau Tahu, Menggendong 3 Orang Bodoh Adalah Hal Yang Bodoh :v "' //Wm author


/*⫘⫘⫘⫘ LOGO ⫘⫘⫘⫘⫘*/
// INI JUGA GANTI SETERAH MU
global.thumb = 'https://telegra.ph/file/c4cfed0039e12dc8f4dd5.jpg' //Thumbnail nya
global.thumb2 = 'https://telegra.ph/file/312d5d7a5ad4d4f8b5d7a.jpg' //Thumbnail 2
global.thumbbc = 'https://telegra.ph/file/3377bec81cd8614917d24.jpg' //Image Bcgcb
global.giflogo = 'https://telegra.ph/file/048f99ba552944162b6b9.jpg' //Bebas

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='
//global.fla Jangan di ganti

/*⫘⫘⫘⫘ LOADING ⫘⫘⫘⫘⫘*/
global.wait = '*Hmm.. Bentar Dulu Ya..*'
global.eror = 'Error! Atau Perintah Hanya Untuk Owner'

/*⫘⫘⫘⫘ DOCUMENT ⫘⫘⫘⫘⫘*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumbdoc = 'https://telegra.ph/file/180d276284be5474b0d00.jpg' //Ganti jadi foto Bot

/*⫘⫘⫘⫘ FAKE SIZE ⫘⫘⫘⫘⫘*/
global.fsizedoc = '99999999999999' // 10TB
global.fpagedoc = '9999' //Gausah di ganti.

/*⫘⫘⫘⫘ HIASAN ⫘⫘⫘⫘⫘*/
// DEFAULT MENU
global.dmenut = '╭────━•〔' //top
global.dmenub = '│ ⸙͎۪۫' //body
global.dmenub2 = '│' //body for info cmd on Default menu
global.dmenuf = '𝙏𝙃𝘼𝙉𝙆𝙎 𝙏𝙊\n\n◐ Fokus Id\n◐FangzXD\n◐The.sad.boy01\n◐Kanna\n◐Nurutomo\n◐Bochilgaming\n◐Amirul\n◐Ilham\n◐Rasel\n◐Pemakai bot ini\n◐I love you\n\n*One Bot by David*' //footer

// COMMAND MENU
global.cmenut = '╭────━•〔' //top
global.cmenuh = '〕•━────┐' //header
global.cmenub = '│⸙͎۪۫ ︎' //body
global.cmenuf = '╰──────────━⃝┅⃝━────────┘\n' //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ' //after
global.pmenus = '│⸙︎' //pembatas menu selector

global.htki = '––––––⦅' // Hiasan Titile (KIRI)
global.htka = '⦆––––––' // Hiasan Title  (KANAN)
global.lopr = '🅟' //LOGO PREMIUM ON MENU.JS
global.lolm = '🅛' //LOGO FREE ON MENU.JS
global.htjava = '❏'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']


/*⫘⫘⫘⫘ STICKER ⫘⫘⫘⫘⫘*/
global.stickpack = '\n\n\n\n\n\n\n\n\n\n\n" Kau Tahu, Menggendong 3 Orang Bodoh Adalah Hal Yang Bodoh :v "F'
global.stickauth = ``

global.multiplier = 38 // The higher, The harder levelup

/*⫘⫘⫘⫘ GLOBAL EMOJI ⫘⫘⫘⫘⫘*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎫',
      health: '❤️',
      exp: '✨',
      money: '💹',
      bank: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🛍️',
      mythic: '🎁',
      legendary: '🗃️',
      superior: '💼',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
