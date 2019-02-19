const Discord = require('discord.js');
const client = new Discord.Client();
const Macker = new Discord.Client();
const cre1 = new Discord.Client();
const cre2 = new Discord.Client();
const prefix = "-";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('╚[══════════════════════════════════════════════════════]╝')
  console.log(`[Start] ${new Date()}`);
  console.log('System Bot ONLINE!!')
  console.log('╚[══════════════════════════════════════════════════════]╝')
});


client.on('ready', () => {
     client.user.setActivity("System",{type: 'LISTENING'});
});

client.on('ready', () => {
                client.user.setStatus("dnd");

});

const child_process = require("child_process");
const adminprefix = "-";
const devs = ['419471939493429250'];

client.on('message', message => {
if(message.content === adminprefix + "res") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`⚠️ **الشخص الذي اعاد تشغيل البوت ${message.author.username}**`);
        console.log(`⚠️ جاري اعادة تشغيل البوت... ⚠️`);
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`تم اعادة تشغيل البوت`);
    }
  
  });


var KinG66S = {};
client.on('guildMemberRemove', member => {
KinG66S[member.id] = {roles: member.roles.array()};
});

client.on('guildMemberAdd', member => {
if(!KinG66S[member.user.id]) return;
console.log(KinG66S[member.user.id].roles.length);
for(let i = 0; i < KinG66S[member.user.id].roles.length + 1; i++) {
member.addRole(KinG66S[member.user.id].roles.shift());
}
});

client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","『Member』"));
    });

client.on('message', async message => {
  if(message.content.startsWith("-تقديم")) {
    await message.channel.send("**أكتب ايدي البوت**").then(e => {
    let filter = m => m.author.id === message.author.id
    let bot = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
    .then(collected => {
      bot = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('**ماهي مميزات بوتك؟**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('**عدد سيرفرات ومستخدمين البوت**').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 400000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()

ms.delete()

 message.channel.send('جاري التقديم ..').then(b => {
        setTimeout(() => {
  b.edit(`**الصبر مفتاح الفرج**`)
        },2000);
var gg = message.guild.channels.get("502436644901748746")
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
.setTitle('INVITE THE BOT')
.setURL(`https://discordapp.com/oauth2/authorize?client_id=${bot}&permissions=0&scope=bot`)
.setDescription(`**  ايدي البوت 🆔  : \n ${bot}\nمميزاته✌ 🔗 :\n ${md} \nعدد المستخدمين والسيرفرات 😎 :\n ${br}  \nصاحب البوت  : <@${message.author.id}> **`)  
          .setFooter(`『✽M Bots List』`)
.setTimestamp()
});
}        
})
})
})
})
})
})
})
 }
})


client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '『✽الترحيب』')
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('#00ff47')
        .setThumbnail(memberavatar)
        .addField(':crown: | اسمك:  ',`${member}`)
                .addField(':arrow_down:|عضو رقم',`${member.guild.memberCount}`)                       
     .setFooter("منور")
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });

var dat = JSON.parse("{}");
var guild;
client.on("ready", () => {
    guild =  client.guilds.get("501724887409229827")
    guild.fetchInvites()
    .then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        })
    })
})
var channel;
client.on("guildMemberAdd", (member) => {
    channel = member.guild.channels.get("501724888097357842")
    if (!channel) {
        console.log("!channel fails");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    if(!guild){
       guild =  client.guilds.get("501724887409229827")
    }
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {

                    channel.send(`:rose:${member} joined over ${Invite.inviter}'s invite:rose:`)            
                     }
            dat[Inv] = Invite.uses;
        })
    })
});

client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`راح ورح`)
    .addField('تبقى',`**『${member.guild.memberCount}』**`,true)
    .setColor('RED')
    .setFooter(`لا يازمن`, '')

var channel =member.guild.channels.find('name', '『✽الترحيب』')
if (!channel) return;
channel.send({embed : embed});
});

var dat = JSON.parse("{}");
var guild;
client.on("ready", () => {
    guild =  client.guilds.get("464890802246647829")
    guild.fetchInvites()
    .then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        })
    })
})
var channel;
client.on("guildMemberAdd", (member) => {
    channel = member.guild.channels.get("465136987569913857")
    if (!channel) {
        console.log("!channel fails");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    if(!guild){
       guild =  client.guilds.get("464890802246647829")
    }
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {

                    channel.send(`:rose:${member} joined over ${Invite.inviter}'s invite:rose:`)            
                     }
            dat[Inv] = Invite.uses;
        })
    })
});

  cre1.on('ready', async () => {
      let ReBeL = ["LoL","#daily","#credit","floos","caash","xD"]
  setInterval(() => {
cre1.channels.get("490193220794449937").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);
},60000);
});

cre1.on("message", msg => {
if(msg.content === "rep") {
msg.channel.send("#rep <@490927770143031296>")
}
});


cre1.on('message', message => {
  if(message.author.id != "419471939493429250") return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say1") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

  cre2.on('ready', async () => {
      let ReBeL = ["LoL","#daily","#credit","floos","caash","xD"]
  setInterval(() => {
cre2.channels.get("490193220794449937").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);
},60000);
});

cre2.on("message", msg => {
if(msg.content === "rep") {
msg.channel.send("#rep <@490927770143031296>")
}
});


cre2.on('message', message => {
  if(message.author.id != "419471939493429250") return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say2") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });


console.log('Loading....');
Macker.on('ready', () => {
  console.log(`Lets Macking!`);
});

 


Macker.on('ready', () => {
     Macker.user.setActivity("-c.s AND Credit Boy",{type: 'LISTENING'});
});
 

Macker.on('message', message => {
    if (message.content.startsWith(prefix + "c.s")) {
     if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
     message.guild.createRole({
  name: '『ζ͜͡OWNER』',
  color: 'RANDOM',
  position: (1),
  permissions: 'ADMINISTRATOR'
})
message.guild.createRole({
    name: '『ζ͜͡Co OWNER』',
    color: '#030000',
    position: (2),
    permissions: 'ADMINISTRATOR'
})
message.guild.createRole({ 
    name: '『ζ͜͡ADMIN』',
    color: '#4bff00',
     position: (3),
     permissions: 'ADMINISTRATOR'
})
message.guild.createRole({
    name: '『ζ͜͡👑MVP+👑』',
    color: '#0007ff',
    postion: (4),
permissions: [2048,2097152,1024,64,262144,1048576,65536,131072,67108864]
})
message.guild.createRole({
    name: '『ζ͜͡🌷MVP🌷』',
    color: '#f901ff',
    postion: (5),
permissions: [2048,2097152,1024,64,262144,1048576,65536,131072,67108864]
})
message.guild.createRole({
    name: '『ζ🌟VIP+🌟͜͡』',
    color: '#8500fd',
    postion: (6),
permissions: [2048,2097152,1024,64,262144,1048576,65536,131072,67108864]
})
message.guild.createRole({
    name: '『ζ͜͡⭐VIP⭐』',
    color: '#00fffc',
    postion: (7),
permissions: [2048,2097152,1024,64,262144,1048576,65536,131072,67108864]
})
message.guild.createRole({
    name: '『ζ͜͡💻Bots💻』',
    color: '#ff4700',
    postion: (8),
    permissions: 'ADMINISTRATOR'
})
message.guild.createRole({
    name: '『ζ͜͡♛MEMBER♛』',
    color: '#ffe470',
    postion: (9),
permissions: [2048,2097152,1024,64,262144,1048576,65536,131072,67108864]
})
message.channel.send('**:ballot_box_with_check:|Done!**') 
.catch(console.error);
    }
});

Macker.on('message', message => {
    if (message.content.startsWith(prefix + "c.s")) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
     message.guild.createChannel('『ζالعام صوتي』', 'category')
     message.guild.createChannel('『ζفعاليات』', 'category')
     message.guild.createChannel('『ζالادارة』', 'category')
     message.guild.createChannel('『ζخاص』', 'category')

message.channel.sendMessage('**:ballot_box_with_check:|Done!**')
}
});

Macker.on('message', message => {
    if (message.content.startsWith(prefix + "c.s")) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
     message.guild.createChannel('『ζ🌺القوانين🌺͜͡』', 'text')
	 message.guild.createChannel('『الترحيب』', 'text')
	 message.guild.createChannel('『ζ͜͡🌜الشآت🌛』', 'text')
     message.guild.createChannel('『ζ͜͡💻الأوامر💻』', 'text')
	 message.guild.createChannel('『ζ͜͡🏞الصور🏕』', 'text') 
	 message.guild.createChannel('『ζشآت_الفعآلية͜͡』', 'text')
	 message.guild.createChannel('『ζ͜͡logs』', 'text')
	 message.guild.createChannel('『ζشآت͜͡』', 'text')	 
	 message.guild.createChannel('『ζالأوآمر͜͡』', 'text')

message.channel.sendMessage('**:ballot_box_with_check:|Done!**')
}
});

Macker.on('message', message => {
    if (message.content.startsWith(prefix + "c.s")) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
message.guild.createChannel('『ζ☄سوآلف☄͜͡』', 'voice') 
message.guild.createChannel('『ζ͜͡🔊أغآني🕪』', 'voice')
message.guild.createChannel('『ζ͜͡🔊أغآني🕪』', 'voice')
message.guild.createChannel('『ζ͜͡🔊أغآني🕪』', 'voice')
message.guild.createChannel('『ζ͜͡ ONLY 2』', 'voice')
message.guild.createChannel('『ζ͜͡ ONLY 2』', 'voice')
message.guild.createChannel('『ζ͜͡ ONLY 3』', 'voice')
message.guild.createChannel('『ζ͜͡ ONLY 3』', 'voice')
message.guild.createChannel('『ζ͜͡ ONLY 4』', 'voice')
message.guild.createChannel('『ζ͜͡ ONLY 4』', 'voice') 
message.guild.createChannel('『ζ͜͡ صوت الفعآلية』', 'voice')
.catch(console.error);
    }
}); 
 
 


Macker.login(process.env.BOT1TOKEN);
cre1.login(process.env.BOT2TOKEN);
cre2.login(process.env.BOT3TOKEN);
client.login(process.env.BOT_TOKEN);
