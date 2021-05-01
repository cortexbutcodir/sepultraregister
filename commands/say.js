const { MessageEmbed } = require("discord.js");
module.exports.run = (client, message, args) => {
  
  let botcommands = "837761220383342672"
  if(!message.member.roles.cache.get(botcommands) && !message.member.hasPermission('ADMINISTRATOR'))
  return message.react('\<a:Sepultra_no:838050932788428830>')
  
  let tag1 = "☆";
const tag = message.guild.members.cache.filter(m =>m.user.username.toLowerCase().includes(tag1)).size;
var boost = message.guild.premiumSubscriptionCount;
  const swtop = message.guild.memberCount;
  var online = message.guild.members.cache.filter(off => off.presence.status !== 'offline').size
  const ses = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b);
  const sayy = new MessageEmbed()
    .setTimestamp()
    .setColor("BLACK")
    .setFooter("Cortex ❤️ Sepultra");
  message.react("\<a:Sepultra_yes:838050931538788442>>"); // Onay veya tag emoji ID
  message.channel.send(
    sayy.setDescription(`\`•\` Toplam \`${swtop}\` üye bulunmakta. 
  \`•\` Çevrim İçi toplam \`${online}\` üye bulunmakta.
  \`•\` Tagımızda toplam \`${tag}\` üye bulunmakta.
  \`•\` Ses kanallarında \`${ses}\` üye bulunmakta.
  \`•\` Sunucumuzda toplam Booster \`${boost}\` üye bulunmakta.`)
  );
};

module.exports.config = {
  name: "say",
  description: "Belirtilen üyeyi kız olarak kaydeder.",
  usage: "say <@üye> [isim yaş]",
  aliases: ["say", "info", "kaçkişi", "server-info", "say"]
};

