import React from "react";
import "../styles/Footer.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

function Footer() {
    return (
        <div className="footer">
            <p className="my-0 py-2"><span role="img" aria-label="emoji">©️</span> Copyright</p>
        </div>
    );
}

export default Footer;