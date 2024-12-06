import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">Search</Link>
      <Link to="/watched-list">Watched List</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/news">News</Link>
      <Link to="/sign-in">Sign In</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navbar;
