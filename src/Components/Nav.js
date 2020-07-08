import React, { useState, useEffect } from "react";

function Nav() {
  const [isActive, toggleActive] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const handleClick = () => {
    toggleActive(!isActive);
  };
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 300;
      if (scrollCheck !== isTop) {
        setIsTop(!isTop);
      }
    });
  });

  return (
    <nav className={isTop ? "nav" : "nav scrolled"}>
      <div class="flex-wrapper">
        <a className="nav__logo" href="#intro">
          Richard Coric
        </a>
        <div
          class={isActive ? "hamburger open" : "hamburger"}
          onClick={handleClick}
        >
          <div className="burger"></div>
        </div>
      </div>
      <ul className={isActive ? "nav__list active" : "nav__list"}>
        <li className="nav__link">
          <a href="#about" onClick={handleClick}>
            About
          </a>
        </li>
        <li className="nav__link">
          <a href="#projects" onClick={handleClick}>
            Projects
          </a>
        </li>
        <li className="nav__link">
          <a href="#blog" onClick={handleClick}>
            Blog
          </a>
        </li>
        <li className="nav__link">
          <a href="#contact" onClick={handleClick}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
