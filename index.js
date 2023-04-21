// By https://github.com/Nekros-dsc
const { Client } = require('discord.js-selfbot-v13')
const config = require('./config')
const client = new Client({
    checkUpdate: false,
});

// By https://github.com/Nekros-dsc

require('dotenv').config()

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`)

    const channel = await client.channels.fetch(config.client.bumpChannel)
    
    async function bump() {
        await channel.sendSlash('302050872383242240', 'bump')
        console.count('Bumped!')
    }
// By https://github.com/Nekros-dsc
    (function loop() {
        // Send bump message every 2-3 hours, to prevent detection.
        var randomNum = Math.round(Math.random() * (9000000 - 7200000 + 1)) + 7200000
        setTimeout(function () {
            bump()
            loop()
        }, randomNum)
    }())
    
    bump()
    
})
client.login(config.client.token);
// By https://github.com/Nekros-dsc