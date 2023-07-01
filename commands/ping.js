const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Returns a pong!'),
	execute: async (interaction) => {
		await interaction.reply('**Pong!**');
	}
};
