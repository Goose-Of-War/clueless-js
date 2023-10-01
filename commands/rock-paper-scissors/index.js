const {
	handleStartingMessage: startGame,
	handleRockPaperScissorsMessage: getResponse,
	determineWinner
} = require('./methods');

module.exports = async function (requestingPlayer, opponentPlayer) {
	try {
		// Create the DM channels
		await requestingPlayer.createDM();
		if (opponentPlayer.id !== client.user.id) opponentPlayer.createDM();
		// Send a message to confirm if they want to play
		await Promise.all([requestingPlayer, opponentPlayer].map(startGame));
		// Checking for the responses of the buttons
		const responses = await Promise.all([requestingPlayer, opponentPlayer].map(getResponse));
		// Since I just testing, I wanna confirm something
		const winner = determineWinner(...responses);
		return [
			...responses.map(({ user, response }) => `<@${user.id}> has played **${
				{ rock: 'Rock :rock:', paper: 'Paper :newspaper:', scissors: 'Scissors :scissors:' }[response]
			}**`),
			winner ? `The winner is <@${winner.id}>` : 'The game ended with a draw.'
		].join('\n');
	} catch (err) {
		console.log(err.toString());
		throw err;
	}
};
