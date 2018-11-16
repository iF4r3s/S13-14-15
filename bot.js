const Discord = require('discord.js');
const bot13 = new Discord.Client();
const ID = '505101712839671838';

bot13.on('ready', () => {
  console.log(`Starting....`);
});


bot13.on('message', message => {
  if(message.content.startsWith(`f-d`)){
    if(message.author.id !== ID) return;
    message.channel.send('#daily').then(msg => msg.delete(3000));
  }
});


bot13.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    if(message.author.id !== ID) return;
    message.channel.send('#rep <@505101712839671838>').then(msg => msg.delete(3000));
  }
});


bot13.on('ready', () => {
  let c = bot13.guilds.get("507972785650401301").channels.find(c => c.id == "510732060571205636");
  setInterval(function() {
    c.send("13th Lover")
  }, 900);
});


bot13.on('message', message => {
  if(message.author.bot) return;
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`:angry: | What do you want us to say?`);
  if(message.content.startsWith(`f13`)){
    if(message.author.id !== ID) return;
    message.channel.send(args.join(" ")).then(msg => msg.delete(3000));
  }
});


bot13.login(process.env.FB13)
//////////////////////////////////////////////////////////

const bot14 = new Discord.Client();

bot14.on('message', message => {
  if(message.content.startsWith(`f-d`)){
    if(message.author.id !== ID) return;
    message.channel.send('#daily').then(msg => msg.delete(3000));
  }
});


bot14.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    if(message.author.id !== ID) return;
    message.channel.send('#rep <@505101712839671838>').then(msg => msg.delete(3000));
  }
});


bot14.on('ready', () => {
  let c = bot14.guilds.get("507972785650401301").channels.find(c => c.id == "510732060571205636");
  setInterval(function() {
    c.send("14th Lover")
  }, 900);
});


bot14.on('message', message => {
  if(message.author.bot) return;
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`:angry: | What do you want us to say?`);
  if(message.content.startsWith(`f15`)){
    if(message.author.id !== ID) return;
    message.channel.send(args.join(" ")).then(msg => msg.delete(3000));
  }
});


bot14.login(process.env.FB14)
//////////////////////////////////////////////////////////

const bot15 = new Discord.Client();

bot15.on('message', message => {
  if(message.content.startsWith(`f-d`)){
    if(message.author.id !== ID) return;
    message.channel.send('#daily');
  }
});


bot15.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    if(message.author.id !== ID) return;
    message.channel.send('#rep <@505101712839671838>');
  }
});


bot15.on('ready', () => {
  let c = bot15.guilds.get("507972785650401301").channels.find(c => c.id == "510732060571205636");
  setInterval(function() {
    c.send("15th Lover")
  }, 900);
});


bot15.on('message', message => {
  if(message.author.bot) return;
  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`:angry: | What do you want us to say?`);
  if(message.content.startsWith(`f-s`)){
    if(message.author.id !== ID) return;
    message.channel.send(args.join(" "))
  }
});


bot15.login(process.env.FB15)
//////////////////////////////////////////////////////////
