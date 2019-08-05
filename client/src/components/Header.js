import React from "react";

const headerStyle = {
    "backgroundColor": "#33658A",
    "maxWidth": "100%",
    height: "25%",
    "backgroundSize": "cover",
    position: "relative"
}

function Header() {
    return (
        <header style={headerStyle}>
            <h1>My Google Library</h1>
            <p>Find and Create Your Own Collection!</p>
        </header>
    );
}

export default Header;