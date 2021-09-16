import React, { useState } from "react";
import Menu from "../utils/Menu";
import NavBar from "../utils/Navbar";

const MenuHeader = ({bgActive}) => {
  const [isOpen, setOpen] = useState(null);

  const handleClick = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <>
      <Menu isOpen={isOpen} onClickHam={handleClick}/>
      <NavBar isOpen={isOpen} bgActive={bgActive} onClickHam={handleClick} />
    </>
  );
};

export default MenuHeader;
