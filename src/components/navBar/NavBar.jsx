import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import "./NavBar.css";
import TextHeader from "./textHeader/TextHeader";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <TextHeader></TextHeader>

      <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo"></img>
        </div>
        <div className={`menu ${isOpen ? "open" : ""}`}>
          <a href="#inicio">Inicio</a>
          <a href="#seccion1">Sección 1</a>
          <a href="#seccion2">Sección 2</a>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
      </nav>
    </>
  );
};

export default NavBar;
