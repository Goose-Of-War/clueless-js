const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

async function handleStartingMessage (user) {
	// Not needed if the user is the bot
	if (user.id === client.user.id) return;
	// Defining Buttons
	const start = new ButtonBuilder()
		.setCustomId('start')
		.setLabel('Start')
		.setStyle(ButtonStyle.Primary);
	const cancel = new ButtonBuilder()
		.setCustomId('cancel')
		.setLabel('Cancel')
		.setStyle(ButtonStyle.Danger);
	// Placing them in a row
	const row = new ActionRowBuilder()
		.addComponents(start, cancel);
	// Send it to the user
	const startingMessage = await user.send({
		content: 'Shall we play a game of **Rock Paper Scissors**?',
		components: [row]
	});
	try {
		const response = await startingMessage.awaitMessageComponent({
			filter: res => res.user.id === user.id,
			time: 7_000
		});
		// Cancel game if needed
		if (response.customId === 'cancel') {
			await response.update({
				content: 'Aww, too bad...',
				components: []
			});
			return Promise.reject(
				`<@${user.id}> has cancelled the game.`
			);
		} else if (response.customId !== 'start') return Promise.reject(
			`Ask the admins to check the bot. I shouldn't be getting \`${response.customId}\` as a response.`
		);
		// Update the message
		setTimeout(() => startingMessage.delete(), 2_500);
		return await response.update({
			content: 'The game will start now',
			components: []
		});
	} catch (err) {
		console.log(err);
		setTimeout(() => startingMessage.delete(), 2_500);
		throw err;
	}
}

async function handleRockPaperScissorsMessage (user) {
	// If user is bot, just return a random response
	if (user.id === client.user.id) return {
		user, response: ['rock', 'paper', 'scissors'][Math.floor(3 * Math.random())]
	};
	// Defining Buttons
	const rock = new ButtonBuilder()
		.setCustomId('rock')
		.setLabel('Rock')
		.setStyle(ButtonStyle.Primary);
	const paper = new ButtonBuilder()
		.setCustomId('paper')
		.setLabel('Paper')
		.setStyle(ButtonStyle.Primary);
	const scissors = new ButtonBuilder()
		.setCustomId('scissors')
		.setLabel('Scissors')
		.setStyle(ButtonStyle.Primary);
	// Placing them in a row
	const row = new ActionRowBuilder()
		.addComponents(rock, paper, scissors);
	// Send it to the user
	const gameMessage = await user.send({
		content: 'Click the button as per your choice. :face_in_clouds:',
		components: [row]
	});
	// Check for button click response
	const userResponse = await gameMessage.awaitMessageComponent({
		filter: res => res.user.id === user.id,
		time: 7_000
	});
	await userResponse.update({
		content: 'Your response has been noted. Check the channel for more info.',
		components: []
	});
	setTimeout(() => gameMessage.delete(), 2_500);
	return Promise.resolve({ user, response: userResponse.customId });
}

function determineWinner (response1, response2) {
	const index1 = [undefined, 'rock', 'paper', 'scissors'].findIndex(move => move === response1.response);
	const index2 = [undefined, 'rock', 'paper', 'scissors'].findIndex(move => move === response2.response);
	if (!index1 || !index2) throw new Error('Something is wrong with the responses sent.');
	if (index1 === index2) return;
	else if ((index1 - index2 + 3) % 3 === 1) return response1.user;
	else return response2.user;
}

module.exports = {
	handleStartingMessage,
	handleRockPaperScissorsMessage,
	determineWinner
};
