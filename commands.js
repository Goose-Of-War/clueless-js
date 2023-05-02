module.exports = [{
	name: 'hello',
	description: 'Sends a hello message',
	response: async (interaction) => interaction.reply(`Hello. Hope to say something more than this soon.`)
}, {
	name: 'help',
	description: 'Returns a help message (coming soon)',
	response: async (interaction) => interaction.reply('Coming soon...')
}]
