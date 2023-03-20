import "./Index.css";
import React from "react";
import GamePlay from "./GamePlay";
// Import game sounds
// Sound credit - www.pixabay.com
import casinoFloorSound from "../sound/casino floor.mp3";

function Index() {
  const [name, setName] = React.useState("");
  const [display, setDisplay] = React.useState(false);

  // Play the casino sound when the window is larger than 825px
  // Mobile devices automatically plays volume at 1 instead of 0.02 which is too loud background noise
  let width = window.innerWidth;

  if (width >= 825) {
    // Background Casino sound
    // Play in a loop and low volume of 0.02
    const audioCasinoFloor = new Audio(casinoFloorSound);
    audioCasinoFloor.loop = true;
    audioCasinoFloor.volume = 0.02;

    audioCasinoFloor.play();
  }

  if (display === false || name === "") {
    return (
      <div className="informationPage">
        <h2>Welcome to Blackjack</h2>
        <br />
        <br />
        <div id="inputForm">
          <input
            id="inputName"
            type="text"
            name="name"
            placeholder="Enter your Name here"
            onChange={(e) => setName(e.target.value)}
          />

          <button
            id="submitNameButton"
            onClick={() => {
              setDisplay(true);
            }}
          >
            Play Game
          </button>
        </div>
        <div>
          <br />
          <br />
          <h3>The Fun Game!</h3>
          {/* Wording of game credits from https://bicyclecards.com/how-to-play/blackjack/ */}
          <p>
            Equally well known as Twenty-One. The rules are simple, the play is
            thrilling, and there is opportunity for high strategy. In fact, for
            the expert player who mathematically plays a perfect game and is
            able to count cards, the odds are sometimes in that player's favor
            to win.
            <br />
            <br />
            But even for the casual participant who plays a reasonably good
            game, the casino odds are less, making Blackjack one of the most
            attractive casino games for the player. While the popularity of
            Blackjack dates from World War I, its roots go back to the 1760s in
            France, where it is called Vingt-et-Un (French for 21). Today,
            Blackjack is the one card game that can be found in almost every
            casino. The game is so popular that in many regions of the world,
            Blackjack is the number one casino game, both in land-based and
            online casinos.
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div id="displayUsername">
          <h2 id="welcomePlayer">Welcome {name}</h2>
          <button id="exitGame" onClick={() => setDisplay(false)}>
            Exit Game
          </button>
        </div>
        <GamePlay name={name} />
      </div>
    );
  }
}

export default Index;
