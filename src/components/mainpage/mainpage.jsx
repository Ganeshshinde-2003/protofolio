import React from "react";
import "./mainpage.css";
import myimage from "../images/photo2.png";

const Mainpage = () => {
  return (
    <div className="Mainpage-container">
      <div className="main-left">
        <img src={myimage} alt="myimage" />
      </div>
      <div className="main-right"></div>
    </div>
  );
};

export default Mainpage;
