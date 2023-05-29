import React from "react";
import "./Header.styles.scss";
import { ReactSVG } from "react-svg";
import { ReactComponent as SearchIcon } from "src/assets/icons/Search.svg";
import { ReactComponent as CartIcon } from "src/assets/icons/Cart.svg";
import { ReactComponent as AvatarIcon } from "src/assets/icons/Avatar.svg";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <header>
      <div className="header">
        <SearchIcon className="header-icon" />
        <h1 className="header-appName">Avion</h1>
        <div className="header-actions">
          <CartIcon className="header-icon" />
          <AvatarIcon className="header-icon" />
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
