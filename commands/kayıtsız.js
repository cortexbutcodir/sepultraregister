const { MessageEmbed, } = require("discord.js");


exports.run = async(client, message, args) => {
  
  let botcommands = "837132304287531028"
  if(!message.member.roles.cache.get(botcommands) && !message.member.hasPermission('ADMINISTRATOR'))
  return message.react('\<a:Sepultra_yes:838050931538788442>')
  
    let embed = new MessageEmbed().setColor('RANDOM').setTimestamp().setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    let victim = message.guild.member(member)
    if (member.bot) return message.channel.send(new MessageEmbed().setDescription(`${message.author},  Bu Komutu botlar üzerinde veya botlar kullanamaz !`).setColor("#ff000"))
    if (!victim) return;
  victim.roles.set(["837761220345724928"]).catch()
victim.setNickname(`• İsim | Yaş`)
message.channel.send(embed.setDescription(`${victim} Adlı kullanıcı kayıtsıza atıldı!`))
};

module.exports.config = {
  name: "kayıtsız",
  description: "Belirtilen üyenin ismini düzenler.",
  usage: "kayıtsız <@üye> <isim> [yaş]",
  aliases: ["unreg", "unregister", "kayıtsız"],
};
