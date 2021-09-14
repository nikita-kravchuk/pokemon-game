import React from "react";
import s from "./header.module.css";
import MenuHeader from "./MenuHeader";

const Header = ({ title, descr, onClickButton }) => {

  const handleClick = () => {
    onClickButton && onClickButton('game');
  }

  return (
    <header className={s.root}>
      <MenuHeader />
      <div className={s.forest}></div>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>{descr}</p>
        <button onClick={handleClick}>
          Let's battle
        </button>
      </div>
    </header>
  );
};

export default Header;
