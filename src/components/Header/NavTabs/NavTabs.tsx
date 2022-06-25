import React from "react";
import styles from "./NavTabs.module.scss";
import { NavLink } from "react-router-dom";

export const NavTabs = () => {
  return (
    <div className={styles.container}>
      <NavLink
        to="directions"
        className={({ isActive }) => (isActive ? styles.active : styles.tab)}
      >
        Directions
      </NavLink>
      <NavLink
        to="cargo"
        className={({ isActive }) => (isActive ? styles.active : styles.tab)}
      >
        Cargo
      </NavLink>
    </div>
  );
};
