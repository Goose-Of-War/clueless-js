const { SlashCommandBuilder } = require('discord.js');

const rockPaperScissors = require('./rock-paper-scissors');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rock-paper-scissors')
		.setDescription('Start a game of Rock Paper Scissors')
		.addUserOption(option => option
			.setName('opponent')
			.setDescription('Choose your opponent (bot if left blank)')),

	execute: async (interaction) => {
		// Note the users who are playing Roch Paper Scissors
		const requestedUser = interaction.user;
		const opponentUser = interaction.options.getUser('opponent') ?? client.user;
		// If the game started in the DM, it'create a DM channel (especially needed if the bot is initialized)
		if (interaction.guild === null) await interaction.user.createDM();
		// Reply to the interaction
		await interaction.reply('Starting a game in the DM');
		try {
			const response = await rockPaperScissors(requestedUser, opponentUser);
			await interaction.channel.send(response);
		} catch (err) {
			console.log(err);
			if (err.toString().includes('ending with reason: time'))
				return await interaction.channel.send('Aborted because there was no response.');
			return await interaction.channel.send(err.toString());
		}
	}
};
