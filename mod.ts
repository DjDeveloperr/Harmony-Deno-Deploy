import * as slash from 'https://raw.githubusercontent.com/DjDeveloperr/harmony/slash/deploy.ts'

slash.init({ env: true })

slash.commands.bulkEdit([
  {
    name: 'ping',
    description: 'Just ping!'
  },
  {
    name: 'test',
    description: 'Test Command',
    options: [
      {
        type: slash.SlashCommandOptionType.SUB_COMMAND_GROUP,
        name: 'group',
        description: 'Test Command Group',
        options: [
          {
            name: 'cmd',
            description: 'Test sub command',
            type: slash.SlashCommandOptionType.SUB_COMMAND,
          }
        ]
      },
      {
        name: 'cmd',
        description: 'Test sub command',
        type: slash.SlashCommandOptionType.SUB_COMMAND,
      }
    ]
  }
])

slash.handle('ping', (d) => {
  d.reply('Pong!', { ephemeral: true })
})

slash.handle('test cmd', (d) => {
  d.reply('Test Cmd', { ephemeral: true })
})

slash.handle('test group cmd', (d) => {
  d.reply('Test Group Cmd', { ephemeral: true })
})