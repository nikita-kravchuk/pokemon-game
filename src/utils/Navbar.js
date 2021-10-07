import React from "react";
import s from "./navbar.module.css";
import cn from "classnames";
import logo from "../img/logo.png";
import { ReactComponent as LogIn } from "../img/login.svg";
import { ReactComponent as User } from "../img/user.svg";
import { useSelector } from "react-redux";
import { selectLocalID, selectUserLoading } from "../store/user";
import { Link } from "react-router-dom";

const NavBar = ({ isOpen, bgActive = false, onClickHam, onClickLogin }) => {
  const isLoadingUser = useSelector(selectUserLoading);
  const localId = useSelector(selectLocalID);

  return (
    <nav id={s.navbar} className={cn({ [s.bgActive]: bgActive })}>
      <div className={s.navWrapper}>
        <img src={logo} alt="logo" />
        <div className={s.loginAndMenu}>
          {(!isLoadingUser && !localId) && (<div className={s.loginWrap} onClick={onClickLogin}>
            <LogIn />
          </div>)}
          {(!isLoadingUser && localId) && (<Link className={s.loginWrap} to={'/user'}>
            <User />
          </Link>)}
          <div
            className={cn(s.menuButton, { [s.active]: isOpen })}
            onClick={onClickHam}
          >
            <span />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
