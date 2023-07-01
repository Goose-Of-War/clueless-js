const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('replace-role')
		.setDescription('Replace the roles of those with another role')
		.setDefaultMemberPermissions(PermissionsBitField.Flags.ManageRoles)
		.addRoleOption(option => option
			.setName('old-role')
			.setDescription('Role to be replaced')
			.setRequired(true)
		)
		.addRoleOption(option => option
			.setName('new-role')
			.setDescription('Role to be replaced with (blank implies no role)')
		),

	execute: async interaction => {
		try{
			// console.log(interaction.member);
			const oldRole = interaction.options.getRole('old-role');
			const newRole = interaction.options.getRole('new-role');
			// console.log(oldRole);
			const members = [...await interaction.guild.members.fetch()].map(m => m[1]).filter(member => member.roles.cache.has(oldRole.id));
			console.log(members.map(member => member.nickname ?? member.user.username))
			await interaction.reply('Working on it >_<');
			await Promise.all(members.map(member => member.roles.remove(oldRole)));
			if (newRole) await Promise.all(members.map(member => member.roles.add(newRole)));
			await interaction.channel.send('Roles changed successfully');
		} catch (err) {
			console.log(err);
			await interaction.reply(err.toString());
		}
	}
};
