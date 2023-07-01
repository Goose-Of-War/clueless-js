# clueless-js
A Discord bot using NodeJS

> If you are interested in testing the application, or would like to give some suggestions, join this [Discord server](https://discord.gg/VnBWCsS8N7)
---
Hello. It took me a bit longer to come out of the grave this time. But well, here I am. This time, I'm making a Discord bot.

[_click here to skip the story and go straight to the progress_](#progressprogress)

---

## Story Time 

So... like every other time, I was wondering, "What should I do next now that I have a lot of time on my plate?" Then, I remembered something which I did a while back (roughly a year ago i.e.) - my Discord Quiz Bot (in Python)

Which made me think "Hmm... I wonder if I can make a bot in JS too. Well, duh, of course I can. But what will I use it for?" As I wondered, I realised that I didn't know a lot of other things too, like who's going to use it (except me for a few weeks) and what am I going to name it. At this point, it was official that I was clueless :/

As I thought more and more, it became more and more apparent that I was extremely clueless. So yes, this bot's name is a big pun on how clueless I am. ;-;

---
## Progress

> _in case you skipped the story, I'm disappointed that you felt like you had to skip this puny story D:_

Well, the structure was something which took me a while to get used to, so I really don't have much progress except for a `/ping` command (which just returns a "**Pong!**", the classic)

Thanks to a [pro friend](https://github.com/harshkhandeparkar)'s suggestion, I started to make some games in the bot. But then, I got stuck in a slump and left it as it was ;-;  
Now, I'm just making functions which I think I need in the server moving forward.
---
## Running it locally

As per the docs of discord.js, this needs at least Node v16.9.0 (I have v16.9.0, so stonks for me)

First things first, you'll need a Discord application. Proceed to the [Developer Portal](https://discord.com/developers/applications) and create an application.

Once you clone the repository, store the client ID and token in a file called `secrets.json` in the `src` folder

```json
{
	"clientID": "make-sure-it-is-a-string-and-not-a-number",
	"appToken": "a-really-long-and-weird-token-will-be-stored-here"
}
```

Then, run `npm install` in the terminal.

Once you're done with this, your folder should look something like this
```
clueless-js/
	commands/
		...
	node_modules/
		...
	src/
		bot.js
		commands.js
		secret.json
	.gitignore
	package-lock.json
	package.json
	README.md

```


Run `npm run dev` or `node .` in the terminal, as per your preference

---

While I will be working on some stuff in this repository, I am also welcome to external inputs and suggestions. Join the [Discord server](https://discord.gg/VnBWCsS8N7) and drop a message for suggestions.

---
> _This repository has work currently being done in it. Note that some data in the README document might be outdated._

---
## Appendix

---
### Hand Cricket

In Hand Cricket, you have two players. The game starts with a toss. Whoever wins gets to choose whether to bat or bowl, similar to normal cricket.

When a round starts, both players make fist signs (not exactly, they just open a set of fingers) to denote a number (generally either in the range of 0-6 or 1-10, depending on the players)

If the values of both players match, the batsman is considered 'out'. Otherwise, the value of the batsman's sign is added to their runs (points, basically)

The game runs till both batsmen become out, or the second batsman scores ,more than the first batsman when they play.
