import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { CURRENT_YEAR } from "./../../config/config";

const Footer = () => {
  return (
    <div className="footer">
      <img
        src="/images/profile.jpg"
        alt="Oussama choumoul"
        className="footer__img"
      />
      <h1 className="footer__heading">Oussama choumoul</h1>
      <h3 className="footer__heading--secondary">
        FRONT END DEV | UI DESIGNER
      </h3>
      <div className="footer__info">
        <a href="https://www.facebook.com/oussama.choumoul/">
          <FontAwesomeIcon icon={faFacebook} className="footer__icon" />
        </a>
        <a href="https://twitter.com/ochoumoul">
          <FontAwesomeIcon icon={faTwitter} className="footer__icon" />
        </a>
        <a href="https://github.com/Ochoumoul">
          <FontAwesomeIcon icon={faGithub} className="footer__icon" />
        </a>
        <a href="https://wa.me/+212656049819">
          <FontAwesomeIcon icon={faWhatsapp} className="footer__icon" />
        </a>
      </div>
      <h5 className="footer__copyright">Copyright © {CURRENT_YEAR}</h5>
    </div>
  );
};

export default Footer;
