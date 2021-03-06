const { MessageEmbed } = require("discord.js");
const teyitci = require("../models/teyitci.js");
const kayitlar = require("../models/kayitlar.js");

module.exports.run = async (client, message, args) => {
  let botcommands = "837761220383342672"
  if(!message.member.roles.cache.get(botcommands) && !message.member.hasPermission('ADMINISTRATOR'))
  return message.react('\<a:Sepultra_no:838050932788428830>')
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  let memberData = await kayitlar.findById(member.id);
  memberData = memberData.kayitlar.reverse();
  let ismleri =  
 memberData.length > 0
 ? memberData
          .map(
            (data, index) =>
             `\`${index+1}. \` **(${data.isim} ${data.Yaş}** ${data.roller.map(r => `<@&${r}>`).join(" ")}) \n ${new Date(data.tarih).toTurkishFormat()}`
      )
          .join("\n")
      : "Üye Daha Önce Kayıt Olmamış!";
  let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true })).setColor(client.config.embedColor);
  let tag1 = "☆";
  const tag = message.guild.members.cache.filter(m =>m.user.username.toLowerCase().includes(tag1)).size;
  if(!tag) return message.channel.send(embed.setDescription(`Sunucumuz Taglı Alımda Olduğu İçin tagımızı **☆** alması lazım!`))
  if (!member) return message.channel.send(embed.setDescription("Geçerli bir üye belirtmelisin!")).then(x => x.delete({ timeout: 5000 }));
  if (message.member.roles.highest.position <= member.roles.highest.position) return message.channel.send(embed.setDescription(`${member} senden üstün veya aynı rolde!`)).then(x => x.delete({ timeout: 5000 }));
  if (args[1]) {
    var newName;
    args = args.filter(a => a.trim().length).slice(1);
    if (client.config.name_age) {
      let name = args.filter(a => isNaN(a)).map(a => a.charAt(0).replace("i", "İ").toUpperCase() + a.slice(1)).join(" ");
      let age = args.find(a => !isNaN(a)) || undefined;
      if (!name || !age) return message.channel.send(embed.setDescription(`Geçerli bir isim ve yaş belirtmelisin!`)).then(x => x.delete({ timeout: 5000 }));
      newName = `${member.user.tag.includes(client.config.tag) ? client.config.tag : client.config.defaultTag} ${name} | ${age}`;
    } else {
      newName = `${member.user.tag.includes(client.config.tag) ? client.config.tag : client.config.defaultTag} ${args.join(" ")}`;
    };
    await member.setNickname(newName).catch(err => { return undefined; });
  };
  if (client.config.unregisterRoles.some(r => member.roles.cache.has(r))) {
    await teyitci.findByIdAndUpdate(message.author.id, { $inc: { teyitler: 1 } }, { upsert: true });
    await kayitlar.findByIdAndUpdate(member.id, { $push: { kayitlar: [{ isim: member.displayName, roller: client.config.boyRoles, tarih: Date.now() }] } }, { upsert: true });
  };
  await member.roles.set(member.roles.cache.map(r => r.id).filter(r => !client.config.unregisterRoles.includes(r) && !client.config.girlRoles.includes(r)).concat(client.config.boyRoles)).catch(err => { return undefined; });
  message.channel.send(embed.setDescription(`${member} üyesine ${client.config.boyRoles.map(r => `<@&${r}>`).join(", ")} rolleri verilerek kayıt edildi!${newName ? ` (\`${newName}\`) `: ""} \n\n Kullanıcının Geçmiş İsimleri : \n \n ${ismleri}`));
};


module.exports.config = {
  name: "erkek",
  description: "Belirtilen üyeyi erkek olarak kaydeder.",
  usage: "erkek <@üye> [isim yaş]",
  aliases: ["e", "boy", "man"],
};