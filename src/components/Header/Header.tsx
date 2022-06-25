import React from "react";
import { UserOutlined } from "@ant-design/icons";
import styles from "./Header.module.scss";
import { NavTabs } from "./NavTabs/NavTabs";
import { Logo } from "./Logo/Logo";

export const Header = () => (
  <div className={styles.container}>
    <nav className={styles.nav}>
      <Logo />
      <NavTabs />
    </nav>
    <UserOutlined className={styles.userIcon} />
  </div>
);
