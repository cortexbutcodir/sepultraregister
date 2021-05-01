const Discord = require("discord.js");
const client = new Discord.Client({ fetchAllMembers: true });
const fs = require("fs");
const config = client.config = require("./config.json");
const moment = require("moment");
require("moment-duration-format");
require("moment-timezone");
moment.locale("tr");
const mongoose = require("mongoose");
mongoose.connect(config.mongooseConnectURL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(x => console.log("MongoDB bağlantısı kuruldu!")).catch(err => console.error(err));
mongoose.connection.on('error', (err) => {
  console.log(`[Mongoose Error]: ${err}`);
});

//bu bot cortex tarafından Kodlanmıştır

Array.prototype.clear = function() {
  let newArray = [];
  for (let i of this) {
   if (!newArray.includes(i) && i !== "" && i !== " ") newArray.push(i);
  };
  return newArray;
};

Date.prototype.toTurkishFormat = function() {
  return moment.tz(this, "Europe/Istanbul").format('LLL');
};

const events = fs.readdirSync("./events");
for (let event of events) {
  if (!event.endsWith(".js")) continue;
  let prop = require(`./events/${event}`);
  if (!prop.config) continue;
  if (prop.config.name !== "ready") {
    client.on(prop.config.name, prop);
  } else {
    client.on(prop.config.name, () => prop(client));
  };
  console.log(`[KOMUT]: ${event} yüklendi!`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
const commands = fs.readdirSync("./commands");
for (let command of commands) {
  if (!command.endsWith(".js")) continue;
  let prop = require(`./commands/${command}`);
  client.commands.set(prop.config.name, prop);
  if (prop.config.aliases) {
    prop.config.aliases.clear().forEach(aliase => {
      client.aliases.set(aliase, prop.config.name);
    });
  };
  console.log(`[KOMUT]: ${prop.config.name} yüklendi!`);
};


client.on("ready", () => {
  client.channels.cache.get(config.botses).join();
})//bu bot cortex tarafından Kodlanmıştır

client.on("message", message => {
  if (message.content === '.tag')
  message.channel.send('**☆**')
})
client.on("message", message => {
    if (message.content === 'tag')
    message.channel.send('**☆**')
  })//bu bot cortex tarafından Kodlanmıştır

  client.on("message", message => {
    if (message.content === '!tag')
    message.channel.send('**☆**')
  })
  client.on("message", message => {
    if (message.content === '/tag')
    message.channel.send('**☆**')
  })
client.on('guildMemberAdd', member => {  
  member.roles.add('837761220345724928')
  member.setNickname('• İsim | Yaş')
  let cortexkullanıcı = client.users.cache.get(member.id)
  const cortexhesapkurulus = new Date().getTime()- cortexkullanıcı.createdAt.getTime();
  let cortej;//bu bot cortex tarafından Kodlanmıştır

  moment.locale("tr");
  if (cortexhesapkurulus < 1296000000) cortej =  member.roles.remove(`837761220345724928`) && member.roles.add(`838065191727792210`) && member.setNickname(`Şüpheli Hesap`);
   })


        


        

client.on("userUpdate", async (oldUser, newUser) => {
    if (oldUser.username !== newUser.username) {
    const tag = config.tag
    const sunucu = config.guildid
    const kanal = config.taglog
    const lightmind = config.taglırol 
    const reborn = config.boygirlroles  
    const sphere = config.unregisterRoles 
  
    
  
    try {
  
    if (newUser.username.includes(tag) && !client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(lightmind)) {
    await client.channels.cache.get(kanal).send(new Discord.MessageEmbed().setColor("BLACK").setDescription(`${newUser} ${tag} Tagımızı Aldığı için <@&${lightmind}> Rolünü kazandı! <a:kayit_:718606678479732746>`));
    await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.add(lightmind);
    }
    if (!newUser.username.includes(tag) && client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.cache.has(lightmind)) {
    await client.channels.cache.get(kanal).send(new Discord.MessageEmbed().setColor("BLACK").setDescription(`${newUser} ${tag} Tagımızı Çıkardığı için <@&${lightmind}> Rolünü kaybetti! <a:onaylandi:741673803838390353>`));
    await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.remove(lightmind);
    await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.remove(reborn);
    await client.guilds.cache.get(sunucu).members.cache.get(newUser.id).roles.add(sphere);
    }
  } catch (e) {//bu bot cortex tarafından Kodlanmıştır

  console.log(`Bir hata oluştu! ${e}`)
   }
  }
  });
  



 client.on('guildMemberAdd', async (member) => {

      let cortexkanal = client.channels.cache.get(config.giriskanal)
    let cortexuser = client.users.cache.get(member.id);
    let cortexkullanıcı = client.users.cache.get(member.id)
    const cortexhesapkurulus = new Date().getTime()- cortexkullanıcı.createdAt.getTime();
    let cortej;
    moment.locale("tr");
    if (cortexhesapkurulus < 1296000000) cortej = ' Güvenilir Değil   !' 
    if (cortexhesapkurulus > 1296000000) cortej = ' Güvenilir  !'
    
    cortexkanal.send(`
         :tada: Sepultra'ya hoşgeldin ${member}  (${member.id}) <#837761220823875597> Kısmından sunucu kurallarımızı okumayı unutma! 
  
      **TAGLI ALIM (☆)** Kanalların'dan Birine Geçip Tag Alıp (**☆**)Kayıt Olabilirsin     
      
         Hesabın Kuruluş Tarihi (${moment(member.user.createdAt).format("``DD MMMM YYYY hh:mm:ss``")}) **${cortej}**  
         
     \<@&837761220383342672> Rolundekiler Senle En Kısa Zamanda İlgilenicek Seninle Birlikte ${member.guild.memberCount} Kişiyiz :tada:  
      `)
    })//bu bot cortex tarafından Kodlanmıştır


     //
     
     client.on("guildMemberAdd", member => {
       let sunucuid = config.sunucuid; 
       let tag = "☆"; 
       let rol = config.taglırol; 
     if(member.user.username.includes(tag)){
     member.roles.add(rol)
       const tagalma = new Discord.MessageEmbed()
           .setColor("ff000")
           .setFooter(`Cortex ❤️ Sepultra `)
           .setDescription(`<@${member.id}> adlı kişi sunucumuza taglı şekilde katıldı, o doğuştan beri bizden !`)
           .setTimestamp()
          client.channels.cache.get(config.taglog).send(tagalma)
     }
     })
     ///
    //bu bot cortex tarafından Kodlanmıştır


    client.login(process.env.token);








