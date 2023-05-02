# clueless-js
A Discord bot using NodeJS


> If you are interested in testing the application, or would like to give some suggestions, join this [Discord server](https://discord.gg/VnBWCsS8N7)
---
Hello. It took me a bit longer to come out of the grave this time. But well, here I am. This time, I'm making a Discord bot.

[_click here to skip the story and go straight to the progress_](#progressprogress)

---

## Story Time 

So... like every other time, I was wondering, "What should I do next now that I have a lot of time on my plate?" Then, I remembered something which I did a while back (roughly a year ago i.e.) - my Discord Quiz Bot (in Python)

Which made me think "Hmm... I wonder if I can make a bot in JS too. Well, duh, of course I can. But what will I use it for?" As I wondered the question, I thought "I'll think about it once I ststy making the bot." and here we are

---
## Progress

> _in case you skipped the story, I'm disappointed that you felt like you had to skip this puny story D:_

As of now, the structure is a rather pathetic mess. I need to reorganize stuff, but all in all, the bot works and has two slash commands `/hello` and `/help` (this one is useless...)

TLDR (in this rather short README): It just started

---
## Running it locally

As per the docs of discord.js, this needs at least Node v16.9.0 (I have v16.9.0, so stonks for me)

First things first, you'll need a Discord application. Proceed to the [Developer Portal](https://discord.com/developers/applications) and create an application.

Once you clone the repository, store the client ID and token in a file called `secrets.json`

```json
{
	"clientID": "make-sure-it-is-a-string-and-not-a-number",
	"appToken": "a-really-long-and-weird-token-will-be-stored-here"
}
```

Run `npm install` and then `npm run dev` or `node ./bot.js`, as per your preference

---

While I will be working on some stuff in this repository, I am also welcome to external inputs and suggestions. Join the [Discord server](https://discord.gg/VnBWCsS8N7) and drop a message for suggestions.

---
> _This repository has work currently being done in it. Note that some data in the README document might be outdated._
