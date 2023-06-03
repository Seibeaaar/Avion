import React from "react";
import "./Header.styles.scss";
import { ReactComponent as SearchIcon } from "src/assets/icons/Search.svg";
import { ReactComponent as CartIcon } from "src/assets/icons/Cart.svg";
import { ReactComponent as AvatarIcon } from "src/assets/icons/Avatar.svg";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";
import { State } from "src/types/state";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { cart } = useSelector((state: State) => state.products);
  const navigate = useNavigate();

  const goToCart = () => navigate("/cart");
  return (
    <header>
      <div className="header">
        <div className="header-icon">
          <SearchIcon className="header-icon--svg" />
        </div>
        <h1 className="header-appName">Avion</h1>
        <div className="header-actions">
          <div className="header-icon" onClick={goToCart}>
            <CartIcon className="header-icon--svg" />
            {cart.length ? (
              <div className="header-icon--badge">{cart.length}</div>
            ) : null}
          </div>
          <div className="header-icon">
            <AvatarIcon className="header-icon--svg" />
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
