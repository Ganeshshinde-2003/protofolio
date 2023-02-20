import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./contact.css";
import { useForm } from "react-hook-form";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { json, Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    title: "",
    email: "",
    sub: "",
    discription: "",
  });

  const schema = yup.object().shape({
    title: yup.string().required("*You Must Add A Name..."),
    email: yup.string().required("*You Must Add A Email..."),
    sub: yup.string().required("*You Must Add A Subject..."),
    discription: yup
      .string()
      .required("*You Must Add A Description About Your Post"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onCreatMessage = async (e) => {
    // e.preventDefault();
    const { title, email, sub, discription } = details;

    const res = await fetch(
      "https://peotofolio-default-rtdb.firebaseio.com/portfolio.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          email,
          sub,
          discription,
        }),
      }
    );
    navigate("/");
  };

  return (
    <div className="contactme">
      <div className="formFill">
        <form id="formcreate" onSubmit={handleSubmit(onCreatMessage)}>
          <h1 className="creat"> Take A Coffee And Chat With Me </h1>
          <input
            id="titlename"
            placeholder="Enter Name"
            {...register("title")}
            onChange={(e) => setDetails({ ...details, title: e.target.value })}
          />
          <p className="errormsg">{errors.title?.message}</p>
          <input
            id="emailname"
            type="email"
            placeholder="Enter Your Email"
            {...register("email")}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
          />
          <p className="errormsg">{errors.email?.message}</p>
          <input
            type="text"
            id="subjectname"
            placeholder="Enter The Subject"
            {...register("sub")}
            onChange={(e) => setDetails({ ...details, sub: e.target.value })}
          />
          <p className="errormsg">{errors.sub?.message}</p>
          <textarea
            id="textareadis"
            placeholder={`Subject Description: ${details.sub}`}
            cols={40}
            rows={10}
            draggable={false}
            {...register("discription")}
            onChange={(e) =>
              setDetails({ ...details, discription: e.target.value })
            }
          />
          <p className="errormsg">{errors.discription?.message}</p>
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
