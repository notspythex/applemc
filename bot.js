const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'play.applemc.fun', // server ip
  port: 25565, // java default
  username: '247gameboy', // cracked username
  version: '1.16.5'
})

bot.on('login', () => {
  console.log('✅ Logged in as 247gameboy')
})

bot.on('spawn', () => {
  console.log('📌 Bot spawned, sending login command...')
  bot.chat('/login 247gameboy')

  setTimeout(() => {
    console.log('➡️ Sending /server banana')
    bot.chat('/server banana')

    setTimeout(() => {
      console.log('➡️ Sending /warp afk')
      bot.chat('/warp afk')
    }, 5000)
  }, 3000)
})

bot.on('kicked', console.log)
bot.on('error', console.log)
