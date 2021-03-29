import { Client, Interaction, InteractionResponseType, InteractionType, slash, } from 'https://raw.githubusercontent.com/DjDeveloperr/harmony/slash/mod.ts';

class MySlashBot extends Client {
  constructor() {
    super({
      token: Deno.env.get("TOKEN"),
    })

    this.slash.publicKey = Deno.env.get("PUBLIC_KEY");
    this.slash.commands.bulkEdit([
      {
        name: 'ping',
        description: 'Just ping!',
      }
    ])
  }

  @slash('ping')
  pingCmd(d: Interaction) {
    d.reply('Pong!', { flags: 1 << 6 })
  }
}

const client = new MySlashBot()

addEventListener("fetch", async (event) => {
  try {
    const d = await client.slash.verifyFetchEvent(event)
    if (d === false) event.respondWith(new Response(null, { status: 400 }))
    else {
      if (d.type === InteractionType.PING) d.respond({ type: InteractionResponseType.PONG })
      else client.emit('interactionCreate', d)
    }
  } catch (e) {
    event.respondWith(new Response(e.stack, { status: 500 }))
  }
})
