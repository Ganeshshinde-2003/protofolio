import React from "react";
import "./project-page.css";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import projectfive from "../images/project-five.png";
import projectsix from "../images/project-six.png";
import moretocome from "../images/moretocome-removebg-preview.png";

const ProjectPage = () => {
  return (
    <div className="projectpage-container">
      <div className="back-button">
        <Link className="home-back project-page-back-button" to="/home">
          <FaArrowLeft size={15} />
          Back
        </Link>
      </div>
      <div className="projectspage-wrapper">
        <div className="project-five">
          <div className="imageofproject">
            <img className="project-image" src={projectfive} />
          </div>
          <div className="about-project">
            <p className="about-project-p">
              App where you can play dice with your friends. It is not an online
              game but two people can play at once
            </p>
            <div className="project-page-links">
              <Link to="https://github.com/Ganeshshinde-2003/dice-game">
                <FaGithub className="github-page" />
              </Link>
              <Link to="https://dice-game-lets-play.netlify.app/">
                <FaExternalLinkAlt className="urllink-page" />
              </Link>
            </div>
          </div>
        </div>
        <div className="project-five six">
          <div className="imageofproject">
            <img className="project-image" src={projectsix} />
          </div>
          <div className="about-project">
            <p className="about-project-p">
              Guess the number and win the Price. Guessing number bitween 1 to
              20
            </p>
            <div className="project-page-links">
              <Link to="https://github.com/Ganeshshinde-2003/guess-game-number">
                <FaGithub className="github-page" />
              </Link>
              <Link to="https://no-guessing-game.netlify.app/">
                <FaExternalLinkAlt className="urllink-page" />
              </Link>
            </div>
          </div>
        </div>
        <div className="moretocome">
          <h1>MORE TO COME</h1>
          <img src={moretocome} />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
