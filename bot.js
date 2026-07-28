const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'Mine-Block.aternos.me',
  port: 25585,
  auth: 'offline',
  username: 'AFK_Bot'
});

bot.on('spawn', () => {
  console.log('البوت دخل السيرفر وشغال زي الفل!');
});

bot.on('end', () => {
  console.log('البوت فصل، بيحاول يدخل تاني...');
  setTimeout(() => {
    process.exit(1);
  }, 5000);
});