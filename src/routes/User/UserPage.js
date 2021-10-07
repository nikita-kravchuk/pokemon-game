import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchUser, removeUser, selectUser } from "../../store/user";

import s from './userPage.module.css'

const UserPage = () => {
  const history = useHistory();
  const userData = useSelector(selectUser);
  const dispatch = useDispatch();
  const toLocalTime = (date) => new Date(parseInt(date, 10)).toLocaleString('uk-UA')
  const handleClickButton = () => {
    localStorage.removeItem('idToken');
    dispatch(fetchUser());
    dispatch(removeUser());
    history.push("/");
  };
  return (
    <div>
      <h1>This is User Page!</h1>
      <div className={s.flex}>
        User Info
      <ul className={s.userList}>
        <li>Email: {userData.email}</li>
        <li>Last Login: {toLocalTime(userData.lastLoginAt)}</li>
        <li>Created: {toLocalTime(userData.createdAt)}</li>
      </ul>
      </div>
      <button className={s.buttonWrap} onClick={handleClickButton}>Log Out</button>
    </div>
  );
};

export default UserPage;
