let handler = async m => m.reply(`
╭─「 Donasi  」
│ • Gopay[085367709870]
│ • Telkomsel [085367709870]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
