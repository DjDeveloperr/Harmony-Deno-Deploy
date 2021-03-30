import * as slash from 'https://raw.githubusercontent.com/DjDeveloperr/harmony/slash/deploy.ts'

slash.init({ env: true })

slash.client.on('interactionError', console.log)

slash.commands.bulkEdit([
  {
    name: 'ping',
    description: 'Just pong!',
  },
])

slash.handle('ping', (d) => {
  console.log("ping cmd")
  d.reply('Pong!', { ephemeral: true })
})