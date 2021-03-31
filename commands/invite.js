const { LOCALE } = require("../util/EvobotUtil");
const i18n = require("i18n");
const { MessageEmbed } = require("discord.js");

i18n.setLocale(LOCALE);

module.exports = {
  name: "invite",
  description: i18n.__('invite.description'),
  execute(message, args) {
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 70282305;

    let invite = new MessageEmbed()
      .setTitle(`**Do you liked this bot?**`)
      .setDescription(
        `**Then what are you waiting for :) Invite me today!** \n\n [Invite Link](https://discord.com/oauth2/authorize?client_id=826687149646151681&scope=bot&permissions=8)`
      )
      .setURL(
        `https://discord.com/oauth2/authorize?client_id=826687149646151681&scope=bot&permissions=8`
      )
      .setColor("RANDOM");
    return message.channel.send(invite);
  }
};
