const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame('By Qusai','https://www.twitch.tv/hezim');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});

const prefix = "0";
const token = "NjI0OTMwMDg3MDQ4OTcwMjYy.XYYMbg.t_ePyP5SwbNLHokjf2Kt6nWq-4s";

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setStatus("dnd")
});


client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.toLowerCase().startsWith(prefix + `help`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`:mailbox_with_mail:** اوامر بوت **`)
    .setColor(0xCF40FA)
    .setDescription(`اوامر`)
    .addField(`Tickets`, `[${prefix}new]() > لإنشاء تذكرة جديدة\n[${prefix}سكر]() > اغلاق التذكرة`)

    message.channel.send({ embed: embed });
  }

  if (message.content.toLowerCase().startsWith(prefix + `ping`)) {
    message.channel.send(`Hoold on!`).then(m => {
    m.edit(`:ping_pong: Wew, made it over the ~waves~ ! **Pong!**\nMessage edit time is ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Discord API heartbeat is ` + Math.round(client.ping) + `ms.`);
    });
}

if (message.content.toLowerCase().startsWith(prefix + `new`)) {
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`سيرفر لا يحتوي على رتبت \`Support Team\`**ضف رتبت اسمها و عطها للبوت مشان يقدر يعملك تكت و شكرا**.`);
    if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`You already have a ticket open.`);
    message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
        let role = message.guild.roles.find("name", "Support Team");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        message.channel.send(`:** تم انشاء التذكرة الخاصة بك **, #${c.name}.`);
        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`Hey ${message.author.username}!`, `يرجو انتظار الادارة,  سوف نحاول الرد عليك بأسرع وقت ممكن.`)
        .setTimestamp();
        c.send({ embed: embed });
    }).catch(console.error);
}
if (message.content.toLowerCase().startsWith(prefix + `سكر`)) {
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);

    message.channel.send(`هل انت حقا تريدو ان تغلق تكت اكتب \`*سكر*\`. لديك 10 ثواني لكي تكتب امر .`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === 'سكر', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}

});


const devid = ["527107547031928842"]//غيرها الي ايديهات مبرمجين البوت
const devpr = "0"//غيرها الي البرفكس الخاص

client.on("message", message => {
    var chanarg = message.content.split(` `).slice(1).join(' ');
    if(!devid.includes(message.author.id)) return;
    if(message.content.startsWith(prefix + 'setGa')) {
        if(!chanarg) return message.channel.send("**Please include args to Set | :x:**")
    client.user.setGame(chanarg);
    message.channel.send(`**Done Set Game ${chanarg} | :white_check_mark:**`)
      } else
    if(message.content.startsWith(prefix + 'setLi')) {
        if(!chanarg) return message.channel.send("**Please include args to Set | :x:**")
    client.user.setActivity(chanarg, {type:'LISTENING'});
    message.channel.send(`**Done Set Listen ${chanarg} | :white_check_mark:**`)
      } else
    if(message.content.startsWith(prefix + 'setWa')) {
        if(!chanarg) return message.channel.send("**Please include args to Set | :x:**")
    client.user.setActivity(chanarg, {type:'WATCHING'});
    message.channel.send(`**Done Set Watch ${chanarg} | :white_check_mark:**`)
      } else
    if(message.content.startsWith(prefix + 'setSt')) {
        if(!chanarg) return message.channel.send("**Please include args to Set | :x:**")
    client.user.setGame(chanarg, "https://www.twitch.tv/UltraCodes");
    message.channel.send(`**Done Set Streaming ${chanarg} | :white_check_mark:**`)
      } else
    if(message.content.startsWith(prefix + 'setName')) {
        if(!chanarg) return message.channel.send("**Please include args to Set | :x:**")
    client.user.setUsername(chanarg).then
    message.channel.send(`**Done Set Name ${chanarg} | :white_check_mark:**`)
      } else
    if(message.content.startsWith(prefix + 'setAvatar')) {
        if(!chanarg) return message.channel.send("**Please include args to Set | :x:**")
    client.user.setAvatar(chanarg).then
    message.channel.send(`**Done :white_check_mark:**`)
}
});
  
  
  
bot.login(process.env.token);
