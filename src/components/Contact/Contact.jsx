import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        {/*      */}
      </div>
      <div className="contact-session">
        <div className="contact-left">
          <h1>Let's Connect</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            connect with me and lets talk.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <p>taofeekabdussalam07@gmail.com</p>
            </div>
            <div className="contact-detail">
              <p>+2347060787292</p>
            </div>
            <div className="contact-detail">PortHacourt Nigeria</div>
          </div>
        </div>
        <form action="" className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />

          <label htmlFor="text">Write your message here</label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="8"
            placeholder="Enter your Message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
