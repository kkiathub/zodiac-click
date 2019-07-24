import React from "react";
import "../styles/Navbar.css";
// import logo from process.env.PUBLIC_URL+"/images/logo.png";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads
var toggleClass = 0;
function Navbar(props) {
  var message = "";
  var effClass = "";
  if (props.cScore===0) {
    message = "Click an image to start! Don't click on the same image twice!";
    effClass = "glow"
  } else if ( props.animId<0) {
    message = "YAY, You guessed correctly!";
    if (toggleClass===0) {
      effClass = "blinkyay"
      toggleClass = 1;
    } else {
      effClass = "blinkyay2"
      toggleClass = 0;
    }
  } else {
    message = "NAY, You guessed incorrectly!";
    effClass = "blinknay"
  }

  return (
    <nav className="navbar navbar-light py-0">
      <a className="navbar-brand py-0" href="/"><img src={process.env.PUBLIC_URL+"/images/logo.png"} alt="logo" /></a>

      <h3 className={`game-message mr-auto ${effClass}`}>{message}</h3>

      <h4 className="mr-5 my-0">Score: {props.cScore} | Top Score: {props.tScore}</h4>

    </nav>


  );
}

export default Navbar;
