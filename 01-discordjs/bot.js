// Import the necessary discord.js classes using ES6 syntax
import { Client, Events, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import * as choochoo from './commands/choochoo.js';
import * as gif from './commands/gif.js';

dotenv.config();

// Create a new client instance
const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, readyDiscord);

// Login to Discord with your client's token
client.login(process.env.TOKEN);

function readyDiscord(c) {
  console.log('💖 Logged in as', c.user.tag);
}

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;
  if (interaction.commandName === 'choochoo') {
    await choochoo.execute(interaction);
  } else if (interaction.commandName === 'gif') {
    await gif.execute(interaction);
  }
});
