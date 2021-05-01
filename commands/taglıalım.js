const Discord = require("discord.js");
const config  = require("../config.json");
exports.execute = async (client, message, args) => {
  let embed = new Discord.MessageEmbed().setColor("#313136").setFooter().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
  let botcommands = "837761220416110652"
  if(!message.member.roles.cache.get(botcommands) && !message.member.hasPermission('ADMINISTRATOR'))
  return message.react('\<a:Sepultra_no:838050932788428830>')
let erkekrol = config.boyRoles
let kadınrol = config.girlRoles
let kayıtsızrol = config.unregisterRoles
let Tag = config.tag
let kullanıcılar = message.guild.members.cache
let etagsız = kullanıcılar.filter(a => !a.user.bot).filter(s => s.roles.cache.has(erkekrol)).filter(a => !a.user.username.includes(Tag)).size
let ktagsız = kullanıcılar.filter(a => !a.user.bot).filter(s => s.roles.cache.has(kadınrol)).filter(a => !a.user.username.includes(Tag)).size
message.channel.send(embed.setDescription(`
**${message.guild.name}** Tagsız Kayıtlılar

Erkek Rol : <@&${erkekrol}>
Kadın Rol :  <@&${kadınrol}>
Tagsız Erkek : ${etagsız}
Tagsız Kadın : ${ktagsız}

Toplam ${(etagsız + ktagsız) || "0"} Kişiye <@&${kayıtsızrol}> Veriliyor. :))`))
await kullanıcılar.filter(a => !a.user.bot)
.filter(s => s.roles.cache.has(erkekrol) || s.roles.cache.has(kadınrol))
.filter(a => !a.user.username.includes(Tag)).array().forEach(async element  => {
 await element.roles.set([kayıtsızrol])
})

await message.reply("Bizi Seçtiğiniz İçin Teşekkür Ederiz Dağıtım Üye Süresine Göre Değişebilir. Seviliyosunuz Serendia Ailesi :))")

};

module.exports.config = {
  name: ["taglıalım"],
  description: "Belirtilen üyenin ismini düzenler.",
  usage: "taglıalım <@üye> <isim> [yaş]",
  aliases: ["taglıalım"],
};

