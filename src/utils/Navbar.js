import React from "react";
import s from "./navbar.module.css";
import cn from "classnames";
import logo from "../img/logo.png";

const NavBar = ({ isOpen, bgActive = false, onClickHam }) => {
  return (
    <nav id={s.navbar} className={cn({ [s.bgActive]: bgActive })}>
      <div className={s.navWrapper}>
        <img src={logo} alt="logo" />
        <div
          className={cn(s.menuButton, { [s.active]: isOpen })}
          onClick={onClickHam}
        >
          <span />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
