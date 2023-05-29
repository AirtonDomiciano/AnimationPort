import React from "react";

export default function MenuSections(props) {
  return (
    <div id="menuSections" className="menu">
      <a href="#home" className="smoothscroll menu-icon fa-solid fa-house" />
      <a href="#about" className="smoothscroll menu-icon fa-solid fa-user" />
      <a href="#projects" className="smoothscroll menu-icon fa-solid fa-code" />
      <a href="#experience" className="smoothscroll menu-icon fa-solid fa-briefcase" />
      <a href="#contact" className="smoothscroll menu-icon fa-solid fa-envelope" />
    </div>
  );
}
