import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';
import styles from './NavTabs.module.scss';

export const NavTabs = () => {
  const activeStyle = {
    color: '#40a9ff',
  };

  return (
    <div className={styles.Container}>
      <Button type="text">
        <NavLink
          to="directions"
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          Directions
        </NavLink>
      </Button>
      <Button type="text">
        <NavLink
          to="cargo"
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          Cargo
        </NavLink>
      </Button>
    </div>
  );
};
