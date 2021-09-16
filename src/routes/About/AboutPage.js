import React from "react";
import { useHistory } from "react-router";
import Layout from "../../components/Layout";

import logo from "../../img/logo.png"
import s from "./aboutPage.module.css"

const AboutPage = () => {
  const history = useHistory();

  const handleClickButton = () => {
    history.push("/");
  };
  return (
    <div>
      <Layout title="About" urlBg>
        <div className={s.flex}>
          <p>
            To win, a majority of the total ten cards played (including the one
            card that is not placed on the board) must be of the player's card
            color. To do this, the player must capture cards by placing a card
            adjacent to an opponent's card whereupon the 'ranks' of the sides
            where the two cards touch will be compared. If the rank of the
            opponent's card is higher than the player's card, the player's card
            will be captured and turned into the opponent's color. If the
            player's rank is higher, the opponent's card will be captured and
            changed into the player's color instead.{" "}
          </p>
          <img src={logo} alt="logo" />
        </div>
      </Layout>
      <button onClick={handleClickButton}>Return</button>
    </div>
  );
};

export default AboutPage;
