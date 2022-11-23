module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log(`Je suis pret | ${client.user.tag} est maintenant en ligne !`);
  },
};
