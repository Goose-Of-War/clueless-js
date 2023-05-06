const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

async function sendStartingMessage (user) {
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
	return await user.send({
		content: 'Shall we play a game of **Rock Paper Scissors**?',
		components: [row]
	});
}

async function sendRockPaperScissorsMessage (user) {
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
	return await user.send({
		content: 'Click the button as per your choice. The bot\'s response is definitely not influenced by your choice. :face_in_clouds:',
		components: [row]
	});
}

function determineWinner (response1, response2) {
	// console.log(response1, response2);
	const index1 = [undefined, 'rock', 'paper', 'scissors'].findIndex(move => move === response1.customId);
	const index2 = [undefined, 'rock', 'paper', 'scissors'].findIndex(move => move === response2.customId);
	console.log(response1, response2);
	if (!index1 || !index2) throw new Error('Something is wrong with the responses sent.');
	// Draw: 0, Player1: 1, Player2: -1
	if (index1 === index2) return 0;
	else if ((index1 - index2 + 3) % 3 === 1) return 1;
	else return -1;
}

module.exports = {
	sendStartingMessage,
	sendRockPaperScissorsMessage,
	determineWinner
}
