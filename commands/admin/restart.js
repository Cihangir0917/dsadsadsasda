const {
    ActionRowBuilder,
    ApplicationCommandType,
    ButtonBuilder,
    ButtonStyle,
    Colors,
    PermissionsBitField
} = require('discord.js');
const config = require('../../config.json');

module.exports = {
    name: 'restart',
    description: 'Restart gönderir.',
    type: ApplicationCommandType.ChatInput,
    execute: async (client, interaction, args) => {
        
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({
            cotent: `Bu komutu çalıştırmak için izniniz yok!`
        })

        interaction.channel.send({
            embeds: [{
                title: "Sunucumuza Restart Atılıyor",
                description: " ` \n\n**FiveM** arama bölümüne RavenZ` yazarak kaliteye giriş yapabilirsiniz. \n\nKeyifli oyunlar dileriz.\nHerhangi bir sorunda ⁠bilinmeyen kanalından bize ulaşabilirsiniz.",
                footer: {
                    text: "İyi Oyunlar xD"
                },
                color: Colors.Blurple,
                image: {
                    url: config.restartbanner
                }
            }]
        })
        interaction.channel.send("@everyone")
    }
}