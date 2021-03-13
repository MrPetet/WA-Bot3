let handler = async (m, { conn }) => {

  if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {

    conn.reply(m.chat, 'Anda bekerja dan mendapatkan +300 XP', m)  

    global.DATABASE._data.users[m.sender].exp += 300

    global.DATABASE._data.users[m.sender].lastclaim = new Date * 1

  } else conn.reply(m.chat, 'Anda sedang kelelahan coba lagi nanti', m)

}

handler.help = ['daily', 'claim']

handler.tags = ['xp']

handler.command = /^(work|w)$/i

handler.owner = false

handler.mods = false

handler.premium = false

handler.group = false

handler.private = false

handler.admin = false

handler.botAdmin = false

handler.fail = null

handler.exp = 0

module.exports = handler
