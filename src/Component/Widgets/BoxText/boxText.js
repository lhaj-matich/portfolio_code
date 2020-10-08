import React from "react";
import Button from "./../Button";

const BoxText = () => {
  return (
    <div className="textBox">
      <h1 className="heading__primary--main">Hello, I'm Oussama Choumoul</h1>
      <h3 className="heading__primary--sub">Front End Dev | UI Designer</h3>
      <Button link="#aboutMe" cta="More about me" config="primary" />
    </div>
  );
};

export default BoxText;
