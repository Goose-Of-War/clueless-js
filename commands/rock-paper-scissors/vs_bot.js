const gameMethods = require('./base');

module.exports = againstUser = async function (player) {
	// Create a DM channel if doesn't exist.
	await player.createDM();
	// Mesage to confirm game start
	const startingMessage = await gameMethods.sendStartingMessage(player);
	// Check for button click response
	try {
		const response = await startingMessage.awaitMessageComponent({
			filter: res => res.user.id === player.id,
			time: 7_000
		});
		// Cancel game if needed
		if (response.customId === 'cancel') {
			await response.update({
				content: 'Aww, too bad...',
				components: []
			});
			return {
				content: `<@${player.id}> has cancelled the game.`
			};
		}
		else if (response.customId !== 'start') return {
			content: `Ask the admins to check the bot. I shouldn't be getting \`${response.customId}\` as a response.`
		};
		// Update the message
		await response.update({
			content: 'The game will start now',
			components: []
		});
		setTimeout(() => startingMessage.delete(), 2_500);
	} catch (err) {
		console.log(err);
		setTimeout(() => startingMessage.delete(), 2_500);
		throw new Error(err);
	}
	// Send the message for the user's choice
	const gameMessage = await gameMethods.sendRockPaperScissorsMessage(player);
	// Choose one from rock paper scissors for the bot
	const botResponse = {
		customId: ['rock', 'paper', 'scissors'][Math.floor(3 * Math.random())]
	}
	// Check for button click response
	try {
		const userResponse = await gameMessage.awaitMessageComponent({
			filter: res => res.user.id === player.id,
			time: 7_000
		});
		await userResponse.update({
			content: 'Your response has been noted. Check the channel for more info.',
			components: []
		})
		setTimeout(() => gameMessage.delete(), 2_500);
	} catch (err) {
		console.log(err);
		setTimeout(() => gameMessage.delete(), 2_500);
		throw new Error(err);
	} 
	// Time to see who is the winner
	const gameOutputCode = gameMethods.determineWinner(userResponse, botResponse);
	if (!gameOutputCode) return {
		content: 'The game ended in a draw. Thanks for playing though :)'
	};
	return {
		content: `The winner of this game is... <@${(gameOutputCode === -1 ? client.user : player).id}>`
	};
}
