import React from "react";
import "./contact.css";

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
    </div>
  );
};

export default Contact;
