# Browser Games

A collection of games to play in a web browser. See the full list of games in the [games.md](games.md) file.

## Installation and Setup

Clone the repo, install npm dependencies, and start the server:

```shell-session
$ git clone git@github.com:GuildCrafts/browser-games.git
$ cd browser-games
$ npm install

...

$ npm start
...
Starting up http-server, serving ./public
Available on:
  http://127.0.0.1:4321
  http://10.0.1.11:4321
```

Then open `http://localhost:4321/` in your browser of choice and play away!

---

# Browser Games [Basic]

## Challenge Rating

This goal will likely be within your ZPD if you...

- Can build basic web sites with HTML & CSS
- Can add behavior to a web site with JavaScript
- Are familiar with DOM manipulation
- Are familiar with games like tic-tac-toe and Simon
- Are interested in making more complex interactive web pages

## Description

Build simple graphical games for the browser.

Fork the the [browser-games repository][browser-games] and use the fork as your project artifact.

Implement the games **Tic-Tac-Toe** and **Simon** from the list in the [games.md][games-list] file. As a stretch, implement the **Connect Four** game.

You will be using FreeCodeCamp challenges as guides and tutorials for building these games.

## Context

This goal will challenge your ability to take a _formal, defined system_ from the real world and replicate it in code. You will start with all of the logic of the system (the rules of the game) and most of the UI already designed.

Your work will be mainly in deciding how to replicate that formal logic and user interface using JavaScript, HTML, and CSS.

## Specifications

#### General

- [x] Artifact produced is a fork of the [browser-games][browser-games] repo.
- [x] Variables, functions, files, etc. have appropriate and meaningful names.
- [x] HTML, CSS, and JS files are well formatted with proper spacing and indentation.
- [x] All major features are added via pull requests with a clear description and concise commit messages.
- [ ] Every pull request has been reviewed by at least one other person.
- [x] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

#### Tic-Tac-Toe

- [x] Tic-Tac-Toe game can be found at `public/ticTacToe.html`
- [x] Tic-Tac-Toe game is playable by two people
- [x] Tic-Tac-Toe game page is linked from `public/index.html`

#### Simon

- [ ] Simon game can be found at `public/ticTacToe.html`
- [ ] Simon game is playable
- [ ] Simon game page is linked from `public/index.html`

### Stretch

- [ ] Tic-Tac-Toe has a player-vs-computer version
- [ ] Tic-Tac-Toe AI will always win or tie
- [ ] Simon plays sounds
- Implement Connect Four game
  - [ ] Connect Four game can be found at `public/connectFour.html`
  - [ ] Connect Four game is playable by two people (human v human)
  - [ ] Connect Four game page is linked from `public/index.html`

## Resources

- MDN: [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) #html #dom #js
- MDN: [Guide to Event Handlers](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers) #dom #js
- Shay Howe: [Learn to Code HTML & CSS](http://learn.shayhowe.com/html-css/) #html #css

[browser-games]: https://github.com/GuildCrafts/browser-games
[games-list]: https://github.com/GuildCrafts/browser-games/blob/master/games.md
[basic-games]: https://github.com/GuildCrafts/browser-games/blob/master/games.md#basic-graphical-games
[mit-license]: https://opensource.org/licenses/MIT
