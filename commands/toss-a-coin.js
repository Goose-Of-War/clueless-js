const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('toss')
		.setDescription('Tosses a coin'),
	execute: async interaction => {
		return await interaction.reply(`The coin has been tossed. You've got **${Math.random() >= 0.5 ? 'Heads' : 'Tails'}!**`);
	}
};
