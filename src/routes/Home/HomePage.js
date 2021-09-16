import React from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";

function HomePage({onChangePage}) {

    const handleClickButton = (page) => {
        onChangePage && onChangePage(page);
    }

  return (
    <>
      <Header
        title="This is Pokemon Game!"
        descr="Go to Battle with your Pokemons"
        onClickButton={handleClickButton}
      />
      <Layout title="Rules" urlBg>
        <p>
          In the game two players face off against one another, one side playing
          as "blue", the other as "red" on a 3x3 grid. Each player has five
          cards in a hand and the aim is to capture the opponent's cards by
          turning them into the player's own color of red or blue.
        </p>
      </Layout>
    </>
  );
}

export default HomePage;
