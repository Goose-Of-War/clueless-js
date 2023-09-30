const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll-a-die')
		.setDescription('Rolls a die and returns the value.')
		.addIntegerOption(option => option
			.setName('die-value')
			.setDescription('The maximum value on the die.')
		),
	execute: async (interaction) => {
		if ((a => a !== null && a < 2)(interaction.options.getInteger('die-value')))
			return await interaction.reply(`At least set the value on the die to something greater than 1`);
		const maxValue = interaction.options.getInteger('die-value') || 6;
		const dieValue = Math.floor(Math.random() * maxValue) + 1;
		return await interaction.reply(`The die has been rolled. The result is... **${dieValue}**!`);
	}
};
