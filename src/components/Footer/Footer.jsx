import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          {/* <img src="" alt="" /> */}
          <p>
            I am a Software developer baddsed in Nigeria with over 3 years of
            experience
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            {/* <img src="for user icon" alt="" /> */}
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-buttom">
        <p className="footer-buttom-left">
          &copy; 2024 Taofeek Abdulsalam. All rights reserved.
        </p>
        <div className="footer-buttom-right">
          <p>Term of services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
