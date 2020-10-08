import React from "react";
import { Icon } from "@iconify/react";
import Express from "@iconify/icons-logos/express";
import Html from "@iconify/icons-ant-design/html5-filled";
import Redux from "@iconify/icons-logos/redux";
import nodejsIcon from "@iconify/icons-logos/nodejs";
import firebaseIcon from "@iconify/icons-logos/firebase";
import babelIcon from "@iconify/icons-logos/babel";
import webpackIcon from "@iconify/icons-logos/webpack";
import css3Icon from "@iconify/icons-simple-icons/css3";
import phpIcon from "@iconify/icons-logos/php";
import sassIcon from "@iconify/icons-logos/sass";
import Javascript from "@iconify/icons-logos/javascript";
import reactIcon from "@iconify/icons-logos/react";
import Mysql from "@iconify/icons-logos/mysql";
import pwaIcon from "@iconify/icons-ion/logo-pwa";

const Icons = () => {
  return (
    <div className="icons__container">
      <Icon className="icon" icon={Express} style={{ fontSize: "3.5rem" }} />
      <Icon className="icon" icon={Html} style={{ fontSize: "5.5rem" }} />
      <Icon className="icon" icon={nodejsIcon} style={{ fontSize: "5rem" }} />
      <Icon className="icon" icon={Redux} style={{ fontSize: "4.5rem" }} />
      <Icon
        className="icon"
        icon={firebaseIcon}
        style={{ fontSize: "4.5rem" }}
      />
      <Icon className="icon" icon={reactIcon} style={{ fontSize: "4.5rem" }} />
      <Icon className="icon" icon={babelIcon} style={{ fontSize: "3.5rem" }} />
      <Icon
        className="icon"
        icon={webpackIcon}
        style={{ fontSize: "4.5rem" }}
      />
      <Icon className="icon" icon={css3Icon} style={{ fontSize: "4.5rem" }} />
      <Icon className="icon" icon={phpIcon} style={{ fontSize: "4.5rem" }} />
      <Icon className="icon" icon={sassIcon} style={{ fontSize: "4.5rem" }} />
      <Icon className="icon" icon={Javascript} style={{ fontSize: "4.5rem" }} />
      <Icon className="icon" icon={Mysql} style={{ fontSize: "4.5rem" }} />
      <Icon
        className="icon"
        icon={pwaIcon}
        style={{ fontSize: "7rem", color: "#2274A5" }}
      />
    </div>
  );
};

export default Icons;
