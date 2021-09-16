import React from "react";
import s from "./menu.module.css";
import cn from "classnames";
import { Link } from "react-router-dom";

const MENU = [
  { title: "HOME", to: "/" },
  { title: "GAME", to: "/game" },
  { title: "ABOUT", to: "/about" },
  { title: "CONTACT", to: "/contact" },
];

const Menu = ({ isOpen, onClickHam}) => {
  return (
    <div
      className={cn(s.menuContainer, {
        [s.active]: isOpen === true,
        [s.deactive]: !isOpen === false,
      })}
    >
      <div className={s.overlay} />
      <div className={s.menuItems}>
        <ul>
          {MENU.map(({ title, to }, index) => (
            <li key={index}>
              <Link to={to} onClick={onClickHam}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
