import * as slash from 'https://raw.githubusercontent.com/DjDeveloperr/harmony/slash/deploy.ts'

slash.init({ env: true })

slash.commands.bulkEdit([
  {
    name: 'ping',
    description: 'Just pong!',
  },
  {
    name: 'deferred',
    description: 'Test deferred response.',
  },
])

slash.handle('ping', (d) => {
  d.reply('Pong!', { ephemeral: true })
})

slash.handle('deferred-ping', (d) => {
  d.defer(true).then((d) => {
    // setTimeout(() => {
    d.reply('Pong!')
    // }, 1000)
  })
})
