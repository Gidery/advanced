import React from 'react';
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

export const Layout = () => {
  return (
    <>
      <Header />
      <div className={styles.Wrapper}>
        <Outlet />
      </div>
    </>
  );
};
