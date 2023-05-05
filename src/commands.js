const { Collection } = require('discord.js');
const path = require('path');
const fs = require('fs');

const commands = new Collection();

const commandsPath = path.join(__dirname, '../commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

commandFiles.forEach(file => {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// command = { data, execute }
	if (!command.data) console.log(`Missing field [data] in [${file}]`);
	if (!command.execute) console.log(`Missing field [execute] in [${file}]`);
	// Add data to collection
	commands.set(command.data.name, command);
});

module.exports = commands;
