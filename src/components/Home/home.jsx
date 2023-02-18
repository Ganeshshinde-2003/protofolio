import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";
import { FaTimes } from "react-icons/fa";
import bitemoji from "../images/bitemoji2.png";
import "./home.css";

const Home = () => {
  const list = [
    "Web Developer",
    "Front-End Developer",
    "Back-End Developer",
    "Coder",
  ];
  const [show, setShow] = useState(true);
  const [menu, setmenu] = useState(true);
  const [me, setMe] = useState(list[0]);
  let i = 0;
  useEffect(() => {
    const intervalID = setInterval(() => {
      if (i !== 4) {
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
            <Link className="header-links" to="#">
              Main
            </Link>
            <Link className="header-links" to="#">
              Skils
            </Link>
            <Link className="header-links" to="#">
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
      <div className="main">
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
            <button class="button-57" role="button">
              <span class="text">Hire Me</span>
              <span>Quick</span>
            </button>
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
    </div>
  );
};

export default Home;
