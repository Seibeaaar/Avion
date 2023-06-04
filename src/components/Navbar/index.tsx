import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "src/redux/store";
import { Drawer } from "antd";
import "./Navbar.styles.scss";
import categories from "src/constants/categories";
import { getProductsByCategory } from "src/redux/thunks/products";
import { ProductCategory } from "src/types/products";
import { useLocation, useNavigate } from "react-router-dom";
import useWindowDimensions from "src/hooks/useWindowDimensions";

interface INavbarProps {
  isOpen: boolean;
  onClose(): void;
}

const Navbar: React.FC<INavbarProps> = ({ isOpen, onClose }) => {
  const [activeCtaegory, setActiveCategory] =
    useState<ProductCategory>("electronics");
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  useEffect(() => {
    dispatch(getProductsByCategory(activeCtaegory as ProductCategory));
  }, [activeCtaegory]);

  const changeCategory = (category: ProductCategory) => {
    setActiveCategory(category);
    if (isOpen) onClose();
    if (pathname !== "/") navigate("/");
  };

  if (width < 1200) {
    return (
      <Drawer open={isOpen} onClose={onClose} placement="right">
        <h3 className="navbar-drawer--title">Product categories:</h3>
        {categories.map((category) => (
          <button
            key={category.value}
            className={[
              "navbar-item",
              activeCtaegory === category.value ? "navbar-item--active" : "",
            ].join(" ")}
            content={category.label}
            onClick={() => changeCategory(category.value as ProductCategory)}
          >
            {category.label}
          </button>
        ))}
      </Drawer>
    );
  }

  return (
    <nav className="navbar">
      <div className="navbar-controls">
        {categories.map((category) => (
          <button
            key={category.value}
            className={[
              "navbar-item",
              activeCtaegory === category.value ? "navbar-item--active" : "",
            ].join(" ")}
            content={category.label}
            onClick={() => changeCategory(category.value as ProductCategory)}
          >
            {category.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
