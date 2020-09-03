require('dotenv').config();

const chalk = require('chalk')

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(chalk.blue('Bot Started at ' + new Date().toLocaleString() + " EST"))
})

client.login(process.env.TOKEN)
