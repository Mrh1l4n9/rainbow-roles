/*
 * Discord Rainbow Roles
 * 
 * discord.js :: Communicate with Discord servers via the Discord.js API
 *
 * MIT License
 *
 * Copyright (c) 2019 Jack MacDougall
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const Discord = require('discord.js')
const ManagedGuild = require('./guild.js')
const { token } = require('./token.json')

const bot = new Discord.Client()

module.exports = bot

bot.on('reconnecting', () => {
})
bot.on('resume', replayed => {
})
bot.on('disconnect', event => {
})

bot.on('rateLimit', (info, limit, timeDiff, path, method) => {
    console.log(
        'hit rate limit',
        info
    )
})

bot.on('error', err => {
    console.error(err)
})
bot.on('warn', warning => {
    console.log(warning)
})

bot.on('guildCreate', guild => {
})

bot.on('message', message => {
})

function updateAll() {
    for(const guild of bot.guilds.array()) {
        const managed = ManagedGuild.get(guild)
        managed.update()
            .then(() => {})
            .catch(err => console.error.bind(console))
    }
}
bot.on('ready', () => {
    setInterval(updateAll, 2 * 1000)
})

bot.login(token)