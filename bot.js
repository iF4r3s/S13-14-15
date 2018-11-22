const Discord = require('discord.js');
const bot13 = new Discord.Client();

bot13.on('ready', () => {
  console.log('Logged in as S13-14-15')
});


bot13.on('message', message => {
  if(message.content.startsWith('f-d')){
    message.channel.send('#daily')
  }
});


bot13.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    message.channel.send(`#rep <@505101712839671838>`)
  }
});


bot13.on('ready', () => {
  let ch = bot13.guilds.get("507972785650401301").channels.find(c => c.id == "510732060571205636");
  setInterval(function() {
    ch.send("11th Lover")
  }, 900);
});


bot13.on('message', message => {
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.reply(`شو يدك امي تقول؟؟؟`);
  if(command == "f13"){
    message.channel.send(args.join(" "))
  }
});


bot13.login(process.env.FB13);
////////////////////////
////////////////////////
const bot14 = new Discord.Client();
bot14.on('message', message => {
  if(message.content.startsWith('f-d')){
    message.channel.send('#daily')
  }
});


bot14.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    message.channel.send(`#rep <@505101712839671838>`)
  }
});


bot14.on('ready', () => {
  let ch = bot14.guilds.get("507972785650401301").channels.find(c => c.id == "510732060571205636");
  setInterval(function() {
    ch.send("11th Lover")
  }, 900);
});


bot14.on('message', message => {
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.reply(`شو يدك امي تقول؟؟؟`);
  if(command == "f14"){
    message.channel.send(args.join(" "))
  }
});


bot14.login(process.env.FB14);
////////////////////////
////////////////////////
const bot15 = new Discord.Client();
bot15.on('message', message => {
  if(message.content.startsWith('f-d')){
    message.channel.send('#daily')
  }
});


bot15.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    message.channel.send(`#rep <@505101712839671838>`)
  }
});


bot12.on('ready', () => {
  let ch = bot15.guilds.get("507972785650401301").channels.find(c => c.id == "510732060571205636");
  setInterval(function() {
    ch.send("12th Lover")
  }, 900);
});


bot15.on('message', message => {
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.reply(`شو يدك امي تقول؟؟؟`);
  if(command == "f15"){
    message.channel.send(args.join(" "))
  }
});


bot15.login(process.env.FB15);
