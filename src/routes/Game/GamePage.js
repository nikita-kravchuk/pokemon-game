import React from "react";

const GamePage = ({onChangePage}) => {
  const handleClickButton = (page) => {
    onChangePage && onChangePage(page);
}
  return (
    <div>
      <h1>This is Game Page!</h1>
      <button onClick={handleClickButton}>Return</button>
    </div>
  );
};

export default GamePage;
