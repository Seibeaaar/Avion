import React, { useState } from "react";
import "./Header.styles.scss";
import { ReactComponent as SearchIcon } from "src/assets/icons/Search.svg";
import { ReactComponent as CartIcon } from "src/assets/icons/Cart.svg";
import { MenuOutlined } from "@ant-design/icons";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";
import { State } from "src/types/state";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "src/hooks/useWindowDimensions";

const Header = () => {
  const { cart } = useSelector((state: State) => state.products);
  const navigate = useNavigate();
  const { width } = useWindowDimensions();
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const goToCart = () => navigate("/cart");

  const closeNavbar = () => setNavbarOpen(false);
  const openNavbar = () => setNavbarOpen(true);
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
            {width < 1200 ? <MenuOutlined onClick={openNavbar} /> : null}
          </div>
        </div>
      </div>
      <Navbar isOpen={navbarOpen} onClose={closeNavbar} />
    </header>
  );
};

export default Header;
