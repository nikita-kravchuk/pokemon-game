import React, { useState } from "react";
import { NotificationManager } from "react-notifications";
import { useDispatch } from "react-redux";
import { getUserUpdateAsync } from "../store/user";
import Menu from "../utils/Menu";
import NavBar from "../utils/Navbar";
import LogInForm from "./LogInForm";
import Modal from "./Modal";

const signUpLogInUser = async ({ email, password, type }) => {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
  };
  switch (type) {
    case "signup":
      return await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBhX8BdU3SRgUQrUroWLAwJuOAovC4hbuA",
        requestOptions
      ).then((res) => res.json());
    case "login":
      return await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBhX8BdU3SRgUQrUroWLAwJuOAovC4hbuA",
        requestOptions
      ).then((res) => res.json());
    default:
      return "I can`t log in you";
  }
};

const MenuHeader = ({ bgActive }) => {
  const [isOpen, setOpen] = useState(null);
  const [isOpenModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const handleClickHam = () => {
    setOpen((prevState) => !prevState);
  };

  const handleClickLog = () => {
    setOpenModal((prevState) => !prevState);
  };

  const handleSubmitLoginForm = async (props) => {
    const response = await signUpLogInUser(props);
    if (response.hasOwnProperty("error")) {
      NotificationManager.error(response.error.message, "Wrong!");
    } else {
      if (props.type === "signup") {
        const pokemonsStart = await fetch(
          "https://reactmarathon-api.herokuapp.com/api/pokemons/starter"
        ).then((res) => res.json());

        for (const item in pokemonsStart.data) {
          await fetch(
            `https://pokemon-game-1d880-default-rtdb.europe-west1.firebasedatabase.app/${response.localId}/pokemons.json?auth=${response.idToken}`,
            { method: "POST", body: JSON.stringify(item) }
          );
        }
      }
      localStorage.setItem("idToken", response.idToken);
      NotificationManager.success("Success message");
      dispatch(getUserUpdateAsync());
      handleClickLog();
    }
  };

  return (
    <>
      <Menu isOpen={isOpen} onClickHam={handleClickHam} />
      <NavBar
        isOpen={isOpen}
        bgActive={bgActive}
        onClickHam={handleClickHam}
        onClickLogin={handleClickLog}
      />
      <Modal
        isOpen={isOpenModal}
        title="Log in..."
        onCloseModal={handleClickLog}
      >
        <LogInForm
          isResetField={!isOpenModal}
          onSubmit={handleSubmitLoginForm}
        />
      </Modal>
    </>
  );
};

export default MenuHeader;
