const { SlashCommandBuilder } = require('discord.js');

const againstBot = require('./rock-paper-scissors/vs_bot');
const againstUser = require('./rock-paper-scissors/vs_user');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rock-paper-scissors')
		.setDescription('Start a game of Rock Paper Scissors')
		.addUserOption(option => option
			.setName('opponent')
			.setDescription('Choose your opponent (bot if left blank)')),

	execute: async (interaction) => {
		const opponentUser = interaction.options.getUser('opponent') ?? client.user;
		await interaction.reply('Starting a game in the DM');
		if (opponentUser === client.user) {
			const response = await againstBot(interaction);
			await interaction.channel.send(response);
		}
		else await againstUser(interaction);
	}
}