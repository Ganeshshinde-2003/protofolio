import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./contact.css";
import { useForm } from "react-hook-form";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import firebase from "./firebase.js";

const Contact = () => {
  const schema = yup.object().shape({
    title: yup.string().required("You Must Add A Name..."),
    email: yup.string().required("You Must Add A Email..."),
    sub: yup.string(),
    description: yup
      .string()
      .required("You Must Add A Description About Your Post"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onCreatMessage = async (data) => {
    // // const data2 = {
    // //   title: data.title,
    // //   email: data.email,
    // //   sub: data.sub,
    // //   discription: data.discription,
    // // };
    // await addDoc(collection(db, "message"), {
    //   title: data.title,
    //   email: data.email,
    //   sub: data.sub,
    //   discription: data.discription,
    // });
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
          />
          <p>{errors.title?.message}</p>
          <input
            id="emailname"
            type="email"
            placeholder="Enter Your Email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <input
            type="text"
            id="subjectname"
            placeholder="Enter The Subject"
            {...register("sub")}
          />
          <textarea
            id="textareadis"
            placeholder="Description..."
            cols={40}
            rows={10}
            draggable={false}
            {...register("discription")}
          />
          <p>{errors.discription?.message}</p>
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
