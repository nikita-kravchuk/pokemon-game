import React from "react";
import s from "./navbar.module.css";
import cn from "classnames";
import logo from "../img/logo.png";

const NavBar = ({isActive, setActive}) => {
    const handleClick = () => {
    !isActive ? setActive(true) : setActive(false)
  }

  return (
    <nav className={s.root} isActive={isActive}>
      <div className={s.navWrapper}>
        <img src={logo} alt="logo" />
        <a
          href="#s"
          className={cn(s.menuButton, {[s.active]: isActive})}
          onClick={handleClick}
        >
          <span />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
