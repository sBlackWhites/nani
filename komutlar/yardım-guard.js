 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async(client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`SnowFlakes Koruma Komutları`, client.user.avatarURL())
.setColor('RANDOM')
.setDescription(` SnowFlakes botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__YAKINDA__`,` Bu Komut Çok Yakında Eklenecektir.`)
.addField(`__Bilgilendirme__`,` \`${prefix}davet\` | SnowFlakes'yi Sunucunuza Davet Edersiniz\n \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n  \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(`https://i.hizliresim.com/Fv2pLl.png`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "guard",
  aliases: []
}

