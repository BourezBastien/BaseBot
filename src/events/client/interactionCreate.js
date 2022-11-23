module.exports = {
    name: "interactionCreate",
    async execute(interaction, client) {
        if (interaction.isChatInputCommand()) {
            const { commands } = client;
            const { commandName } = interaction;
            const command = commands.get(commandName)
            if (!command) return;

            try {
                await command.execute(interaction, client)
            } catch (error) {
                console.error(error)
                await interaction.reply({
                    content: `Une érreur est survenus lors de l'éxécution de la commande.`,
                    ephemeral: true
                });
            }
        }
    }
}