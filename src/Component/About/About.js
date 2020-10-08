import React from "react";
import Icons from "./../Widgets/Icons";

import "./../../styles.css";

const AboutMe = () => {
  return (
    <div className="aboutMe" id="aboutMe">
      <h1 className="heading__secondary">About Me</h1>
      <p className="aboutMe__text">
        My name is Oussama Choumoul and I'm a front end developer. Sometimes I'm
        a backend dev too. I like dabbling in various parts of web technologies,
        i like to learn about new technologies and creating new stuff. The
        biggest problems i'm trying to solve is finding names for components ;)
      </p>
      <div className="aboutMe__skills">
        <h1 className="heading__tertiary">Skills</h1>
        <div className="aboutMe__icons">
          <Icons />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
