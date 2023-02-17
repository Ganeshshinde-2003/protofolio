import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";
import "./home.css";

const Home = () => {
  const [show, setShow] = useState(true);

  const toggleMenu = () => {
    setShow((show) => !show);
  };
  return (
    <div className="home">
      <header className="header-home">
        <div className="back-button">
          <Link className="home-back" to="/">
            <FaArrowLeft size={15} />
            Back
          </Link>
        </div>

        <div className="right-navbar">
          <div className="bars" onClick={toggleMenu}>
            <GoThreeBars />
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
      </header>
    </div>
  );
};

export default Home;
