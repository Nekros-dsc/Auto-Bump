// By https://github.com/Nekros-dsc
const { Client } = require('discord.js-selfbot-v13')
const config = require('./config')
const client = new Client({
    checkUpdate: false,
});

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`)

    const channel = await client.channels.fetch(config.client.bumpChannel)
          setInterval(async function () {
        await channel.sendSlash('302050872383242240', 'bump')
        console.count('Bumped!')
        }, 2 * 60 * 60 * 1000)
})

client.login(config.client.token);
