import React from "react";
import { Link } from "gatsby";
import styles from "./styles.module.scss";
const Menu = () => {
  return (
    <div className={styles.menu}>
      <ul className={styles.menu__list}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/images">Images Examples</Link>
        </li>
        <li>
          <Link to="/examples">Grapql examples</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
