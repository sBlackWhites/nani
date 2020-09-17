const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`SnowFlakes - Komut Sayısı`)
    .setDescription('**\n SnowFlakes Bot | Toplam**  **`' + client.commands.size + '`** **Komut Vardır!**')
    .setColor("RANDOM")
    .setThumbnail('https://i.ibb.co/s2qGRFx/kod.png')
    .setTimestamp()
    .setFooter("SnowFlakes | Gelişmiş Türkçe Bot | 2020" , client.user.avatarURL())

    return message.channel.send(embed);
    
};

exports.config = {
  name: 'komutlar',
  aliases: ['komut-sayısı']
};

