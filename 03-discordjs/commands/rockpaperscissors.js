// Importing modules using ES6 syntax
import { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, ComponentType } from 'discord.js';


// Command Builder export
export const data = new SlashCommandBuilder()
  .setName('rockpaperscissors')
  .setDescription('Play a game of rock paper scissors!');

// Execute function export
export async function execute(interaction) {
    const rockButton = new ButtonBuilder()
        .setCustomId('rock')
        .setStyle(ButtonStyle.Primary)
        .setEmoji('🪨')
    
    const paperButton = new ButtonBuilder()
        .setCustomId('paper')
        .setStyle(ButtonStyle.Primary)
        .setEmoji('📄')

    const scissorsButton = new ButtonBuilder()
        .setCustomId('scissors')
        .setStyle(ButtonStyle.Primary)
        .setEmoji('✂️')

    const row = new ActionRowBuilder()
        .addComponents(rockButton, paperButton, scissorsButton)

    await interaction.reply({
        content: 'Choose your weapon!',
        components: [row],
    });

    const filter = (interaction) => {
        return interaction.user.id === interaction.user.id;
    };

    const buttonInteraction = await interaction.channel.awaitMessageComponent({ filter, componentType: ComponentType.Button, time: 10000 }).catch();
    if (!buttonInteraction) return; // If no interaction, return because no one clicked a button

    const userChoice = buttonInteraction.customId;
    const botChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
    await buttonInteraction.reply(`You chose ${userChoice} and I chose ${botChoice}!`)

    if (userChoice === botChoice) {
        return await buttonInteraction.followUp('It\'s a tie!');
    }
    if (
        (userChoice === 'rock' && botChoice === 'scissors') ||
        (userChoice === 'paper' && botChoice === 'rock') ||
        (userChoice === 'scissors' && botChoice === 'paper')
    ) {
        return await buttonInteraction.followUp('You won!');
    }
    return await buttonInteraction.followUp('I won!');
}