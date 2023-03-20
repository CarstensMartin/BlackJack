// Creation of deck and shuffle cards
export class Deck {
  #createDeck() {
    let suits = ["spades", "diamonds", "clubs", "hearts"];
    let values = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];

    // Create an empty deck
    let deck = [];
    // Play with 7 decks so add 7 decks to the deck
    for (let i = 0; i < 7; i++) {
      // Loop through the suits and values to add to deck of cards
      for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < values.length; x++) {
          let card = { Value: values[x], Suit: suits[i] };
          deck.push(card);
        }
      }
    }
    return deck;
  }

  // shuffle positions of random cards for 7000 turns
  #shuffleDeck(deck) {
    for (let i = 0; i < 7000; i++) {
      let position1 = Math.floor(Math.random() * deck.length);
      let position2 = Math.floor(Math.random() * deck.length);
      let tmp = deck[position1];

      deck[position1] = deck[position2];
      deck[position2] = tmp;
    }
    return deck;
  }

  constructor() {
    this.deck = this.#createDeck();
    this.#shuffleDeck(this.deck);
  }

  dealCard() {
    return this.deck.pop();
  }
}

// Blackjack player class
export class Player {
  // Constructor
  constructor(name, hand) {
    this.name = name;
    this.hand = hand;
  }

  // Add a card to the player's hand
  addCard(card) {
    this.hand.push(card);
  }

  // Get the value of the player's hand
  getHandValue() {
    let value = 0;
    for (var i = 0; i < this.hand.length; i++) {
      if (
        this.hand[i].Value === "J" ||
        this.hand[i].Value === "Q" ||
        this.hand[i].Value === "K"
      ) {
        value += 10;
      } else if (this.hand[i].Value === "A") {
        value += 11;
      } else {
        value += parseInt(this.hand[i].Value);
      }
    }
    const aces = this.hand.filter((card) => card.Value === "A");
    for (let i = 0; i < aces.length; i++) {
      if (value > 21) {
        value -= 10;
      }
    }
    return value;
  }

  // Clear player hand
  clearHand() {
    this.hand = [];
  }

  // Get the player's hand
  getHand() {
    return this.hand;
  }
}

// Blackjack dealer class - Can be extended with more functionality later
export class Dealer extends Player {
  constructor(name, hand) {
    super(name, hand);
  }
}

// Blackjack game class
export class Game {
  constructor(playerName) {
    this.deck = new Deck();
    this.player = new Player(playerName, []);
    this.dealer = new Dealer("Dealer", []);
  }

  // Deal the initial 2 cards to the player and dealer
  dealInitialCards() {
    this.player.addCard(this.deck.dealCard());
    this.dealer.addCard(this.deck.dealCard());
    this.player.addCard(this.deck.dealCard());
    this.dealer.addCard(this.deck.dealCard());
  }

  // Clear the Dealer and player's hand
  clearHands() {
    this.player.clearHand();
    this.dealer.clearHand();
  }

  // Deal a card to the player
  dealPlayerCard() {
    this.player.addCard(this.deck.dealCard());
  }

  // Deal a card to the dealer
  dealDealerCard() {
    this.dealer.addCard(this.deck.dealCard());
  }

  // Get the player's hand
  getPlayerHand() {
    return this.player.getHand();
  }

  // Get the dealer's hand
  getDealerHand() {
    return this.dealer.getHand();
  }

  // Get the player's hand value
  getPlayerHandValue() {
    return this.player.getHandValue();
  }

  // Get the dealer's hand value
  getDealerHandValue() {
    return this.dealer.getHandValue();
  }

  // Check if the player has won
  playerHasWon() {
    if (this.player.getHandValue() > this.dealer.getHandValue()) {
      return true;
    }
    return false;
  }

  // Check if the dealer has won
  dealerHasWon() {
    if (this.dealer.getHandValue() > this.player.getHandValue()) {
      return true;
    }
    return false;
  }

  // Check if the game is a tie
  isTie() {
    if (this.player.getHandValue() === this.dealer.getHandValue()) {
      return true;
    }
    return false;
  }
}
