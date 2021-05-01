const Discord = require("discord.js");


exports.run =async (bot, message, args) => {

if(![('837761220416110652')].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('RANDOM').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));


let cortexxs = message.guild.members.cache.filter(m => m.roles.cache.filter(r => r.id !== message.guild.id).size == 0)

if(args[0] == "ver") {
    cortexxs.forEach(r => {
r.roles.add('837761220345724928')
})
const cst = new Discord.MessageEmbed()
.setAuthor(" "+message.author.username +" ", message.author.avatarURL())
.setColor("RANDOM")
.setDescription("Sunucuda rolü olmayan \`"+ cortexxs.size +"\` kişiye kayıtsız rolü verildi!")
message.channel.send(cst).then(message => message.react("\<a:vas_yes:837298916550508554>"))
} else if(!args[0]) {
const cst1 = new Discord.MessageEmbed()
.setAuthor(""+message.author.username +" ", message.author.avatarURL())
.setColor("RANDOM")
.setDescription("Sunucumuzda rolü olmayan \`"+ cortexxs.size +"\` kişi var. Bu kişilere kayıtsız rolü vermek için \`.rolsüz ver\` komutunu uygulayın!")
message.channel.send(cst1)
};
  };
module.exports.config = {
  name: "rsv",
  description: "Belirtilen üyeyi kız olarak kaydeder.",
  usage: "rolsüzver<@üye> [isim yaş]",
  aliases: ["rsv", "rolsüz", "rolsüzver"],
};