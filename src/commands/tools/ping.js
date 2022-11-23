const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("Ping")
    .setDescription("PingCommand")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addStringOption((option) =>
      option.setName("url").setDescription("URL vinted").setRequired(true)
    )
    .addChannelOption((option) =>
      option
        .setName("salon")
        .setDescription(
          "Salon discord dans le quelle vont apparaitre les articles"
        )
        .setRequired(true)
    ),
  async execute(interaction) {
    try {

      return interaction.reply({
        content: `Pong !`,
        ephemeral: true,
      });

    } catch (e) {
        console.log(e)
    }
  },
};
