const fs = require("fs-extra");
const { REST } = require("@discordjs/rest");
const { ROUTES, Routes } = require("discord-api-types/v10");

module.exports = (client) => {
  client.handleCommands = async () => {
    const commandFolders = fs.readdirSync("./src/commands");
    for (const folder of commandFolders) {
      const commandFiles = fs
        .readdirSync(`./src/commands/${folder}`)
        .filter((file) => file.endsWith(".js"));

      const { commands, commandArray } = client;

      for (const file of commandFiles) {
        const command = require(`../../commands/${folder}/${file}`);
        commands.set(command.data.name, command);
        commandArray.push(command.data.toJSON());
        console.log(
          `[handlerCommand] La commande ${command.data.name} est maintenant enregistrer !`
        );
      }
    }

    const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);

    try {
      const { commandArray } = client;

      console.log("Les commandes on commencer a ce charger !");

      await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
        body: commandArray,
      });

      console.log("Les commandes sont charger !");
    } catch (error) {
      console.error(error);
    }
  };
};
