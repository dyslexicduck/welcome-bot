const Discord = require('discord.js');
const bot = new Discord.Client();

const BOT_TOKEN = 'NjAzNTQwMDkzMjQ4MDc3ODQ0.XTg4kA.RBWE7afsgH72HhBXjYpJ5VpmJ_8';

bot.on('ready', () =>{
    console.log('the bot is online');
})

bot.on("message", message => {

    var memberName = message.author.username;
    memberName = "Dear "+memberName;

    var line1 = "We would like to welcome you to THE MASK!\n";
    var line2 = "\nPlease be aware that verification of your account will take time. \
Therefore, some of the channels will not be available.\
\nThere is a list of rules every member of our cook group should follow:\n"
    var line3 = "1. No leakage at any point, othervise you will be banned for life.\n\
2. No advertisement of your own services unless approved by us\n\
3. No fakes at all\n4. No sexual content\n5. No spam ";
    const msg = line1+line2;
    if(message.content == 'embed')
    {
        const embed = new Discord.RichEmbed()
        .setTitle(memberName)
        .setDescription(msg)
        .addField("Rules",line3)
        .setThumbnail(message.author.avatarURL)
        .setColor(0xc6e2ff )
        message.channel.sendEmbed(embed);
    }
})

bot.on("guildMemberAdd", (member) =>{

    var memberName = member.user.username;
    memberName = "Dear "+memberName;

    var line1 = "We would like to welcome you to THE MASK!\n";
    var line2 = "\nPlease be aware that verification of your account will take time. \
Therefore, some of the channels will not be available.\
\nThere is a list of rules every member of our cook group should follow:\n"
    var line3 = "1. No leakage at any point, otherwise you will be banned for life.\n\
2. No advertisement of your own services unless approved by us\n\
3. No fakes at all\n4. No sexual content\n5. No spam ";
    const msg = line1+line2;

    const embed = new Discord.RichEmbed()
        .setTitle(memberName)
        .setDescription(msg)
        .addField("Rules",line3)
        .setThumbnail(member.user.avatarURL)
        .setColor(0xc6e2ff)
        member.sendEmbed(embed);
})

bot.login(process.env.BOT_TOKEN);
