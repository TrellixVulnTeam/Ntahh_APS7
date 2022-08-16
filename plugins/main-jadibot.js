let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'JadiBot'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Belum Ada Fitur Jadi Bot ( Numpang ) Untuk Saat Ini.\nOwner Menyediakan Jasa Run Bot, Bisa Custom Nama Bot, Custom Thumbnail, Nomor Owner, Pilih Base Bot, Dan Lain Lain!\nTanya Harga? Ini Gratis. Hubungi Owner Jika Ingin Mwnggunakan Jasa Run Bot`
  conn.send2ButtonImg(m.chat, fla + teks, anu, instagram, 'Owner', '.owner', 'Back To Menu', '#menu', m) 
}
handler.help = ['jadibot']
handler.tags = ['info']
handler.command = /^(jadibot)$/i

module.exports = handler
