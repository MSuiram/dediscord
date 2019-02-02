const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "*"; 

client.login('NTQwOTM1NDA2NzMzMDk5MDMy.DzcVxg.0-LY1v-W4bhRLGmmtgvWhNA78c4');

client.on('ready', () => {console.log('Dé est connecté');});

client.on('message', message => {
    if(message.content === prefix + "1d20"){
        nb20 = Math.floor(Math.random() * 20) + 1
        console.log(nb20)
        message.channel.send(nb20)
    }

    if(message.content === prefix + "1d12"){
        nb12 = Math.floor(Math.random() * 12) + 1
        console.log(nb12)
        message.channel.send(nb12)
    }

    if(message.content === prefix + "1d10"){
        nb10 = Math.floor(Math.random() * 10) + 1
        console.log(nb10)
        message.channel.send(nb10)
    }

    if(message.content === prefix + "1d8"){
        nb8 = Math.floor(Math.random() * 8) + 1
        console.log(nb8)
        message.channel.send(nb8)
    }

    if(message.content === prefix + "1d6"){
        nb6 = Math.floor(Math.random() * 6) + 1
        console.log(nb6)
        message.channel.send(nb6)
    }

    if(message.content === prefix + "1d4"){
        nb4 = Math.floor(Math.random() * 4) + 1
        console.log(nb4)
        message.channel.send(nb4)
    }
})
