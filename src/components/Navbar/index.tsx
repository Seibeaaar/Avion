import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "src/redux/store";
import "./Navbar.styles.scss";
import categories from "src/constants/categories";
import { getProductsByCategory } from "src/redux/thunks/products";
import { ProductCategory } from "src/types/products";

const Navbar = () => {
  const [activeCtaegory, setActiveCategory] =
    useState<ProductCategory>("electronics");
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProductsByCategory(activeCtaegory as ProductCategory));
  }, [activeCtaegory]);

  const changeCategory = (category: ProductCategory) =>
    setActiveCategory(category);

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
