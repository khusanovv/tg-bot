import TelegramBot from "node-telegram-bot-api"
const Api = "1665840542:AAHAIoi8GXucpLyjlF8bwmTcrWJEd-RmS2gnpm"
// import Promise from "bluebird"

const bot = new TelegramBot(Api)

const Promise = require('bluebird');
 Promise.config({
  cancellation: true
});

bot.onText(/\/start/, (msg) =>{
    bot.sendMessage(msg.chat.id, "salom" + msg.from.first_name || '', {
        reply_markup: {
            keyboard: [
                [{text: "Mac"}], 
                [{text: "HP"}, {text: "Acer"}]
            ],
            resize_keyboard: true,
            remove_keyboard: true,
            one_time_keyboard: true,
    
            
        },
    })

    bot.sendMessage(msg.chat.id, "salom")
})
