import * as slash from 'https://raw.githubusercontent.com/DjDeveloperr/harmony/slash/deploy.ts'

slash.init({ env: true })

slash.handle('ping', (d) => d.reply('Pong!'))

slash.client.on('interactionError', console.log)
