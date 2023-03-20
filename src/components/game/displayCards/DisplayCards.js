import React from "react";
import cardImages from "./index";

function DisplayCards(props) {
  let index = props.index;
  let picture;
  let alt;

  // If back of card, display back of card, else use props to display card
  if (props.card === "BACK") {
    // Require the image that is the back of the card
    picture = cardImages["back"];
    alt = "CARD BACK";
  } else {
    let cardValue = props.card.Value;
    let cardSuit = props.card.Suit;
    alt = `${cardValue}-${cardSuit}`;

    // switch cardSuit to first letter of suit
    switch (cardSuit) {
      case "spades":
        cardSuit = "S";
        break;
      case "diamonds":
        cardSuit = "D";
        break;
      case "clubs":
        cardSuit = "C";
        break;
      case "hearts":
        cardSuit = "H";
        break;
      default:
        cardSuit = "";
        break;
    }

    // Require the image based on the card value and suit
    picture = cardImages[`${cardValue}-${cardSuit}`];
  }

  return <img src={picture} alt={alt} key={index} className="cardImages" />;
}

export default DisplayCards;
