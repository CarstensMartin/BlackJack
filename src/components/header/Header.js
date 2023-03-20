import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
      <nav className="navigation">
        <div className="navigationSection">
          <Link to="/" className="linkItemButton" id="topElementHeading">
            BLACKJACK
          </Link>

          <Link
            to="/rules"
            className="linkItemButton"
            id="middleElementHeading"
          >
            RULES
          </Link>
        </div>

        <div className="navigationBarSection">
          <img
            className="navbarBrand"
            id="gameGlobalNavbarLogo"
            src="https://www.gamesglobal.com/images/gg_hold_screen.jpg"
            alt="Games Global logo"
          />
        </div>
      </nav>
    </div>
  );
}

export default Header;
