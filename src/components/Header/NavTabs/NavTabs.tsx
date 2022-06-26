import React from 'react';
import styles from './NavTabs.module.scss';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';

export const NavTabs = () => {
  const activeStyle = {
    color: '#40a9ff'
  };

  return (
    <div className={styles.container}>
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
