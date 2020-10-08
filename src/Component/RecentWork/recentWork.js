import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

class RecentWork extends Component {
  state = {
    projects: [
      {
        name: "Forkify",
        img: "forkify.png",
        description: `This a search recipe application that will show any related 
        information to a recipe and it will give you the ingredients, this was project
        i did as i was learning javascript`,
      },
      {
        name: "Espace Etudiant",
        img: "espaceet.png",
        description: `This website provides exams and documents related to the major
        of economy and law , it still under developement`,
      },
    ],
  };

  renderCards = () => {
    return this.state.projects.map((item, i) => {
      return (
        <div className="card" key={i}>
          <h3 className="card__heading">{item.name}</h3>
          <img
            src={`/images/projects/${item.img}`}
            alt="Forkify"
            className="card__image"
          />
          <p className="card__description">{item.description}</p>
          <a className="card__link" href="www.google.com">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="recentWork" id="rprojects">
        <h1 className="heading__secondary">Recent Projects</h1>
        <div className="recentWork__projects">{this.renderCards()}</div>
      </div>
    );
  }
}

export default RecentWork;
