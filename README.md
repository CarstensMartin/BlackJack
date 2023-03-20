# Build a Blackjack game as an assignment

## Deployed

https://blackjack-carstens-martin.netlify.app/

## Blackjack rules

Blackjack is a card game that is usually played with 7 decks in a casino setting.  

The dealer is dealt 2 cards, one face up for everyone to see and one faced down.

The player is dealt 2 faced up cards. These cards are added up to get a net 
total. The aim of the game is to add up points until you get as close to 21 as 
possible. If you go over 21 then you bust and lose. You can choose to stand and 
stop receiving cards if you haven’t already bust.

The value of each card can be seen here:

Ace – 1 or 11 points (it is 11 points if the player doesn’t bust. But all aces 
become worth one point if at any point the player will bust using 11)

2 through 10 is worth the same points as its number

Jack, Queen and King are worth 10 points

Once the initial 4 cards are dealt out the player then must make one of 2
choices:

1. Hit
2. Stand

If he hits, he gets another card, and the game will determine if he busts.

If he busts, he loses, and the game is over. If he doesn’t bust, he gets to decide
whether he wants to hit or stand again.

This goes on until the player busts and loses, or he stands.

If the player stands, then the dealer gets to flip his second face down card. The 
dealer then keeps drawing cards until he either busts or his total points are 
between 17 to 21 inclusive. The dealer is forced to stand on 17 to 21 points 
inclusive.

Internal
Once the dealers score is evaluated the game needs to check who won. 
Whoever bust first loses, if no one has bust this round then the player with the 
higher score wins.

Note that if a player does bust then there’s no need to deal cards to the dealer 
as all players have already lost.

Also note that getting a score of 21 is an auto stand for the player since there is 
no better outcome.

## Requirements

Create a class Game that has a main method. This class should facilitate the 
blackjack game. The main method should do the following things: 
1. Upon start ask the player for their name
2. Ask if they want to start a new round 
a. If yes it should begin a new round of blackjack
b. If no, the program terminates

When a new round starts:

1. An instance of a Player class should be created
2. An instance of a Dealer class should be created

The Player class keeps track of the players cards and their name and can 
calculate the players score at any given time as well as keep track if the player 
has already bust.  

The Dealer is a specialized Player. It keeps track of the dealers’ cards and can 
calculate their score at any given time as well as determine if the dealer has 
bust just like the Player. The Dealer has the added functionality of being able 
to deal a card face down or face up.

The Game class will prompt the user for any decisions to be made (i.e., hit or 
stand).

At the end of the game the Game class will determine who won and display an 
appropriate message. The Game class will then ask if the player wants to start
a new round. If the player says yes, the round code should repeat itself. If the 
player says no the program should terminate.

## Things to note

1. The project should be fully unit tested
2. The flow of the game can be printed on the terminal. No need to build a UI.
3. Handling betting isn’t required for this assessment
4. You can use any programming language you’re comfortable with.

## React Setup

Follow these standard steps

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
