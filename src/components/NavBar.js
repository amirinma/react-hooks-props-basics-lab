import React from "react";

function NavBar(props) {
  console.log(props)
  return (
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
    </nav>
  );
}

export default NavBar;
