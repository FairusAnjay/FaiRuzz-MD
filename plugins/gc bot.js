let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
┌─「 Group F Botz 」
│ • *Link :* https://chat.whatsapp.com/G8Ofqsp0oIl19GPE5FI8Kk
❏────
`.trim()
  m.reply(text)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^gc(bot|botz)$/i

export default handler
