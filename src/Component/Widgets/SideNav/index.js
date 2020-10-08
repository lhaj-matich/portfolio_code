import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { init } from "emailjs-com";

class SideNav extends Component {
  state = {
    items: [
      { link: "#", text: "Home" },
      { link: "#Resumee", text: "Resumee" },
      { link: "#rprojects", text: "Recent Work" },
      { link: "#contact", text: "Contact" },
    ],
  };

  componentDidMount() {
    init("user_vn2WL5F2zchQ6jRa7PBQX");
    console.log("Email initialzed");
  }

  renderMenu = (items) => {
    return items.map((item, i) => {
      return (
        <li className="sideNav__item" key={i}>
          <a
            className="sideNav__link"
            href={item.link}
            onClick={() => this.props.onCloseNav()}
          >
            {item.text}
          </a>
        </li>
      );
    });
  };

  render() {
    return (
      <div
        className="sideNav"
        style={{ display: this.props.showNav ? "flex" : "none" }}
      >
        <button
          className="sideNav__close"
          onClick={() => this.props.onCloseNav()}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <ul className="sideNav__list">{this.renderMenu(this.state.items)}</ul>
      </div>
    );
  }
}
export default SideNav;
