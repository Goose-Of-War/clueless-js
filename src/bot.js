const discord = require('discord.js');

const commands = require('./commands');
const secrets = require('./secret')

global.client = new discord.Client({ intents: [discord.GatewayIntentBits.Guilds] })
const rest = new discord.REST({ version: 10 }).setToken(secrets.appToken);

// Register slash commands
(async () => {
	try {
		console.log('Started refreshing application (/) commands.');
		await rest.put(
			discord.Routes.applicationCommands(secrets.clientID), 
			{ 
				body: Object.values(commands.toJSON())
					.map(command => command.data)
			}
		);
		console.log('Successfully reloaded application (/) commands.');
	} catch (err) {
		console.error(err);
		return;
	}
})();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}`);
	client.commands = commands;
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;
	console.log(interaction);
	await client.commands.get(interaction.commandName)
		.execute(interaction);
});

client.login(secrets.appToken);
