const fs = require('fs')
const chalk = require('chalk')
const  { indonesia, english, spanyol} = require(`./language`)

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan ke owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'iFqvDcEa',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = true // auto read pesan / message
global.autobio = false 

//language
//Available in indonesia , english & spanyol 
//You can request others language 
global.language = indonesia  //change indonesia to english if you don't understand the language used by the bot


// Other
// Other
global.botname = "One-BotZ_MD" //namabot kalian
global.ownername= "Davitt" //nama kalian
global.myweb ="https://api-oneebotz.herokuapp.com" //bebas asal jan hapus
global.youtube = "https://youtube.com/c/ZeeoneOfc" //bebas asal jan hapus
global.github = "https://github.com/David0l1" //bebas
global.email = "davidpangrib001@gmail.com" //bebas
global.region = "Mars" //bebas
global.timezone = 'Asia/Jakarta' //  timezone wib
global.premium = ['6282128475388','6282160268332','447578881250'] //premium user
global.owner = ["447578881250","6282160268332","6282128475388"] //ganti agar fitur owner bisa di gunakan
global.ownernomer = "447578881250" // nomor wa kalian
global.ownernomerr = "+447578881250" //nmr wa kalian
global.thumbnail = "./image/bind.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://i.pinimg.com/736x/25/3d/e5/253de59d59105f24e3d2183d1c83f01e.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.packname = '' //sticker wm ubah
global.author = '×፝֟͜× One BotZ\n\n\n\n\n\n\nwa.me/6282128475388' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.typemenu = 'document'

global.limitawal = {
    premium: "Infinity",
    free: 100
}

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done, Oke Desu~',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '⏳ Sedang Di Proses',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
