import React from "react";

// Display the rules of the game
function Rules() {
  return (
    <div className="informationPage">
      <h1>
        <u>Rules:</u>
      </h1>

      <p>
        The goal of Blackjack is to have a hand that totals higher than the
        dealer's, but doesn't total higher than 21.
        <br />
        Blackjack is a card game that is usually played with 7 decks in a casino
        setting.
      </p>

      <h3>Card Values</h3>
      <ul>
        <li>Cards 2 through to 10 are scored using their face value.</li>
        <li>Jacks, Queens and Kings are all equal to 10.</li>

        <li>
          Ace can be either 1 or 11 (it has a value of 11 if the player doesn’t
          bust. But all aces become worth one point if at any point the player
          will bust using 11)
        </li>
      </ul>

      <h2>How to win</h2>
      <p>
        If your hand totals higher than 21, it is called a <b>"bust"</b>, which
        means you are out of the game. <br /> The dealer deals 1 card face up to
        the player and 1 card face up to themselves. <br /> The player is dealt
        one more face-up card and the dealer gets dealt one face down card.
        <br /> If your face-up cards total 21, you <b>automatically win</b> and
        you are done for that round. <br /> Otherwise, the dealer asks whether
        you want another card from the top of the deck.
      </p>

      {/* Shuffle rules gotten from https://bicyclecards.com/how-to-play/blackjack/*/}
      <h2>Shuffle</h2>
      <p>
        The dealer thoroughly shuffles portions of the pack until all the cards
        have been mixed and combined. <br /> If a new round starts and the deck
        has less than 75 cards in it, the dealer will start a new deck and
        shuffle the cards. <br />
        Not dealing to the bottom of all the cards makes it more difficult for
        professional card counters to operate effectively.
      </p>
      <h2>
        <u>Actions</u>
      </h2>
      <h3>"Hit"</h3>

      <p>
        If you click "hit", you will be dealt another card. There's no limit to
        how many cards you can ask for, but once your hand totals higher than
        21, you bust and the dealer wins.
      </p>

      <h3>"Stand"</h3>
      <p>
        Click "stand" If you don't want any more cards. <br /> The dealer will
        flip up their face-down card.
      </p>

      <ul>
        <li>
          If the dealer' total value is 16 or under, they have to take another
          card.
        </li>

        <li>If it's 17 or higher, the dealer have to stay with their hand.</li>
        <li>If the dealer "busts" (over 21) you win the round.</li>
        <li>
          However, if the dealer doesn't "bust", you only win if your hand is
          higher than the dealer or else you lose.
        </li>
        <li>
          In the exception when your hand is equal to the dealer, it is a draw
          known as a <b>"push"</b>.
        </li>
      </ul>
    </div>
  );
}

export default Rules;
