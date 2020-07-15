import React from "react";
import logo from "../../img/logo.png";

const Header = () => {
  return (
    <header className="center">
      <img src={logo} alt={`img-${logo}`} />
    </header>
  );
};

export default Header;
