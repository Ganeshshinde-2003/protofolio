import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";
import { FaTimes } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import javasc from "../images/javascript-logo.png";
import bitemoji from "../images/bitemoji2.png";
import csslogo from "../images/css-logo.png";
import angular from "../images/skills-image/angular.png";
import c from "../images/skills-image/c.png";
import css from "../images/skills-image/css.png";
import ex from "../images/skills-image/express.png";
import fair from "../images/skills-image/fairbase.png";
import git from "../images/skills-image/git.png";
import gitlab from "../images/skills-image/gitlab.png";
import html from "../images/skills-image/html.png";
import java from "../images/skills-image/javascript.png";
import mongo from "../images/skills-image/mongodb.png";
import python from "../images/skills-image/python.png";
import react from "../images/skills-image/reactjs.png";
import tailwind from "../images/skills-image/tailwind.png";
import vscode from "../images/skills-image/vscode.png";
import node from "../images/skills-image/node.png";
import { FaReact } from "react-icons/fa";
import "./home.css";
import Contact from "./contact";

const Home = () => {
  const list = [
    "Web Developer",
    "Front-End Developer",
    "Back-End Developer",
    "Full-Stack",
    "Problem Solver",
    "FireBase User",
    "Coder",
  ];
  const [show, setShow] = useState(true);
  const [menu, setmenu] = useState(true);
  const [me, setMe] = useState(list[0]);
  let i = 0;
  useEffect(() => {
    const intervalID = setInterval(() => {
      if (i !== list.length) {
        setMe(list[i]);
        i = i + 1;
      } else {
        i = 0;
      }
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);
  const toggleMenu = () => {
    setShow((show) => !show);
    setmenu(!menu);
  };
  return (
    <div className="home">
      <header className="header-home">
        <div className="right-navbar">
          <div className="bars" onClick={toggleMenu}>
            {menu ? <FaTimes /> : <GoThreeBars />}
          </div>
          <div className="Links" style={{ display: show ? "flex" : "none" }}>
            <Link className="header-links" to="#main">
              Main
            </Link>
            <Link className="header-links" to="#myskilss">
              Skils
            </Link>
            <Link className="header-links" to="#myskilss">
              Projects
            </Link>
            <Link className="header-links" to="#">
              Contact me
            </Link>
          </div>
        </div>
        <div className="back-button">
          <Link className="home-back" to="/">
            <FaArrowLeft size={15} />
            Back
          </Link>
        </div>
      </header>
      <div className="main" id="main">
        <div className="hero-section-one">
          <div className="text-part">
            <h1>Hey!! Every-One</h1>
            <span>
              {" "}
              <span className="mefirst">I am a </span>
              <span className="me">{me}</span>
            </span>
            <p>
              I’m a software developer and here is my portfolio website. Here
              you’ll learn about my journey as a software developer.
            </p>
            <Link
              class="button-57"
              role="button"
              to="https://www.linkedin.com/in/ganesh-shinde-01380825b/"
            >
              <span class="text">Hire Me</span>
              <span>Quick</span>
            </Link>
          </div>
          <div className="image-part">
            <h1 className="name">
              <span className="firstname">Ganesh</span>
              <br /> <span className="lastname">Shinde</span>
            </h1>
            <img className="imageofmine" src={bitemoji} />
          </div>
        </div>
      </div>
      <div className="projects-main" id="projects">
        <div className="projects">
          <h1 className="header-h1">Projects</h1>
          <div className="project-one">
            <div className="project-one-content">
              <h1>01</h1>
              <div className="req">
                <span className="req-header">Programming Languages used</span>
                <span>
                  <SiHtml5 />
                </span>
                <img src={csslogo} className="css-logo" />
                <img className="jacascript-logo" src={javasc} />
                <span>
                  <FaReact />
                </span>
              </div>
              <p id="project-p-tag">
                This is a plataform where people can communicate with each
                other. So called Twitter clone
              </p>
              <Link
                class="button-57 project-button"
                role="button"
                to="https://github.com/Ganeshshinde-2003/Post-Your-Tweets"
              >
                <span class="text">More</span>
                <span>Click Me</span>
              </Link>
              <Link to="https://github.com/Ganeshshinde-2003/Post-Your-Tweets">
                <FaGithub className="github" />
              </Link>
              <Link to="https://react-course-2-4157f.web.app/">
                <FaExternalLinkAlt className="urllink" />
              </Link>
            </div>
          </div>
          <div className="project-one two">
            <div className="project-one-content">
              <h1>02</h1>
              <div className="req">
                <span className="req-header">Programming Languages used</span>
                <span>
                  <SiHtml5 />
                </span>
                <img src={csslogo} className="css-logo" />
                <img className="jacascript-logo" src={javasc} />
                <span>
                  <FaReact />
                </span>
              </div>
              <p id="project-two-p">
                A music app built by me. So called Spotify like clone
              </p>
              <Link
                class="button-57 project-button"
                role="button"
                to="https://github.com/Ganeshshinde-2003/amazon-starterpack"
              >
                <span class="text">More</span>
                <span>Click Me</span>
              </Link>
              <Link to="https://github.com/Ganeshshinde-2003/amazon-starterpack">
                <FaGithub className="github" />
              </Link>
              <Link to="https://my-music-gani.netlify.app/">
                <FaExternalLinkAlt className="urllink" />
              </Link>
            </div>
          </div>
          <div className="project-one three">
            <div className="project-one-content">
              <h1>03</h1>
              <div className="req">
                <span className="req-header">Programming Languages used</span>
                <span>
                  <SiHtml5 />
                </span>
                <img src={csslogo} className="css-logo" />
              </div>
              <p id="project-three-p">
                This is my first clone website. A perfect clone of starbucks.
                Even you can use it to order Coffee or Tea
              </p>
              <Link
                class="button-57 project-button"
                role="button"
                to="https://github.com/Ganeshshinde-2003/starbucks-clone"
              >
                <span class="text">More</span>
                <span>Click Me</span>
              </Link>
              <Link to="https://github.com/Ganeshshinde-2003/starbucks-clone">
                <FaGithub className="github" />
              </Link>
              <Link to="https://ganesh-starbucks-clone.netlify.app/">
                <FaExternalLinkAlt className="urllink" />
              </Link>
            </div>
          </div>
          <div className="project-one two four">
            <div className="project-one-content">
              <h1>04</h1>
              <div className="req">
                <span className="req-header">Programming Languages used</span>
                <span>
                  <SiHtml5 />
                </span>
                <img src={csslogo} className="css-logo" />
                <img className="jacascript-logo" src={javasc} />
                <span>
                  <FaReact />
                </span>
              </div>
              <p id="project-four-p">
                A music app built by me. So called Spotify clone
              </p>
              <Link
                class="button-57 project-button"
                role="button"
                to="https://github.com/Ganeshshinde-2003/amazon-starterpack"
              >
                <span class="text">More</span>
                <span>Click Me</span>
              </Link>
              <Link to="https://github.com/Ganeshshinde-2003/amazon-starterpack">
                <FaGithub className="github" />
              </Link>
              <Link to="https://amazonmini.pages.dev/">
                <FaExternalLinkAlt className="urllink" />
              </Link>
            </div>
          </div>
          <Link
            className="projects-page"
            class="button-55"
            role="button"
            to="/home/projectpages"
          >
            More Projects
          </Link>
        </div>
      </div>
      <div className="my-skills" id="myskilss">
        <div className="text-area">
          <span className="text-area-header">Me and MyTech Stack</span>
          <p>
            Hi Everyone My name is Ganesh Shinde I am a Full Stack Web Developer
            I have been learning for last 1 Years and Currently I am just a
            student who is very interested in web development. Now I am working
            on Angular, ReactJS and Node, Express for Back-End development
          </p>
          <p>
            There are many programming languages in the world but i choose these
            to improve my self in this competitive world .
            <span id="coding">
              C, Python, Java Script, HTML, CSS, Tailwind, ReactJS, TypeScript,
              Angular, NodeJS, ExpressJS...{" "}
            </span>
          </p>
        </div>
        <div className="skills-area">
          <img id="img-one" src={html} />
          <img id="img-two" src={css} />
          <img id="img-three" src={java} />
          <img id="img-four" src={react} />
          <img id="img-five" src={angular} />
          <img id="img-six" src={tailwind} />
          <img id="img-seven" src={node} />
          <img id="img-eight" src={ex} />
          <img id="img-nine" src={c} />
          <img id="img-ten" src={python} />
          <img id="img-eleven" src={vscode} />
          <img id="img-twello" src={git} />
          <img id="img-thirthin" src={gitlab} />
          <img id="img-fourth" src={fair} />
          <img id="img-fifth" src={mongo} />
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Home;
