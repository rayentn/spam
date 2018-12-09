const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "00";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "520161821919936513"; // ايدي السررفر
var channel = "520161919684837388";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**xSh3Dy_ NUMBER ONE**')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "00say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });
client.login(process.env.BOT_TOKEN);