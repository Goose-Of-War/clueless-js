const discord = require('discord.js');

const commands = require('./commands');
const secrets = require('./secret')

const client = new discord.Client({ intents: [discord.GatewayIntentBits.Guilds] })
const rest = new discord.REST({ version: 10 }).setToken(secrets.appToken);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');
		await rest.put(discord.Routes.applicationCommands(secrets.clientID), { body: commands });
		console.log('Successfully reloaded application (/) commands.');
	} catch (err) {
		console.error(err);
		return;
	}
})();

client.on('ready', () => console.log(`Logged in as ${client.user.tag}`));

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;
	console.log(interaction);
	await commands.find(command => command.name === interaction.commandName).response(interaction);
});

client.login(secrets.appToken);
