// By https://github.com/Nekros-dsc
const { Client } = require('discord.js-selfbot-v13')
const config = require('./config')
const client = new Client({
    checkUpdate: false,
});

// By https://github.com/Nekros-dsc

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`)

// By https://github.com/Nekros-dsc

    const channel = await client.channels.fetch(config.client.bumpChannel)
          setInterval(function () {
        await channel.sendSlash('302050872383242240', 'bump')
        console.count('Bumped!')
        }, 2 * 60 * 60 * 1000)
})

client.login(config.client.token);
// By https://github.com/Nekros-dsc
