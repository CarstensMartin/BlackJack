import { Deck, Player, Dealer, Game } from "../components/game/Game";

// Unit tests for the Deck class
describe("Deck", () => {
  let deck;

  beforeEach(() => {
    deck = new Deck();
  });

  test("should create a deck of 364 cards (52 x 7)", () => {
    expect(deck.deck.length).toBe(364);
  });

  test("should shuffle the deck and new deck different to previous", () => {
    let originalDeck = deck;
    let newDeck = new Deck();
    expect(newDeck.deck).not.toEqual(originalDeck);
  });

  test("should deal a card from the deck", () => {
    const card = deck.dealCard();
    expect(card).toBeTruthy();
    expect(deck.deck.length).toBe(363);
  });
});

// Unit tests for the Player class
describe("Player", () => {
  let player;

  beforeEach(() => {
    player = new Player("test", []);
  });

  test("should add a card to the player's hand", () => {
    player.addCard({ Value: "2", Suit: "hearts" });
    expect(player.hand.length).toBe(1);
  });

  test("should get the value of the player's hand", () => {
    player.hand = [
      { Value: "2", Suit: "hearts" },
      { Value: "K", Suit: "spades" },
    ];
    const value = player.getHandValue();
    expect(value).toBe(12);
  });

  // Clear player hand and use the previous test to check if the hand is empty with 0 value
  test("should clear the player hand", () => {
    player.hand = [
      { Value: "2", Suit: "hearts" },
      { Value: "K", Suit: "spades" },
    ];
    player.clearHand();
    const value = player.getHandValue();
    expect(value).toBe(0);
  });

  test("should get the player's hand", () => {
    player.hand = [
      { Value: "2", Suit: "hearts" },
      { Value: "K", Suit: "spades" },
    ];
    const hand = player.getHand();
    expect(hand).toEqual([
      { Value: "2", Suit: "hearts" },
      { Value: "K", Suit: "spades" },
    ]);
  });
});

// Unit tests for the Dealer class
describe("Dealer", () => {
  let dealer;

  beforeEach(() => {
    dealer = new Dealer("test", []);
  });

  test("should be an instance of Player", () => {
    expect(dealer instanceof Player).toBeTruthy();
  });
});

// Unit tests for the Game class
describe("Game", () => {
  let game;

  beforeEach(() => {
    game = new Game("test");
  });

  it("should create a deck, player and dealer on initialization", () => {
    expect(game.deck).toBeDefined();
    expect(game.player).toBeDefined();
    expect(game.dealer).toBeDefined();
  });

  it("stores player name in object", () => {
    expect(game.player.name).toBe("test");
  });

  it("should deal 2 cards to the player and 2 cards to the dealer when dealing initial cards", () => {
    game.dealInitialCards();
    expect(game.player.getHand().length).toBe(2);
    expect(game.dealer.getHand().length).toBe(2);
  });

  it("should deal 1 card to the player when dealing a player card", () => {
    game.dealPlayerCard();
    expect(game.player.getHand().length).toBe(1);
  });

  it("should deal 1 card to the dealer when dealing a dealer card", () => {
    game.dealDealerCard();
    expect(game.dealer.getHand().length).toBe(1);
  });

  it("should calculate the correct hand value for the player", () => {
    game.player.hand = [
      { Value: "A", Suit: "hearts" },
      { Value: "J", Suit: "diamonds" },
    ];
    expect(game.getPlayerHandValue()).toBe(21);
  });

  it("should calculate the correct hand value for the dealer", () => {
    game.dealer.hand = [
      { Value: "5", Suit: "clubs" },
      { Value: "Q", Suit: "hearts" },
    ];
    expect(game.getDealerHandValue()).toBe(15);
  });

  // Player has Won & player has not Won
  it("should return true if the player has won", () => {
    game.player.hand = [
      { Value: "A", Suit: "hearts" },
      { Value: "J", Suit: "diamonds" },
    ];
    game.dealer.hand = [
      { Value: "5", Suit: "clubs" },
      { Value: "Q", Suit: "hearts" },
    ];
    expect(game.playerHasWon()).toBe(true);
  });

  it("should return False if the player has not Won", () => {
    game.player.hand = [
      { Value: "5", Suit: "clubs" },
      { Value: "Q", Suit: "hearts" },
    ];
    game.dealer.hand = [
      { Value: "A", Suit: "hearts" },
      { Value: "J", Suit: "diamonds" },
    ];
    expect(game.playerHasWon()).toBe(false);
  });

  // Dealer has Won & dealer has not Won
  it("should return true if the dealer has won", () => {
    game.player.hand = [
      { Value: "5", Suit: "clubs" },
      { Value: "Q", Suit: "hearts" },
    ];
    game.dealer.hand = [
      { Value: "A", Suit: "hearts" },
      { Value: "J", Suit: "diamonds" },
    ];
    expect(game.dealerHasWon()).toBe(true);
  });

  it("should return False if the dealer has not won", () => {
    game.player.hand = [
      { Value: "A", Suit: "hearts" },
      { Value: "J", Suit: "diamonds" },
    ];
    game.dealer.hand = [
      { Value: "5", Suit: "clubs" },
      { Value: "Q", Suit: "hearts" },
    ];
    expect(game.dealerHasWon()).toBe(false);
  });

  // Tie
  it("should return true if the game is a tie", () => {
    game.player.hand = [
      { Value: "5", Suit: "clubs" },
      { Value: "Q", Suit: "hearts" },
    ];
    game.dealer.hand = [
      { Value: "6", Suit: "hearts" },
      { Value: "9", Suit: "diamonds" },
    ];
    expect(game.isTie()).toBe(true);
  });
});
