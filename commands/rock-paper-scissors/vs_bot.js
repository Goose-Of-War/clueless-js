module.exports = againstBot = async function (interaction) {
	// Create a DM channel if doesn't exist.
	const player = interaction.user;
	await player.createDM();
	// Start the game
	await player.send('Starting a game of **Rock Paper Scissors**');
	
}