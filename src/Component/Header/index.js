import React from "react";
import NavBar from "./../Widgets/NavBar/navBar";
import BoxText from "./../Widgets/BoxText/boxText";
import "./../../styles.css";

const Header = (props) => {
  return (
    <div>
      <NavBar {...props} />
      <header className="header">
        <BoxText />
      </header>
    </div>
  );
};

export default Header;
