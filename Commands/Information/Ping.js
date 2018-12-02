const { Command } = require("discord-akairo")

class Ping extends Command {
    constructor() {
        super("ping", {
            aliases: ["ping"]
        })
    }

    async exec(message) {
        const startTime = Date.now();
        m = await message.channel.send(`Pinging...`);
         const endTime = Date.now();
         await m.edit(`Pong! | Client Ping: ${endTime - startTime}ms | API Latency: ${Math.floor(this.client.pings[0])}ms`);
    }
}

module.exports = Ping;
