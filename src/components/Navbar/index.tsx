import React from "react";
import "./Navbar.styles.scss";
import categories from "src/constants/categories";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-controls">
        {categories.map((category) => (
          <a
            key={category.value}
            className="navbar-item"
            content={category.label}
            href="/"
          >
            {category.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
