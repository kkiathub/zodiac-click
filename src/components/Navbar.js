import React from "react";
import "../styles/Navbar.css";
import logo from "../images/logo.png";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

function Navbar() {
  return (
    <nav className="navbar navbar-light py-0">
      <a className="navbar-brand py-0" href="/"><img src={logo} alt="logo" /></a>

      <h4 className="game-message mr-auto glow">Click an image to start!</h4>

      <h4 className="mr-5 my-0">Score: 1 | Top Score: 2</h4>

    </nav>


  );
}

export default Navbar;
