let handler = async (m, { conn }) => {
let info = `
*${htki} MENU ${htka}*
Ada 2 Pilihan Nih.. Mau Yang Mana?
`
const sections = [
   {
	title: `✃ LIST MENU`,
	rows: [
	    {title: "∫ 🧿» Simpel «", rowId: '.mw', description: '╰► Menu simpel Onee Botz' },
	    {title: "∫ 🌸» List Menu «", rowId: '.?', description: '╰► Menu Keceh Onee Botz' },
        ]
        }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "LIST MENU ☁︎",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.command = /^(menu)$/i
handler.private = false

export default handler
