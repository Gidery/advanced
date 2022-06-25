import logo from "../../../ui/Logo.svg";
import React from "react";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <img alt="logo" src={logo} />
    </Link>
  );
};
