import * as slash from 'https://raw.githubusercontent.com/DjDeveloperr/harmony/slash/deploy.ts'

slash.init({ env: true })

slash.commands.bulkEdit([
  {
    name: 'ping',
    description: 'Just ping!',
  },
  {
    name: 'deferred',
    description: 'Test deferred response.',
  },
])

slash.handle('ping', (d) => {
  d.reply('Pong!', { ephemeral: true })
})

slash.handle('deferred', (d) => {
  d.defer(true).then(d => d.reply('Pong!'))
})