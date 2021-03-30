import * as slash from 'https://raw.githubusercontent.com/DjDeveloperr/harmony/slash/deploy.ts'

slash.init({ env: true })

slash.client.on('interactionError', console.log)

slash.handle('ping', (d) => d.reply('Pong!'))
