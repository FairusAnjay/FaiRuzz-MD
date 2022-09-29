import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let text = `┌─「 Group F Botz 」
│ • *Link :* https://chat.whatsapp.com/G8Ofqsp0oIl19GPE5FI8Kk
❏────

*Wajib Join Cuy, Klo ga ntar Gw Satirin🤠☝️*
`
let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
const message = {
            document: { url: thumb },
            jpegThumbnail: await (await fetch(thumb)).buffer(), fileName: global.wm, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: info,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: '🌎 OFFICIAL GROUP',
                        url: sgc
                    }
                },
                {
                    callButton: {
                        displayText: '📞 Add me',
                        phoneNumber: nomorown
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'MENU',
                        id: '.menu'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Test Bot',
                        id: '.ping'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'DONASI',
                        id: '.donasi'
                    }
                },
            ]
        }
        return await conn.sendMessage(m.chat, message)*/
conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.wm, body: 'Yaw? ada apa kak?', sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
handler.customPrefix = /^(gc|gcbot|grupbot|grup)$/i
handler.command = new RegExp

export default handler
