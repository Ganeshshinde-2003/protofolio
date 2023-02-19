import React from "react";
import "./contact.css";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contactme">
      <div className="formFill">
        <form id="formcreate">
          <h1 className="creat"> Take A Coffee And Chat With Me </h1>
          <input id="titlename" placeholder="Enter Name" />
          <input id="emailname" type="email" placeholder="Enter Your Email" />
          <input type="text" id="subjectname" placeholder="Enter The Subject" />
          <textarea
            id="textareadis"
            placeholder="Description..."
            cols={40}
            rows={10}
            draggable={false}
          />
          <input
            id="submit"
            class="button-57"
            type="submit"
            value="Send Message"
          />
        </form>
      </div>
      <div className="footer">
        <h1>Ganesh Shinde</h1>
        <div className="footer-container">
          <div className="left-footer">
            <h3>Designed By @Ganesh Shinde</h3>
            <h5>@All Rights are Reserved</h5>
          </div>
          <div className="right-footer">
            <Link
              to="https://github.com/Ganeshshinde-2003"
              className="footer-icons"
            >
              <FaGithub />
            </Link>
            <Link
              to="https://www.instagram.com/gani_shinde_/"
              className="footer-icons"
            >
              <FaInstagram />
            </Link>
            <Link to="https://twitter.com/Gani_Shinde" className="footer-icons">
              <FaTwitter />
            </Link>
            <Link
              to="https://www.linkedin.com/in/ganesh-shinde-01380825b/"
              className="footer-icons"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
