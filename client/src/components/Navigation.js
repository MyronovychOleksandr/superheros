import React from "react";
import { NavLink } from "react-router-dom";

// import s from "./Navigation.module.css";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#2A363B",
  },
  activeLink: {
    color: "#E84A5F",
  },
};

const Navigation = () => (
  <nav>
    <>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        Heros
      </NavLink>
      <NavLink
        to="/hero"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Add hero
      </NavLink>
    </>
  </nav>
);

export default Navigation;
