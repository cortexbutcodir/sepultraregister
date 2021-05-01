const { MessageEmbed } = require("discord.js");
const cfg = require("../config.json");

exports.run = async(client, message, args) => {
  let botcommands = "837761220416110652"
  if(!message.member.roles.cache.get(botcommands) && !message.member.hasPermission('ADMINISTRATOR'))
  return message.react('\<a:Sepultra_no:838050932788428830>')
    let embed = new MessageEmbed().setColor('RANDOM').setTimestamp().setFooter(`Cortex ❤️ Sepultra`)
    let rol = cfg.tagRoles
    let tag2 = cfg.tag
      message.guild.members.cache.filter(s => s.user.discriminator === tag2 || s.user.username.includes(tag2)&& !s.roles.cache.has(rol)).forEach(m => m.roles.add(rol))
    message.channel.send(embed.setDescription(`
Kullanıcı adında \`${tag2}\` bulunduran kullanıcılara rol veriliyor.

`))
  
}
module.exports.config = {
  name: ["tagtara"],
  description: "Belirtilen üyenin ismini düzenler.",
  usage: "isim <@üye> <isim> [yaş]",
  aliases: ["tagtara"],
};
