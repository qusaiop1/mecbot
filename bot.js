const Discord = require('discord.js');
const Discord = require('discord.js');
const bot = new Discord.Clinet();

const token = 'NjI0OTMwMDg3MDQ4OTcwMjYy.XYYMbg.t_ePyP5SwbNLHokjf2Kt6nWq-4s'; 

bot.on('ready', () =>.{
	console.log('this bot is online')
})
 
bot.login(process.env.token);
