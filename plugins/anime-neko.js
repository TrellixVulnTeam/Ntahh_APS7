import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
	let ne = await (await fetch('https://github.com/David0l1/Ntahh/raw/MellisA/src/neko-scraper.txt')).text()
    let nek = ne.split('\n')
    let neko = pickRandom(nek)
	conn.sendButton(m.chat, 'Nyaww~ 🐾💗', wm, neko, [['Next','.neko']],m)
}
handler.command = /^(neko)$/i
handler.tags = ['anime']
handler.help = ['neko']
export default handler
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}