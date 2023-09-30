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
		const requestedUser = interaction.user;
		const opponentUser = interaction.options.getUser('opponent') ?? client.user;
		await interaction.reply('Starting a game in the DM');
		try {
			if (opponentUser === client.user) {
				const response = await againstBot(requestedUser);
				await interaction.channel.send(response);
			} else await againstUser(requestedUser, opponentUser);
		} catch (err) {
			if (err.toString().includes('ending with reason: time'))
				return await interaction.channel.send('Aborted because there was no response.');
			return await interaction.channel.send(err.toString());
		}
	}
};
