const Telegraf = require('Telegraf')

const bot = new Telegraf(process.env.1153609425:AAEp4VE5bgPL9huVPlSEkcCQ8_zy4ACwrFc)
bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a stiker'))
bot.on('stiker', (ctx) => ctx.reply('go'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()
