import React, { useState } from "react";
import Menu from "../utils/Menu";
import NavBar from "../utils/Navbar";

const MenuHeader = () => {
  const [isActive, setActive] = useState(false);


  return (
    <>
      <Menu isActive={isActive} />
      <NavBar isActive={isActive} setActive={setActive}/>
    </>
  );
};

export default MenuHeader;
