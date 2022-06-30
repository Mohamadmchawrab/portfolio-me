import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_conatiner">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="option-icon" />
            <h4>Email</h4>
            <h5>dummyegator@gmail.com</h5>
            <a href="mailto: dummyegator@gmail.com"> Send a message </a>
          </article>
          <article className="contact_option">
            <AiOutlineLinkedin className="option-icon" />
            <h4>Linkedin</h4>
            <h5>dummyegator@gmail.com</h5>
            <a href="www.linkedin.com"> Send a message </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="option-icon" />
            <h4>WhatsApp</h4>
            <h5>+96171480345</h5>
            <a href="https://api.whatsapp.com/send?phone=+96171480345">
              {" "}
              Send a message{" "}
            </a>
          </article>
        </div>

        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
