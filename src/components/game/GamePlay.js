import "./GamePlay.css";
import React, { useEffect } from "react";
import DisplayCards from "./displayCards/DisplayCards";
import ConfettiExplosion from "react-confetti-explosion";
import { Game } from "./Game";
import cardImages from "../images/index";
// Import game sounds
// Sound credit - www.pixabay.com
import victorySound1 from "../sound/victory 1.mp3";
import victorySound2 from "../sound/victory 2.mp3";
import victorySound3 from "../sound/victory 3.mp3";
import victorySound4 from "../sound/victory 4.mp3";
import loseSound from "../sound/lose.mp3";
import pushSound from "../sound/push.mp3";
import flipCardSound from "../sound/flipcard.mp3";

function GamePlay(props) {
  const playerName = props.name;
  //Set State of all variables
  const [isExploding, setIsExploding] = React.useState(false);
  const [game, setGame] = React.useState([]);

  

  const [display, setDisplay] = React.useState(false);
  const [displayStartGameButton, setDisplayStartGameButton] =
    React.useState(true);
  const [displayActionButtons, setDisplayActionButtons] = React.useState(true);
  const [displayDealerSecondCard, setDisplayDealerSecondCard] =
    React.useState(false);
  const [playerHand, setPlayerHand] = React.useState([]);
  const [dealerHand, setDealerHand] = React.useState([]);
  const [playerHandValue, setPlayerHandValue] = React.useState(0);
  const [dealerHandValue, setDealerHandValue] = React.useState(0);
  const [playerWon, setPlayerWon] = React.useState(false);
  const [dealerWon, setDealerWon] = React.useState(false);
  const [tie, setTie] = React.useState(false);
  const [playerWonCount, setPlayerWonCount] = React.useState(0);
  const [dealerWonCount, setDealerWonCount] = React.useState(0);
  const [tieCount, setTieCount] = React.useState(0);

  // Calculate number of Cards in the deck
  let deckLength = 364;

  if (game.length !== 0) {
    deckLength = game.deck.deck.length;
  }

  // Play random victory sound
  const victorySound = [
    victorySound1,
    victorySound2,
    victorySound3,
    victorySound4,
  ][Math.floor(Math.random() * 4)];

  // Initialize game sounds
  const audioWin = new Audio(victorySound);
  const audioLose = new Audio(loseSound);
  const audioPush = new Audio(pushSound);
  const audioFlipCard = new Audio(flipCardSound);

  // Stand, dealer gets cards until 17 or more
  // Deal cards to dealer and make use of setTimeout to make it look real time
  function dealCardsToDealer(i) {
    return new Promise((resolve) => {
      if (i >= 17) {
        resolve(true);
      } else {
        game.dealDealerCard();
        audioFlipCard.play();
        setDealerHand(game.getDealerHand());
        setDealerHandValue(game.getDealerHandValue());

        setTimeout(function () {
          resolve(dealCardsToDealer(game.getDealerHandValue()));
        }, 1000);
      }
    });
  }

  // Stand, dealer gets cards until 17 or more
  // Declare at the top for all functions to use
  async function stand() {
    setDisplayDealerSecondCard(true);
    setDisplayActionButtons(false);
    audioFlipCard.play();

    let resolved = await new Promise((resolve) =>
      setTimeout(
        () => resolve(dealCardsToDealer(game.getDealerHandValue())),
        2000
      )
    );
    // Once resolved that dealer has a value of 17 or more, check who won
    if (resolved) {
      if (game.getDealerHandValue() > 21) {
        setPlayerWonCount(playerWonCount + 1);
        setPlayerWon(true);
        audioWin.play();
        setIsExploding(true);
      } else if (game.playerHasWon()) {
        setPlayerWonCount(playerWonCount + 1);
        setPlayerWon(true);
        audioWin.play();
        setIsExploding(true);
      } else if (game.dealerHasWon()) {
        setDealerWonCount(dealerWonCount + 1);
        setDealerWon(true);
        audioLose.play();
      } else if (game.isTie()) {
        setTieCount(tieCount + 1);
        setTie(true);
        audioPush.play();
      }
      setDisplayStartGameButton(true);
    }
  }

  function startNewGame() {
    // If deck of cards are below 75, initialize a new object / deck of cards
    if (game.length === 0 || game.deck.deck.length < 75) {
      //Initialize new game
      let game = new Game(playerName);
      setGame(game);

      audioFlipCard.play();

      game.dealInitialCards();

      //Set State of all variables after new game is initialized
      setGame(game);
      setPlayerHand(game.getPlayerHand());
      setDealerHand(game.getDealerHand());
      setPlayerHandValue(game.getPlayerHandValue());
      setDealerHandValue(game.getDealerHandValue());
      setPlayerWon(false);
      setDealerWon(false);
      setTie(false);
      setDisplayDealerSecondCard(false);
      setDisplay(true);
      setDisplayStartGameButton(false);

      // Check if player has 21 which is an automatic stand()
      if (game.getPlayerHandValue() === 21) {
        stand();
      }
    } // Else continue with same Deck
    else {
      // Clear player and Dealer hand
      game.clearHands();
      setGame(game);

      audioFlipCard.play();

      game.dealInitialCards();

      //Set State of all variables after new game is initialized
      setGame(game);
      setPlayerHand(game.getPlayerHand());
      setDealerHand(game.getDealerHand());
      setPlayerHandValue(game.getPlayerHandValue());
      setDealerHandValue(game.getDealerHandValue());
      setPlayerWon(false);
      setDealerWon(false);
      setTie(false);
      setDisplayDealerSecondCard(false);
      setDisplay(true);
      setDisplayStartGameButton(false);

      // Check if player has 21 which is an automatic stand()
      if (game.getPlayerHandValue() === 21) {
        stand();
      }
    }
  }

  // Hit, player gets another card
  function hit() {
    game.dealPlayerCard();
    audioFlipCard.play();
    setPlayerHand(game.getPlayerHand());
    setPlayerHandValue(game.getPlayerHandValue());
    setGame(game);

    // Check if player has 21 which is an automatic stand
    if (game.getPlayerHandValue() === 21) {
      stand();
    } // Check if player has busted
    else if (game.getPlayerHandValue() > 21) {
      setDealerWonCount(dealerWonCount + 1);
      setDisplayStartGameButton(true);
      setDealerWon(true);
      audioLose.play();
    }
  }

  // Get the first card value of Dealer, second card is hidden
  function getFirstCardValue(card) {
    let value = 0;
    if (
      card[0].Value === "J" ||
      card[0].Value === "Q" ||
      card[0].Value === "K"
    ) {
      value += 10;
    } else if (card[0].Value === "A") {
      value += 11;
    } else {
      value += parseInt(card[0].Value);
    }

    return value;
  }

  //Display Return
  return (
    <div className="gameIndex">
      <div className="player">
        <div className="hand">
          {display && (
            <div>
              {!displayDealerSecondCard ? (
                <div>
                  <div className="value">
                    <h1 id="blackJackHeader">BlackJack</h1>
                    <h2>Dealer Hand: {getFirstCardValue(dealerHand)}</h2>
                  </div>
                  <div className="cardDisplay">
                    <DisplayCards
                      index="front card"
                      card={dealerHand[0]}
                      images={cardImages}
                    />
                    <DisplayCards
                      index="Back card"
                      card="BACK"
                      images={cardImages}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <h1 id="blackJackHeader">BlackJack</h1>
                  <div className="value">
                    <h2>Dealer Hand: {dealerHandValue}</h2>
                  </div>
                  <div className="cardDisplay">
                    {dealerHand.map((card, index) => (
                      <DisplayCards
                        key={"dealer-card-" + index}
                        index={"Dealer " + index}
                        card={card}
                        images={cardImages}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      

      <div className="gameScoreButton">
        <div className="score">
          <h6>Player Won:</h6>
          <h6>Dealer Won:</h6>
          <h6>Push:</h6>
          <h6>Cards in Deck:</h6>
        </div>
        <div className="score">
          <h6>{playerWonCount}</h6>
          <h6>{dealerWonCount}</h6>
          <h6>{tieCount}</h6>
          <h6> {deckLength}</h6>
        </div>

        <div className="playerButtons">
          {display &&
            displayActionButtons &&
            !playerWon &&
            !dealerWon &&
            !tie && (
              <button
                className="actionButton"
                id="hit"
                onClick={() => {
                  hit();
                }}
              >
                Hit
              </button>
            )}

          {display &&
            displayActionButtons &&
            !playerWon &&
            !dealerWon &&
            !tie && (
              <button
                className="actionButton"
                id="stand"
                onClick={() => {
                  stand();
                }}
              >
                Stand
              </button>
            )}

          {display &&
            !displayActionButtons &&
            !playerWon &&
            !dealerWon &&
            !tie && (
              //Temporary pause between game results and new game button
              <button className="actionButton" id="loadGame">
                Dealing
              </button>
            )}

          {displayStartGameButton && (
            <button
              className="actionButton"
              id="startGame"
              onClick={() => {
                setDisplayActionButtons(true);
                startNewGame();
                setIsExploding(false);
              }}
            >
              New Game
            </button>
          )}
        </div>
      </div>

      <div className="results">
        {playerWon && (
          <div id="playerWinGame">
            <h2>You Won!</h2>
          </div>
        )}
        {dealerWon && (
          <div id="dealerWinGame">
            <h3>Dealer Won</h3>
          </div>
        )}
        {tie && (
          <div id="pushWinGame">
            <h3>Its a Push</h3>
          </div>
        )}
        {isExploding && <ConfettiExplosion />}
      </div>

      <div className="player bottomScreenHand">
        <div className="hand">
          {display && (
            <div>
              <div className="value">
                <h2>Player Hand: {playerHandValue}</h2>
              </div>
              <div className="cardDisplay">
                {playerHand.map((card, index) => (
                  <DisplayCards
                    key={"player-card-" + index}
                    index={"Player " + index}
                    card={card}
                    images={cardImages}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GamePlay;
