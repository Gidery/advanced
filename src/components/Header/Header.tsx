import React from 'react';
import { NavTabs } from './NavTabs/NavTabs';
import { Logo } from './Logo/Logo';
import { UserOutlined } from '@ant-design/icons';
import styles from './Header.module.scss';

export const Header = () => (
  <div className={styles.Container}>
    <nav className={styles.Nav}>
      <Logo />
      <NavTabs />
    </nav>
    <UserOutlined className={styles.UserIcon} />
  </div>
);
