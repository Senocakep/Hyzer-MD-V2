let fetch = require('node-fetch')

let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `uhm.. urlnya mana?\n\npenggunaan:\n${usedPrefix + command} url\n\ncontoh:\n${usedPrefix + command} https://www.facebook.com/100003873289819/videos/625313175459585/`
    let res = await fetch(API('amel', '/fb', { url: text }, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    await m.reply(wait)
    await conn.sendFile(m.chat, json.data[0].url, json.data[0].url + json.data[0].type, wm, m)
}
handler.help = ['facebook', 'fb'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(facebook|fb)$/i

handler.limit = true

module.exports = handler
