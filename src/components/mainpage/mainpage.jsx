import React from "react";
import { Link } from "react-router-dom";
import "./mainpage.css";
import myimage from "../images/photo.png";
import crystal from "../images/crystal.png";

const Mainpage = () => {
  return (
    <div className="Mainpage-container">
      <img src={crystal} />
      <div className="main-left">
        <img src={myimage} alt="myimage" />
      </div>
      <div className="main-right">
        <h1>Who is GANESH?</h1>
        <p>
          <span>Great to meet you!</span>
          <br />I am an engineering student who's really interested in web
          development. I like to work hard and smart to achieve my goals. I am
          currently 21 years old and eager to find real world problems in the
          web development field so you can demonstrate my skills and abilities.
        </p>
        <p>Loves to learn new things in my field....</p>
        <Link className="button-89" to="/home">
          Know More
        </Link>
      </div>
    </div>
  );
};

export default Mainpage;
