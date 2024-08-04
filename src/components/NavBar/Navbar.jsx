import React from "react";
import "./Navbar.css";
import logo_icon from "../../assets/logo_icon.png";
import { useState, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menuImg from "../../assets/menu.png";
import close from "../../assets/close.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar ">
      <img src={logo_icon} alt="" />
      <img
        src={menuImg}
        alt=""
        className="menu-icon"
        style={{ width: "20px", height: "20px" }}
        onClick={openMenu}
      />
      <ul className="nav-menu" ref={menuRef}>
        <img
          src={close}
          alt=""
          className="nav-mob-close"
          onClick={closeMenu}
          style={{ width: "20px", height: "20px" }}
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p>Home</p>
          </AnchorLink>{" "}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p>About Me</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p>Services</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p>Portfolio</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
