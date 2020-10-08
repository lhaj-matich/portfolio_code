import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ onOpenNav, config }) => {
  return (
    <div>
      <nav className={config}>
        <img
          src="/images/logo/logo-small.png"
          alt="logo"
          className="navigation__logo"
        />
        <div className="navigation__toggle" onClick={() => onOpenNav()}>
          <FontAwesomeIcon icon={faBars} className="navigation__toggle--icon" />
        </div>
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#home" className="navigation__link">
              Home
            </a>
          </li>
          <li className="navigation__item">
            <a href="#Resumee" className="navigation__link">
              Resume
            </a>
          </li>
          <li className="navigation__item">
            <a href="#rprojects" className="navigation__link">
              Recent Projects
            </a>
          </li>
          <li className="navigation__item">
            <a href="#contact" className="navigation__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;
